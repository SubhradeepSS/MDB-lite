const { Blog } = require('../models/blog')
const { Comment } = require('../models/comment')
const { Movie } = require('../models/movie')

const getBlog = (req, res) => {
    Blog.findOne({ _id: req.body.id }).then(blog => {
        res.render('mdb/blog/blog', { blog })
    })
}

const addBlog = (req, res) => {
    const newBlog = new Blog()
    newBlog.user = req.user
    newBlog.title = req.body.title
    newBlog.content = req.body.content
    
    Movie.findOne({ name: req.body.name }).then(movie => {
        newBlog.movie = movie
        newBlog.save().then(() => {
            res.redirect('/mdb/movies')
        })
    })
}

module.exports = { getBlog, addBlog }