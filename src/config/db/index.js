const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_nodejs', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to MongoDB successfully!')
    }catch(err) {
        console.log(err)
    }
}

module.exports = {
    connect
}