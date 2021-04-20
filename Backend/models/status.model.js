const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statusSchema = new Schema({
    name: {
        type: String,
        required: [true, "Status name is mandatory."],    
        unique: [true, "Status already exists."],
        minlength: [1, "Status name cannot be blank."],
        maxlength: [32, "Status name must be 32 characters at maximum."],
    },
    description: String,
    style: Schema.Types.Mixed,         //  Either this,
    // style: mongoose.Mixed,           //  Or this.
   
    
}, {
    timestamps: true,   //  Adds createdAt and modifiedAt fields
});

const Status = mongoose.model('Status', statusSchema);

module.exports = Status;