import React, { Component } from 'react';
import { Post } from 'components';
import * as verify from 'lib/verify';
import { connect } from 'react-redux';
import { articlePostRequest } from 'actions/article'
import { produce } from 'immer';

const imageMaxSize = 100000; // bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif';

class Write extends Component {

  state = {
    bioHeight: 3.6,
    files: [],
    title: '',
    bio: ''
  }

  handleChange = (e) => {
    const nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleOnDrop = (files, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      verify.file(rejectedFiles, imageMaxSize, acceptedFileTypes);
    } else if (files && files.length > 0) {
      const isVerified = verify.file(files, imageMaxSize, acceptedFileTypes);
      
      if (isVerified) {
        produce(this.state, draft => {
          draft.files.concat(files);
        })
        this.setState({
          files: this.state.files.concat(files)
        })
        
        console.log(this.state.files);
      }
    }
  }

  handlePost = () => {
    const data = new FormData();
    data.append('title', this.state.title);
    data.append('bio', this.state.bio);
    for(let i in this.state.files){
    if(this.state.files.length > 0) {
        data.append('files', this.state.files[i]);
    }
  }
    this.props.articlePostRequest(data).then(
      () => {
        if (this.props.postStatus.status === "SUCCESS") {
          this.setState({
            files: [],
            title: '',
            description: '',
          });
        } else {
          // ERROR
          console.log("error!!")
        }
      }
    )
  }

  render() {
    return (
      <>
        <Post
          files={this.state.files}
          title={this.state.title}
          bio={this.state.bio}
          onPost={this.handlePost} 
          handleOnDrop={this.handleOnDrop}
          handleChange={this.handleChange}
          handleKeyPress={this.handleKeyPress}
          imageMaxSize={imageMaxSize}
          acceptedFileTypes={acceptedFileTypes}/>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authentication.status.isLoggedIn,
    postStatus: state.article.post
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    articlePostRequest: (data) => {
      return dispatch(articlePostRequest(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Write);