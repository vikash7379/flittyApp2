const sendEmail=require('../config/nodeMailer');

exports.register=async(req,res,next)=>{
  let{firstname,lastname,phone,message,email}=req.body;
  console.log(req.body);
  await sendEmail({
    email:email,
    subject:"test",
    message:message
  })

  return res.status(200).json({
    success:true,
    message:"message sent"
  })
}