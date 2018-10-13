import React, { Component } from 'react';
import { articleListRequest } from 'actions/article'
import { connect } from 'react-redux'
import { ItemList } from 'components';

class Home extends Component {

  componentDidMount() {
    this.props.memoListRequest();
  }

  render() {
    return(
        <ItemList
          data={this.props.articleData}
        />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleData: state.article.list.data,
    listStatus: state.article.list.status,
    isLast: state.article.list.isLast
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      articleListRequest: () => {
          return dispatch(articleListRequest());
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);