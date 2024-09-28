const mongoose =require('mongoose')

 const aliyaSchema = mongoose.Schema({
    programmealiya :String,
                    aliyaonename : String,
                    aliyatwoname : String,
                    aliyathreename:String,
                    aliyaonegrade :String,
                    aliyatwograde : String,
                    aliyathreegrade : String,
                    aliyaoneteam : String,
                    aliyatwoteam  :String,
                    aliyathreeteam :String

})

module.exports =mongoose.model('aliya', aliyaSchema)