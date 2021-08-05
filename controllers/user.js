const { User } = require("../models/user");
const { Rating } = require("../models/movie");

const getAllUsers = (req, res) => {
  User.find({}).then((users) => {
    res.render("mdb/user/viewUsers", { users });
  });
};

const deleteUser = (req, res) => {
  User.findOne({ username: req.params.username }).then((user) => {
    Rating.deleteMany({ user }).then(() => {
      user.remove().then(() => {
        res.redirect("/mdb/users/");
      });
    });
  });
};

module.exports = { getAllUsers, deleteUser };
