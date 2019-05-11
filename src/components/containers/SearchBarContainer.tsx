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
    return {
        searchFieldValue: state.searchFieldValue as string
    };
}

const mapDispatchToProps = function(dispatch, _ownProps) {
    return {
        searchBookmark: function (event) {
            const target = event.target;
            dispatch(doSearchBookmark({value: target.value}));
        }
    }
}
  
  export default connect<IStateProps,IDispatchProps>(mapStateToProps,mapDispatchToProps)(SearchBarContainer);