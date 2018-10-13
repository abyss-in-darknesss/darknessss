import React, { Component } from 'react'
import { articleRequest } from 'actions/article'
import { connect } from 'react-redux';
import { Get } from 'components'

class Article extends Component {

  componentDidMount() {
    this.props.articleRequest(this.props.match.params.index)
  }

  render() {
    return(
      <Get data={this.props.data}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.article.article.data,
    status: state.article.list.status,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      articleRequest: (index) => {
          return dispatch(articleRequest(index));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);