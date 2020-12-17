const { Comment } = require('../models/comment')
const { Blog } = require('../models/blog')

const addComment = (req, res) => {
    let newComment = new Comment()
    newComment.user = req.user
    newComment.comment = req.body.comment
    Blog.findOne({ _id: req.body.id }).then(blog => {
        newComment.blog = blog
        newComment.save().then(() => {
            res.redirect('/mdb/movies')
        })
    })
}

module.exports = { addComment }