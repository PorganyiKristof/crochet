const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

export async function POST(req, res, next) {
    const body = await req.json();
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.google_user, // generated ethereal user
            pass: process.env.google_password, // generated ethereal password
        },
    });
    /* transporter.use('compile', hbs({
        viewEngine: 'express-handlebars',
        viewPath: './views/',
        extname: '.handlebars',
    })) */
    transporter.use(
        "compile",
        hbs({
            viewEngine: {
                extname: '.hbs', // handlebars extension
                layoutsDir: 'views/', // location of handlebars templates
            },
            viewPath: 'views',
            extName: '.hbs',

        }))

    var optionsToTheSender = {
        from: "Crochet🐿💰 <porganyikristof@gmail.com>",
        to: body.email,
        subject: "Crochet",
        template: "main",
        context: {
            name: body.name,
        }

    };
    if (body.route === 'singlepage') {

        var options = {
            from: "Crochet🐿💰 <porganyikristof@gmail.com>",
            to: "porganyikristof@gmail.com",
            subject: "Crochet-Massage",
            template: "main",
            context: {
                name: body.name,
                text: body.desc,
                email: body.email,
            }
        };


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
            return new Response(error)
        }

    } else if (body.route === 'dynamicpage') {
        const colorJson = JSON.parse(body.colors)
        /* let colorDiv = colorJson.map((m, index) => `<td key={${index}}>${m.title} - <div>${m.color}</div> </td>`);
        colorDiv = colorDiv.join(''); */
        var options = {
            from: "Crochet🐿💰 <porganyikristof@gmail.com>",
            to: "porganyikristof@gmail.com",
            subject: "Crochet-Massage",
            template: "main",
            context: {
                name: body.name,
                text: body.desc,
                email: body.email,
                colorDiv: colorJson,
                yarn: body.yarn
            }
        };
        try {
            let info = await transporter.sendMail(options, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Main send', info);
                }
            });
        } catch (error) {
            console.log(error);
            return new Response(error)
        }

    }
    try {
        let info = await transporter.sendMail(optionsToTheSender, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Main send', info);
            }
        });
        console.log(info);
    } catch (error) {
        console.log(error);
        return new Response(error)
    }
    return new Response('OK')

}