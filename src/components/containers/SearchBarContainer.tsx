import React from 'react';
import { connect } from 'react-redux';

import SearchBar from '../views/SearchBar';
import { doSearchBookmark } from '../../actions/searchBookmark';

class SearchBarContainer extends React.Component<any> {
    render() {
        return (
            <SearchBar 
                value={this.props.searchFieldValue} 
                changeHandle={this.props.searchBookmark} />
        )
    }
}

interface IStateProps {
    searchFieldValue: string,
}
interface IDispatchProps {
    searchBookmark(any)
}

function mapStateToProps(state) {
    let {searchFieldValue} = state.bookmarkState;
    return {
        searchFieldValue: searchFieldValue as string
    };
}

const mapDispatchToProps = function(dispatch, _ownProps) {
    return {
        searchBookmark: function (event) {
            const target = event.target;
            let {value} = target;

            if (value.length >= 256) {
                alert("Ошибка: Превышено допустимое количество символов. Максимум: "+256);
                return;
            }

            dispatch(doSearchBookmark({value}));
        }
    }
}
  
  export default connect<IStateProps,IDispatchProps>(mapStateToProps,mapDispatchToProps)(SearchBarContainer);