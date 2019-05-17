import React from "react";
import { connect } from "react-redux";

import SearchBar from "../views/SearchBar";
import { doSearchBookmark } from "../../actions/searchBookmark";

const SearchBarContainer: React.FunctionComponent<any> = (props) => {
    let { searchFieldValue, searchBookmark } = props;
    return <SearchBar
        value={searchFieldValue}
        changeHandle={searchBookmark} />
}

interface IStateProps {
    searchFieldValue: string,
}
interface IDispatchProps {
    searchBookmark(any)
}

const mapStateToProps = (state) => {
    let { searchFieldValue } = state.bookmarkState;
    return {
        searchFieldValue: searchFieldValue as string
    };
}
const mapDispatchToProps = (dispatch, _ownProps) => {
    return {
        searchBookmark: function (event) {
            const target = event.target;
            let { value } = target;

            // простая валидация для формы поиска
            if (value.length >= 256) {
                alert("Ошибка: Превышено допустимое количество символов. Максимум: " + 256);
                return;
            }

            dispatch(doSearchBookmark({ value }));
        }
    }
}

export default connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(SearchBarContainer);