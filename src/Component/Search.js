import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
    onSubmitSearch: PropTypes.func,
};

Search.defaultProps = {
    onSubmitSearch: null,
};

function Search(props) {
    const {onSubmitSearch} = props;
    const [search, setSearch] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleSearchTermChange(e) {
        setSearch(e.target.value);

        if(!onSubmitSearch) return;

        if (typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                search: e.target.value,
            };
            onSubmitSearch(formValues);
        }, 300)
    }

    return (
        <div className="col-12">
            <div className="form-group">
                <div className="btn-group">
                    <form>
                        <input type="text" className="form-control"
                           value = {search}
                           onChange={handleSearchTermChange}
                           aria-describedby="helpId"
                           placeholder="Nhập từ khoá  "
                           style={{width: '610px'}} />
                    </form>
                    <div className="btn btn-info"> Tìm</div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Search;