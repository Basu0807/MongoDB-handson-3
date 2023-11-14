const mongoose =require('mongoose')

const UserSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'Please enter your name'],
        maxLength:[30,"Name should not exceed 30 character"],
        // minLength:[4,"Name should have atleast 4 character"]
    },
    lastName:{
        type:String,
        required:[true,'Please enter your lastName'],
       
    },
    salary:{
        type:Number,
        required:[true,'please enter your password'],
        // minLength:[4,"Password should have atleast 8 character"],
    
    },
    department:{
type:String,
},
    lastCompany:{
        type:String,
        required:[true,'Please enter your lastName'],
    },
    lastSalary:{
        type:Number,
        required:true
    },
    overallExp:{
        type:Number,
        required:true
    },
    contactInfo:{
        type:Number,
        required:[true,'Please enter your contactInfo']
    },
    yearGrad:{
        type:Number,
        required:true
    },
    gradStream:{
        type:String,
        required:[true,'Please enter your lastName']
    }
   

    


})

module.exports=mongoose.model("employee",UserSchema)