import React from 'react';
import { Link } from 'react-router-dom'
const Item = ({src}) => (
  <article>
    <Link to="/img">
      <img src={src} className="card" alt="desc" />
      <div className="article-info">
        <Link to ="/info">adsasd</Link>
      </div>
    </Link>
  </article>
); 

const ItemList = () => (
  <div className="item-list">
    <Item src="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
    <Item src="http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" />
    <Item src="https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg" />
    <Item src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" />
    <Item src="https://r.hswstatic.com/w_907/gif/tesla-cat.jpg" />
    <Item src="http://www.catster.com/wp-content/uploads/2017/08/Pixiebob-cat.jpg" />
    <Item src="https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg" />
    <Item src="http://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg" />
    <Item src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350" />
    <Item src="https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg" />
    <Item src="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
    <Item src="http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" />
    <Item src="https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg" />
  </div>
);

export default ItemList;