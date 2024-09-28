const mongoose =require('mongoose')

 const uoolaSchema = mongoose.Schema({
    programmeuoola :String,
                    uoolaonename : String,
                    uoolatwoname : String,
                    uoolathreename:String,
                    uoolaonegrade :String,
                    uoolatwograde : String,
                    uoolathreegrade : String,
                    uoolaoneteam : String,
                    uoolatwoteam  :String,
                    uoolathreeteam :String

})

module.exports =mongoose.model('Uoola', uoolaSchema)