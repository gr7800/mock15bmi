const { BMIModel } = require("../model/BMI.model")


exports.CalculateBMI = async (req, res) => {
    const {height, weight, user_id} = req.body
    const height_in_meter = +(height)*0.3048
    const BMI = +(weight)/((height_in_meter)*(height_in_meter)) 
    const new_bmi = new BMIModel({
        BMI,
        height: height_in_meter, 
        weight,
        user_id 
    })
    await new_bmi.save()
    res.send({BMI}) 
}

exports.GetCalculation = async (req,res)=>{
    const {user_id} = req.body
    const all_bmi = await BMIModel.find({user_id : user_id})
    res.send({history : all_bmi})
}
