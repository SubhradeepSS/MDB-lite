const { Comment } = require('../models/comment')
const { Blog } = require('../models/blog')

const addComment = (req, res) => {
    let newComment = new Comment()
    newComment.user = req.user
    newComment.comment = req.body.comment
    Blog.findById( req.body.id ).then(blog => {
        newComment.blog = blog._id
        newComment.save().then(() => {
            res.redirect('/mdb/movies')
        })
    })
}

const editComment = (req, res) => {
    Comment.findById(req.body.id).then(comment => {
        comment.comment = req.body.comment
        comment.save().then(() => {
            res.redirect('/mdb/')
        })
    })   
}

const deleteComment = (req, res) => {
   Comment.findByIdAndDelete(req.body.id).then(() => {
       res.redirect('/mdb/')
   })
}

const getYourComments = (req, res) => {
    Comment.find({ user: req.user }).then(comments => {
        res.render('mdb/comment/comments', { comments })
    })
}


module.exports = { addComment, editComment, deleteComment, getYourComments }