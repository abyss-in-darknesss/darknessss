import { User, Post, PostImg, UserProfile } from '../../../database/models';
import { Map } from 'immutable';

export const postWrite = async (req, res) => {
  const body = req.body;

  let status = Map({
    success: true,
    errors: Map({})
  });

  status = body.title ? status : status.setIn(['errors', 'title'], Map({message: "타이틀이 누락되었습니다."}));
  status = body.bio ? status : status.setIn(['errors', 'bio'], Map({message: "콘텐츠가 누락되었습니다."}));
  
  const isSuccess = !status.get('errors').count();

  if(isSuccess) {
    await Post.create({
      user_id: req.user,
      title: body.title,
      bio: body.bio,
      like: 0,
      hit: 0,
    }).then(post => {
      req.files.forEach(file => {
        PostImg.create({
          post_id: post.id,
          img_url: file.location,
        });
      });
    }).catch(err => {
      console.error(err);
      status = status.setIn(['errors', 'db'], Map({message: "db에 입력할 수 없습니다."}));
      status = status.set('success', false);
    });
    console.log(status);
    return res.json(status.toJSON());
  }else {
    status = status.set('success', false);
    console.log(status);
    return res.json(status.toJSON());
  }
}

export const getPostsAll = async (req, res) => {
  const query = req.query;

  await Post.findAll({
    limit: 2,
    include: [{
        model: PostImg,
        attributes: ['img_url']
      }, {
        model: User,
        attributes: ['id'],
        include:[{
          model: UserProfile
        }]
      }
    
    ]
  }).then(post => {
    console.log(post)
    return res.send(post);
  })
}

export const getPostById = async (req, res) => {
  const query = req.query;
  console.log(query);
  
  await Post.findOne({
    where: {
      id: query.postId
    },
    include: [
      {
        model: PostImg
      }
    ]
  }).then(post => {
    return res.send(post);
  });
}