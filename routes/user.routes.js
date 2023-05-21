const router = require("express").Router()
const { isAuthenticated } = require("../middlewares/jwt.middlewares")
const User = require('../models/User')



router.get("/:user_id", isAuthenticated, (req, res, next) => {
    const { user_id } = req.params

    User
        .findById(user_id)
        .populate('cycles')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})





module.exports = router