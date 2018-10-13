import React from 'react';
import SlideShow from 'react-image-show';

const Get = ({data}) => (
  <article id="article">
  {Array.isArray(data.post_imgs) ? (
    <>
      {data.post_imgs.length > 1 ? 
      <SlideShow
        images={data.post_imgs.map(img => img.img_url)}
        width="920px"
        imagesWidth="800px"
        imagesHeight="450px"
        imagesHeightMobile="56vw"
        thumbnailsWidth="920px"
        thumbnailsHeight="12vw"
        thumbnails infinite
      /> :
      <img
        alt="img"
        src={data.post_imgs.map(img => img.img_url)}
      />}
      <div className="card">
        <div className="title">
          {data.title}
        </div>
        <div className="bio">
          {data.bio}
        </div>
      </div>
    </>
    ): ''}   
  </article>
)

export default Get;