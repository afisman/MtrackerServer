const router = require("express").Router()
const Cycle = require('./../models/Cycle')
const User = require('./../models/User')
const { isAuthenticated } = require('./../middlewares/jwt.middlewares')


router.post('/create', isAuthenticated, (req, res, next) => {
    const { startDate, endDate, periodDuration, flow, mood, pain } = req.body;
    // const msPerDay = 60 * 60 * 24 * 1000;
    // const periodDuration = (Date.parse(endDate) - Date.parse(startDate) / msPerDay);
    const { _id: owner } = req.payload


    let query = { startDate, endDate, periodDuration, flow, mood, pain, owner };


    Cycle
        .create(query)
        .then(response => {
            res.json
            return User
                .findByIdAndUpdate(owner, { $push: { cycles: response._id } })
                .populate('cycles')
        })
        .then(updatedUser => res.json(updatedUser))
        .catch(error => console.log(error))
})





module.exports = router