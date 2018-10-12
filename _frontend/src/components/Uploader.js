import React from 'react';

import Dropzone from 'react-dropzone';

const Uploader = ({
  files,
  handleOnDrop,
  imageMaxSize,
  acceptedFileTypes
}) => (
  <>
  {files !== null ? files.map((item, i) => (
  <div key={i} style={{width:'300px', height: '300px'}}>

    <img 
      alt=''
      src={item.preview}
      style={{width:'300px', height: '300px'}} />
  </div>
  )) : ''}
  <Dropzone
    onDrop={handleOnDrop}
    maxSize={imageMaxSize}
    multiple={true}
    accept={acceptedFileTypes}
    className='dropzone'>
    <p>이곳으로 이미지를 드래그해주세요.</p>
    <p>지원되는 파일 형식: png, jpg, gif</p>
  </Dropzone>
  {console.log(files)}
  <article id='write'>
    <div class="card title">
      <div class="input-field col s12">
        <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
        <label for="textarea2">Textarea</label>
      </div>
    </div>
  </article>
  </>
)

export default Uploader;