const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Author's name is required"],
            minlength: [3, "Author's name must be more than 3 characters"]
        }
    }, { timestamps:true }
)

const Author = mongoose.model('Author', AuthorSchema)

module.exports = Author;