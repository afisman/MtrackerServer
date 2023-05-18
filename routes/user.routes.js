const router = require("express").Router()
const User = require('./../models/User.model')



router.get("/getOneUser/:user_id", (req, res) => {
    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})





module.exports = router