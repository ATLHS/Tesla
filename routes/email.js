
// Model
const Email = require('../models/userEmail');
// Router
const router = require('express').Router();
// Nodemailer
const nodemailer = require("nodemailer");
const hbs = require('nodemailer-handlebars');


    


router.post('/', (req, res) => {
    const body = req.body;
    // const email = new Email({
    //     name: body.name,
    //     email: body.email,
    //     message: body.message
    // })
    // email.save()
    // .then(() => res.json(true))
    // .catch(err => console.log(err));

    //Creating transport instance
    const transporter = nodemailer.createTransport({
        service: "hotmail",
        port: 587,
        secure: false, 
        tls: {
            ciphers:'SSLv3'
         },
        auth: {
          user: process.env.EMAIL, 
          pass: process.env.PASSWORD 
        }
    })
    //Config engine
    transporter.use('compile', hbs({
        viewEngine: {
          extName: ".handlebars",
          defaultLayout: false
        },
        viewPath: './views/',
      }));
      // Sending mail
    let info = transporter.sendMail({
        from: '"Tesla" <s-attilah@hotmail.com>', 
        to: body.email, 
        subject: "Tesla email", 
        template: 'emailTemplate',
        context: {
            firstname: body.name
        }
      }, (err) => {
        if (err) {
            console.log(err);
          } else {
            console.log("message sent ! ");
          }
    });
});

module.exports = router;