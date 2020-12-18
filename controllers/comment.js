const { Comment } = require('../models/comment')
const { Blog } = require('../models/blog')

const addComment = (req, res) => {
    let newComment = new Comment()
    newComment.user = req.user
    newComment.comment = req.body.comment
    Blog.findById( req.body.id ).then(blog => {
        newComment.save().then(() => {
            blog.comments.push(newComment)
            blog.save().then(() => {
                res.redirect('/mdb/movies')
            })
        })
    })
}

const editComment = (req, res) => {
    
}

const deleteComment = (req, res) => {
   
}


module.exports = { addComment, editComment, deleteComment }