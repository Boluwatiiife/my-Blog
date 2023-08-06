const express=require('express');
const blogComtroller=require('../controllers/blogController');

const router = express.Router();

// blog routes
router.get('/create',blogComtroller.blog_create_get);

router.get('/',blogComtroller.blog_index);

router.post('/',blogComtroller.blog_create_post);

router.get('/:id',blogComtroller.blog_details);

router.delete('/:id',blogComtroller.blog_delete);

module.exports=router;