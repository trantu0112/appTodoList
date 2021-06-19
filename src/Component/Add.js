import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

Add.propTypes = {
    onSubmit: PropTypes.func,
};

Add.defaultProps = {
    onSubmit: null,
};

function Add(props) {
    const {onSubmit} = props;
    const [value, setValue] = useState({ title: '', description: '' });

    function handleValueChange(e) {
        const name = e.target.name;
        const values = e.target.value;
        setValue({
            ...value,
            [name]: values
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!onSubmit) return ;

        const formValue = value;
        onSubmit(formValue);

        // reset
        setValue({ title: '', description: '' });
    }
    return (
        <div className="">
            <div className="card border-primary mb-3">
                <div className="card-header bg-primary text-center">
                    <h4>Thêm mới nội dung</h4>
                </div>
                <form action="" className="card-body" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Tiêu đề note</label>
                        <input type="text"
                               className="form-control"
                               name="title"
                               aria-describedby="helpIdNoteTitle"
                               placeholder="Tiêu đề note"
                               value={value.title}
                               onChange={handleValueChange}
                        />
                        <small
                            id="helpIdNoteTitle"
                            className="form-text text-muted"
                        >
                            Điền tiêu đề vào đây
                        </small>
                    </div>
                    <div className="form-group">
                        <label>Nội dung note</label>
                        <textarea
                            type="text"
                            className="form-control"
                            name="description"
                            aria-describedby="helpIdNoteTitle"
                            placeholder="Nội dung note"
                            value={value.description}
                            onChange={handleValueChange}>
                        </textarea>
                        <small
                            id="helpIdNoteTitle"
                            className="form-text text-muted"
                        >
                            Điền nội dung vào đây
                        </small>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-block" value="Thêm mới"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Add;