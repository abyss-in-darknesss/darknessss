import React, { Component } from 'react';
import { Uploader } from 'components'
import * as verify from 'lib/verify';

const imageMaxSize = 100000; // bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif';

class Write extends Component {

  state = {
    files: []
  }

  handleOnDrop = (files, rejectedFiles) => {
    if(rejectedFiles && rejectedFiles.length > 0) {
      verify.file(rejectedFiles, imageMaxSize, acceptedFileTypes);
    }else if(files && files.length > 0) {
      const isVerified = verify.file(files, imageMaxSize, acceptedFileTypes);

      if(isVerified) {
        this.setState({
          files: this.state.files.concat(files)
        })
      }
    }
  }
  

  render() {
    return(
      <>
        <Uploader
          files={this.state.files}
          handleOnDrop={this.handleOnDrop}
          imageMaxSize={imageMaxSize}
          acceptedFileTypes={acceptedFileTypes} />
      </>
    );
  }
}

export default Write;