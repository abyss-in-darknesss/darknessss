import React from 'react';
import { Link } from 'react-router-dom'
const Item = ({src, index}) => (
  <article>
    <Link to="/img">
      <img src={src} className="card" alt="desc" />
    </Link> 
      <div className="article-info">
        <Link to ="/info">
          <img className="circle user-img-0" alt="user-profile" src="https://www.worldcrunch.com/assets/img/avatars/thumbnails/default-user-img-profile.jpg"/>
        </Link>
      </div>
  </article>
); 

const ItemList = () => (
  <div className="item-list">
    <Item index="10000" src="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
    <Item index="10001" src="http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" />
    <Item index="10002" src="https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg" />
    <Item index="10003" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" />
    <Item index="10004" src="https://r.hswstatic.com/w_907/gif/tesla-cat.jpg" />
    <Item index="10005" src="http://www.catster.com/wp-content/uploads/2017/08/Pixiebob-cat.jpg" />
    <Item index="10006" src="https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg" />
    <Item index="10007" src="http://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg" />
    <Item index="10008" src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350" />
    <Item index="10009" src="https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg" />
    <Item index="10010" src="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
    <Item index="10011" src="http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" />
    <Item index="10012" src="https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg" />
  </div>
);

export default ItemList;