const User =require('../Model/employeeModel')
const CompanyDetails = require("../dummyData/userData")

// const employee =database.collection("employee")

const UserController = async (req,res)=>{

  const data = await User.create(CompanyDetails)

  res.send({msg:"details added",data:data})

}


const Query1 = async (req,res)=>{

    const data = await User.find({})
  
    res.send({msg:"Query1",Alldata:data})
  
  }
  const Query2 = async (req,res)=>{

    const data = await User.find({salary:{$gt:"30000"}})
  
    res.send({msg:"Query2",data:data})
  
  }
  const Query3 = async (req,res)=>{

    const data = await User.find({overallExp:{$gt:"2"}})
  
    res.send({msg:"Query3",data:data})
  
  }
  const Query4 = async (req,res)=>{

    const data = await User.find({yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}})
    res.send({msg:"Query4",data:data})
  
  }
  const Query5 = async (req,res)=>{

    const data = await User.updateMany({salary:{$gt:"70000"}},{$set:{salary:"65000"}})
  
    res.send({msg:"Query5",data:data})
  
  }
  const Query6 = async (req,res)=>{

    const data = await User.deleteMany({lastCompany: 'Y'})
  
    res.send({msg:"Query6",data:data})
  
  }
  const deleteMany = async (req,res)=>{

    const data = await User.deleteMany({})
  
    res.send({msg:"Query6",data:data})
  
  }
  
module.exports={UserController,Query1,Query2,Query3,Query4,Query5,Query6,deleteMany}