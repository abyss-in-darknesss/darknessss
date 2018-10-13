import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from '../config/aws';

const memorystorage = multer.memoryStorage();

const upload = multer({
  storage: multerS3({
    s3: new aws.S3(),
    bucket: 'testjjw',
    acl: 'public-read',
    key: function(req, file, cb) {
      let path = `${req.user}/${req.body.title}/${file.originalname}`; 
      cb(null, path);
    }
  })
});

export default upload;