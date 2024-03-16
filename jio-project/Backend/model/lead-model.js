const mongoose=require("mongoose");
const jioLead=mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
    },
    mobileNo:{
        type:Number,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    pinCode:{
        type:Number,
        require:true,
    },
    state:{
        type:String,
        require:false,
    },
    city:{
        type:String,
        require:false,
    },
    product:{
        type:String,
        require:true,
    },
    preferredDate:{
        type:Date,
        require:true,
    },
    timeSlot:{
        type:String,
        require:true,
    }
   
});

module.exports=mongoose.model("jio_Lead",jioLead);