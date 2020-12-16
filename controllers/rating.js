const { Rating } = require('../models/rating')
const { Movie } = require('../models/movie')

const getRatings = (req, res) => {
    Movie.findOne({ name: req.params.name }).then(movie => {
        Rating.find({ movie }).then(ratings => {

            const UserRated = () => {
                for(let rating of ratings){
                    if(rating.user.username == req.user.username) {
                        return true
                    }
                }
                return false
            }

            let ratingSum = 0
            for(let rating of ratings) {
                ratingSum += rating.rating
            }

            res.render('mdb/rating/rating', 
            { 
                movie, 
                user: req.user, 
                ratings, 
                UserRated: UserRated(),
                avgRating: ratings.length == 0 ? 0 : ratingSum / ratings.length
            })
        })   
    })
}

const addRating = (req, res) => {
    let newRating = new Rating()
    newRating.user = req.user
    newRating.rating = req.body.rating
    newRating.review = req.body.review

    Movie.findOne({ name: req.params.name }).then(movie => {
        newRating.movie = movie;
        newRating.save()
        res.redirect(`/mdb/movies`)
    })
}

const getYourRatings = (req, res) => {
    Rating.find({ user: req.user }).then(ratings => {
        res.render('mdb/rating/ratings', { ratings })
    })
}

const editYourRating = (req, res) => {
    Rating.findById(req.body.id).then(rating => {
        rating.review = req.body.review;
        rating.rating = req.body.rating;
        rating.save().then(() => {
            res.redirect('/mdb/')
        })
    })
}

const deleteYourRating = (req, res) => {
    Rating.deleteOne({_id: req.body.id}).then(() => {
        res.redirect('/mdb/ratings')
    })
}


module.exports = { getRatings, addRating, getYourRatings, editYourRating, deleteYourRating }