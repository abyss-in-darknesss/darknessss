import React from 'react';

import Dropzone from 'react-dropzone';

const Post = ({
  imgs,
  title,
  bio,
  onPost,
  handleOnDrop,
  handleChange,
  handleDelete,
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
      <p>이미지를 클릭하면 삭제합니다.</p>
      <p>지원되는 파일 형식: png, jpg, gif</p>
    </Dropzone>
    <article id="write">
    <div id="post-imgs">
    {console.log(imgs)}
      {imgs.length > 0 ? imgs.map((item, i) => (
        <div className="img" key={i} style={{width: '300px', height: '200px', backgroundColor:'#000'}}
        >
          <img
            alt=''
            src={item}
            style={{ width: '300px', height: '200px' }}
            name={i}
        onClick={handleDelete} 
            />
        </div>
      )) : ''}
      </div>
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