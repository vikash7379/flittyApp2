const nodeMailer=require('nodemailer');

const sendEmail=async(options)=>{

    const transporter=nodeMailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        service:'gmail',
        auth:{
            user:'rajatverma@freeskout.com',
            pass:'ltndotqafppatzdc',
        },
        secure:true
    })

    const mailOptions={
        from:'vrajat269@gmail.com',
        to:options.email,
        subject:options.subject,
        text:options.message,
    }
    let info=await transporter.sendMail(mailOptions);
    console.log(info.messageId);
}

module.exports=sendEmail;
