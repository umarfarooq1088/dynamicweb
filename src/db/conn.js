const mongoose = require("mongoose");
const validator = require("validator");

// creating a database
mongoose.connect("mongodb://localhost:27017/form", {

    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})

const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLenght: 3
    },

    email: {
        type: String,
        required: true,
        validate(state) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid email id")
            }
        }
    },

    phone: {
        type: Number,
        required: true,
        min: 11
    },

    message: {
        type: String,
        required: true,
        minLenght: 3
    },
    date: {
        type: Date,
        default: Date.now
    }


})

const User = mongoose.model("User", userScheme);
module.exports = User;
module.exports();