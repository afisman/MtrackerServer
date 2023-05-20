const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: String,
    password: String,
    cycles: [{
        type: Schema.Types.ObjectId,
        ref: 'Cycle',
    }],
    username: String
},
    {
        timestamps: true,
    }
)

module.exports = model('User', userSchema);