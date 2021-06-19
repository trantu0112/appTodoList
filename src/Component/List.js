import React, {useState} from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
    const {posts, onTodoClick, onTodoEditClick, search} = props;

    function handleClick(post) {
        if (onTodoClick){
            onTodoClick(post);
        }
    }
    // **** a = b chia c ****
    function handleEditClick(post) {
        // let a,b,c;
        //  a = b /c
        if (onTodoEditClick){
            onTodoEditClick(post);
        }
    }
    return  (
        <>
            {
                !search ? <div className="col-8">
                    <div id="noteList" role="tablist" aria-multiselectable="true">
                        <div className="card">
                            {
                                // posts.map chỉ được gọi khi posts trả về true
                                posts&&posts.map(post => (
                                    <div key={post.id}>
                                        <div className="card-header" role="tab" id="note1">
                                            <h5 className="mb-0 d-flex justify-content-between">
                                                <a className=""
                                                   data-toggle="collapse"
                                                   aria-expanded="true"
                                                   href={"#number" + post.id}
                                                   aria-controls="noteContent1"
                                                >
                                                    {post.title}
                                                </a>
                                                <div>
                                                    <button onClick={() => handleEditClick(post)} className="btn btn-warning">
                                                        Sửa
                                                    </button>
                                                    <button onClick={() => handleClick(post)} className="btn btn-danger">
                                                        Xóa
                                                    </button>
                                                </div>
                                            </h5>
                                        </div>
                                        <div
                                            className="collapse in"
                                            aria-labelledby="note1"
                                            id={"number" + post.id}>
                                            <div className="card-body">{post.description}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div> :  <div className="col-8">
                    <div id="noteList" role="tablist" aria-multiselectable="true">
                        <div className="card">
                            {
                                search?.map(post => (
                                    <div key={post.id}>
                                        <div className="card-header" role="tab" id="note1">
                                            <h5 className="mb-0 d-flex justify-content-between">
                                                <a className=""
                                                   data-toggle="collapse"
                                                   aria-expanded="true"
                                                   href={"#number" + post.id}
                                                   aria-controls="noteContent1"
                                                >
                                                    {post.title}
                                                </a>
                                                <div>
                                                    <button onClick={() => handleEditClick(post)} className="btn btn-warning">
                                                        Sửa
                                                    </button>
                                                    <button onClick={() => handleClick(post)} className="btn btn-danger">
                                                        Xóa
                                                    </button>
                                                </div>
                                            </h5>
                                        </div>
                                        <div
                                            className="collapse in"
                                            aria-labelledby="note1"
                                            id={"number" + post.id}>
                                            <div className="card-body">{post.description}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default List;