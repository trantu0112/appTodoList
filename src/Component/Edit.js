import React, {useState} from 'react';
import PropTypes from 'prop-types';

Edit.propTypes = {
    onTodoEditStatus: PropTypes.bool,
    onEditSubmit: PropTypes.func,
    postEdit: PropTypes.object.isRequired,
};

Edit.defaultProps = {
    onTodoEditStatus: null,
    onEditSubmit: null,
};

function Edit(props) {
    const {onEditSubmit, onTodoEditStatus, postEdit} = props;
    const [valueEdit, setValueEdit] = useState('');

    function handleEditValueChange(e) {
        const name = e.target.name;
        const values = e.target.value;
        setValueEdit({
            ...postEdit,
            ...valueEdit,
            [name]: values,
        });
    }

    function handleEditSubmit(e) {
        e.preventDefault();
        if(!onEditSubmit) return ;

        const formValue = valueEdit;
        onEditSubmit(formValue);
    }

    if(onTodoEditStatus === true ){
        return (
            <form action="" onSubmit={handleEditSubmit}>
                <div className="card border-warning text-black font-weight-bold bg-white mt-3 mb-3">
                    <div className="card-header bg-warning text-center">
                        <h4>Sửa nội dung</h4>
                    </div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <label>Tiêu đề note</label>
                            <input
                                type="text"
                                name="title"
                                className="form-control"
                                placeholder="Tiêu đề note"
                                defaultValue={postEdit.title}
                                onChange={handleEditValueChange}
                            />
                        </div>
                        <div className="form-group">
                        <label>Nội dung note</label>
                        <textarea
                            type="text"
                            className="form-control"
                            name="description"
                            aria-describedby="helpIdNoteTitle"
                            placeholder="Nội dung note"
                            defaultValue={postEdit.description}
                            onChange={handleEditValueChange}>
                        </textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-block btn-warning" value="Lưu" />
                        </div>
                    </div>
                </div>
            </form>
        );
    }else {
        return true;
    }
}

export default Edit;