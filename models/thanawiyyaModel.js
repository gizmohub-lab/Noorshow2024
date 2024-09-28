const mongoose =require('mongoose')

 const thanawiyyaSchema = mongoose.Schema({
    programmethanawiyya :String,
                    thanawiyyaonename : String,
                    thanawiyyatwoname : String,
                    thanawiyyathreename:String,
                    thanawiyyaonegrade :String,
                    thanawiyyatwograde : String,
                    thanawiyyathreegrade : String,
                    thanawiyyaoneteam : String,
                    thanawiyyatwoteam  :String,
                    thanawiyyathreeteam :String

})

module.exports =mongoose.model('thanawiyya', thanawiyyaSchema)