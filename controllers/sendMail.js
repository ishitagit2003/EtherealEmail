const nodemailer = require("nodemailer");

const sendMail= async(req,res) =>{
    let testAccount = await nodemailer.createTestAccount();

    //connect with the smtp
    let transporter = await nodemailer.createTransport({
        // host: "smtp.ethereal.email",
        // port: 587,
        service: 'gmail',
        auth: {
          user: "karanbaranwal22@gmail.com", 
          //generated ethereal user
          pass: "bfye bjlg zzec qaxw", 
          //generated ethereal password
        }
    });

    let info = await transporter.sendMail({
        from:' "Ishita Gupta" <karanbaranwal22@gmail.com',
        to: "kanhaiyayada3333@gmail.com",
        subject: "Hello me",
        text: "I am sleepy",
        html: "<b>Hello me and mine</b>",
    });

    console.log("Message sent: %s", info.messageId);

    res.json(info);
};

module.exports= sendMail;