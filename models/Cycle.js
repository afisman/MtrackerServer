const { Schema, model } = require('mongoose');

const cycleSchema = new Schema({
    startDate: {
        type: Date,
        required: [true, 'You must fill the date']

    },
    endDate: {
        type: Date,
        required: [true, 'You must fill the date']
    },
    cycleDuration: {
        type: Number
    },
    periodDuration: {
        type: Number
    },
    flow: {
        type: Number,
        enum: [1, 2, 3, 4]
    },
    mood: {
        type: Number,
        enum: [1, 2, 3, 4]
    },
    pain: [{
        type: String,
        enum: ['Abdomen', 'Head', 'Nipples', 'Pelvis']
    }],
})

module.exports = model('Cycle', cycleSchema);