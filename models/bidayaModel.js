const mongoose =require('mongoose')

 const bidayaSchema = mongoose.Schema({
    bidayaonename :String, bidayatwoname:String , bidayathreename:String , bidayaonegrade:String ,bidayatwograde:String ,bidayathreegrade:String ,
         bidayaoneteam :String, bidayatwoteam:String , bidayathreeteam:String,programmebidaya:String

})

module.exports =mongoose.model('Bidaya', bidayaSchema)