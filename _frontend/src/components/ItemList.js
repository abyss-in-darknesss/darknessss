import React from 'react';
import { Link } from 'react-router-dom'
const Item = ({data}) => (
  <article>
    <Link to={`article/${data.id}`}>
      <img src={data.post_imgs[0].img_url} className="card" alt="desc" />
    </Link> 
      <div className="article-info">
        <Link to ={data.id}>
          <span className="list-title">{data.title}</span>
          <img className="circle user-img-0" alt="user-profile" src="https://www.worldcrunch.com/assets/img/avatars/thumbnails/default-user-img-profile.jpg"/>
          <span>{data.user.user_profile.username}</span>
        </Link>
      </div>
  </article>
); 

const ItemList = ({data}) => (
  <div className="item-list">
  {data.map((article, i) => (
    <Item
      key={i}
      data={article} />
  ))}
  </div>
);

export default ItemList;