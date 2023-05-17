const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req, res, next) {
    const body = await req.json();
    var options = {
        from: "Crochet🐿💰 <porganyikristof@gmail.com>",
        to: "porganyikristof@gmail.com",
        subject: "Crochet-Massage",
        html: `<div'>
            <h1>You recived an email from ${body.name}</h1>
            <p>${body.desc}</p>
            <p>Sender is: ${body.email}</p>
        </div>`
    };
    sgMail
        .send(options)
        .then(() => {}, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        });
    //ES8
    (async () => {
        try {
            await sgMail.send(msg);
        } catch (error) {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        }
    })();
    return new Response('OK')
}