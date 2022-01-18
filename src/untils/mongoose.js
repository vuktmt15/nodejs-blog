const format = require("date-format");

module.exports = {
    mutilpleMongooseToObject: function(mongooseArray) {
        return mongooseArray.map((mongoose) => mongoose.toObject())
    },
    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    },
    formatCreatedAtInObject: function (mongooseArray) {
        return mongooseArray.map((mongoose) => {
            mongoose.createdAt = format('yyyy/MM/dd hh:mm:ss', mongoose.createdAt)
            return mongoose
        })
    }
}