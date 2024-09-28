const mongoose =require('mongoose')

 const kulliyaSchema = mongoose.Schema({
    programmekulliya :String,
                    kulliyaonename : String,
                    kulliyatwoname : String,
                    kulliyathreename:String,
                    kulliyaonegrade :String,
                    kulliyatwograde : String,
                    kulliyathreegrade : String
                  

})

module.exports =mongoose.model('kulliya', kulliyaSchema)