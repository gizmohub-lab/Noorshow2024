const mongoose =require('mongoose')

 const thaniyaSchema = mongoose.Schema({
    programmethaniya :String,
                    thaniyaonename : String,
                    thaniyatwoname : String,
                    thaniyathreename:String,
                    thaniyaonegrade :String,
                    thaniyatwograde : String,
                    thaniyathreegrade : String,
                    thaniyaoneteam : String,
                    thaniyatwoteam  :String,
                    thaniyathreeteam :String

})

module.exports =mongoose.model('thaniya', thaniyaSchema)