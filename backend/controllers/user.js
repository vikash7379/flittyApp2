const sendEmail=require('../config/nodeMailer');

exports.reportAbuse=async(req,res,next)=>{
  let{name,phone,message,email}=req.body;
  console.log(req.body);
  await sendEmail({
    email:email,
    subject:"complain",
    message:message
  })

  return res.status(200).json({
    success:true,
    name,
    message:"report registered"
  })
}

exports.contact=async(req,res,next)=>{
  let{name,issue,email}=req.body;
  console.log(req.body);
  await sendEmail({
    email:email,
    name,
    subject:"complain",
    message:issue
  })

  return res.status(200).json({
    success:true,
    message:"complaint registered"
  })
}
