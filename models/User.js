const {schema,model, Schema} = require('mongoose');

const userSchema = new schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type:  String,
        required: true,
        unique: true,
    },
    thougthts: [

        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
    ],
    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User',
        }
    ],
}, {
    toJSON: {
        virtuals: true,
    },
});

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = model('User', userSchema);

module.exports = User;