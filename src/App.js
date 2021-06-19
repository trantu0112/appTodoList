import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Search from "./Component/Search";
import Edit from "./Component/Edit";
import List from "./Component/List";
import Add from "./Component/Add";
import { v4 as uuidv4 } from 'uuid';
//import querystring from "querystring";
import firebase from 'firebase';
import {noteData} from "./firebaseConnect";

function App() {
    const [postList, setPostList] = useState([]);
    const [editStatus, setEditStatus] = useState(false);
    const [editPost, setEditPost] = useState([]);
    const [searchText, setSearchText] = useState();

    useEffect(() => {
        async function fetchPostList() {
            try{
                noteData.on('value', (notes) => {
                    // 1 là key(firebase tự sinh) 2 là val() (những phần text nhập vào)
                    var arrayData = [];
                    notes.forEach(element => {
                        const key = element.key;
                        const noteTitle = element.val().title;
                        const noteDescription = element?.val()?.description;
                        // convert thành mảng
                        arrayData.push({
                            id:key,
                            title:noteTitle,
                            description:noteDescription
                        })
                    });
                    setPostList(arrayData);
                })
            }catch (e) {
                console.log('Failed to fetch post list: ', e.message);
            }
        }
        fetchPostList();
    },[]);

    function handleAddFormSubmit(formValues) {
        const newTodo = {
            id: uuidv4(),// package
            ...formValues,
        };
        const newTodoList = [...postList];
        newTodoList.push(newTodo);
        setPostList(newTodoList);

        noteData.push(newTodo);
        console.log(' Them du lieu ' + JSON.stringify(newTodo) + " thanh cong ");
    }

    function handleDelete(post) {
        // hàm filter lấy tất cả các post có id khác id truyền vào
        const newTodoList = postList.filter(x => x.id !== post.id);
        setPostList(newTodoList);

        noteData.child(post.id).remove();
        console.log(' Da Xóa dữ liệu có id là' + JSON.stringify(post.id)+ " thanh cong ");
    }

    function handleEdit(post) {
        setEditStatus(!editStatus);
        setEditPost({...post});
    }

    function handleEditSubmit(formValues) {
        setEditStatus(!editStatus);
        postList.forEach((value,key) => {
            if(value.id === formValues.id){
                value.title = formValues.title;
                value.description = formValues.description;
            }
        })

        noteData.child(formValues.id).update({
            title: formValues.title,
            description: formValues.description
        }); // lấy ra phần tử có id tương ứng
        console.log(' Da cap nhat du lieu' + JSON.stringify(formValues.title)+ " thanh cong ");
    }
    
    function handleSearch(textSearch) {
        const ketqua = [];
        postList.forEach((item) => {
            if(item.title.indexOf(textSearch.search) !== -1){
                ketqua.push(item);
            }
        })
        setSearchText(ketqua);
    }
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-3">My TodoList</h1>
                    <p className="lead">Reacthooks</p>
                    <hr className="my-2" />
                </div>
            </div>
            <div className="searchForm">
                <div className="container">
                    <div className="row">
                        <Search onSubmitSearch={handleSearch}/>
                        <List search={searchText} posts={postList} onTodoClick={handleDelete} onTodoEditClick={handleEdit}/>
                        <div className="col-4">
                            <Edit onTodoEditStatus={editStatus} postEdit={editPost} onEditSubmit={handleEditSubmit}/>
                            <hr/>
                            <Add onSubmit={handleAddFormSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark">
                <div className="container text-center">
                    <h1 className="display-3">FOOTER</h1>
                </div>
            </div>
        </div>

    );
}

export default App;