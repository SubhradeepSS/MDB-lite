const { Blog } = require('../models/blog')
const { Comment } = require('../models/comment')
const { Movie } = require('../models/movie')

const getBlog = (req, res) => {
    Blog.findOne({ _id: req.body.id }).then(blog => {
        Comment.find({ blog: blog._id }).then(comments => {
            res.render('mdb/blog/blog', { blog, authUser: req.user, comments })
        }) 
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

const editBlog = (req, res) => {
    Blog.findById(req.body.id).then(blog => {
        blog.title = req.body.title
        blog.content = req.body.content
        blog.save().then(() => {
            res.redirect('/mdb/movies')
        })
    })
}

const deleteBlog = (req, res) => {
    Blog.findById(req.body.id).then(blog => {
        Comment.deleteMany({ blog:blog._id }).then(() => {
            blog.remove().then(() => {
                res.redirect('/mdb/movies')
            })
        })
    })
}

const getYourBlogs = (req, res) => {
    Blog.find({ user: req.user }).then(blogs => {
        res.render('mdb/blog/blogs', { blogs })
    })
}

module.exports = { getBlog, addBlog, editBlog, deleteBlog, getYourBlogs }