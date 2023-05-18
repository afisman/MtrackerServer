const router = require("express").Router()
const Cycle = require('./../models/Cycle.model')
const User = require('./../models/User')


router.post('/create', (req, res) => {
    const { startDate, endDate, flow, mood, pain } = req.body;
    const msPerDay = 60 * 60 * 24 * 1000;
    const periodDuration = (Date.parse(endDate) - Date.parse(startDate) / msPerDay);

    let query = { startDate, endDate, flow, mood, pain, periodDuration };


    Cycle
        .create(query)
        .then(response => {
            return User
                .findByIdAndUpdate({ $push: { cycles: response._id } })
                .populate('cycles')
        })
        .then(updatedUser => res.json(updatedUser))
        .catch(error => console.log(error))
})





module.exports = router