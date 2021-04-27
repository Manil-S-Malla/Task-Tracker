const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // age: Number,         //  If no additional 'schema options' are needed you can just add the 'type' as the 'value' of the 'key'.
    name: {
        firstname: {
            type: String,
            required: [true, "Username is mandatory."],       //  Or just >required: true,< works as well, if you want to forgo the error messages.
            minlength: [1, "Username cannot be blank."],
            maxlength: [32, "Username must be 32 characters at maximum."],
        },
        middlename: {
            type: String,   
            maxlength: [32, "Middle Name must be 32 characters at maximum."],
        },
        familyname: {
            type: String,  
            maxlength: [32, "Family Name must be 32 characters at maximum."],
        },
    },
    email: {
        type: String,
        required: [true, "E-mail address is mandatory."],
        unique: [true, "E-mail address has been taken."],
        minlength: [3, "E-mail address must be at least 3 characters long."],
        maxlength: [320, "E-mail address must be 320 characters at maximum. "],
        match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
            "E-mail address is not valid."
        ]     //  Checks if the string and the given Regular Expression match
    },
    password: {
        type: String,
        required: [true, "Password is mandatory."],
        minlength: [8, "Password must be at least 8 characters long."],
        maxlength: [32, "Password must be 32 characters at maximum. "],
        match: [
            /^(?=.*[0-9])(?=.*[A-Z])([\w]+)$/, 
            "Password must have at least one Capital Letter and 1 number."
        ]
    },
}, {
    timestamps: true,   //  Adds createdAt and modifiedAt fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;