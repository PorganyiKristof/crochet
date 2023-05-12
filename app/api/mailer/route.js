const nodemailer = require("nodemailer");

export async function POST(req, res, next) {
    const body = await req.json();
    var options = {
        from: "Crochet🐿💰 <porganyikristof@gmail.com>",
        to: "porganyikristof@gmail.com",
        subject: "Crochet-Massage",
        html: `<div style='background-color:red,color:blue'>
            <h1>You recived an email from ${body.name}</h1>
            <p>${body.desc}</p>
            <p>Sender is: ${body.email}</p>
        </div>`
    };
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.google_user, // generated ethereal user
            pass: process.env.google_password, // generated ethereal password
        },
    });
    try {
        let info = await transporter.sendMail(options, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Main send', info);
            }
        });
        console.log(info);
    } catch (error) {
        console.log(error);
    }
    return new Response('OK')
}