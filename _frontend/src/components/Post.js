import React from 'react';

import Dropzone from 'react-dropzone';

const Post = ({
  files,
  title,
  bio,
  onPost,
  handleOnDrop,
  handleChange,
  handleKeyPress,
  imageMaxSize,
  acceptedFileTypes
}) => (
  <>
    <Dropzone
      onDrop={handleOnDrop}
      maxSize={imageMaxSize}
      multiple={true}
      accept={acceptedFileTypes}
      className='dropzone'>
      <p>이곳으로 이미지를 드래그해주세요.</p>
      <p>지원되는 파일 형식: png, jpg, gif</p>
    </Dropzone>
    <article id="write">
      {files !== null ? files.map((item, i) => (
        <div key={i} style={{ width: '300px', height: '300px' }}>
          <img
            alt=''
            src={item.preview}
            style={{ width: '300px', height: '300px' }} />
        </div>
      )) : ''}
      <div className="card">
        <div className="input title">
          <input
            type="text"
            name="title"
            placeholder="제목"
            onChange={handleChange}
            value={title}
          />
        </div>
        <div className="input bio">
          <textarea
            type="text"
            name="bio"
            placeholder="설명"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            value={bio}
          />
        </div>
      </div>
        <div className="waves-effect waves-light btn"
          onClick={onPost}>작성</div>
    </article>
  </>
)

export default Post;