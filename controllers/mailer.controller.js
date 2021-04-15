const ContactUsController = {};
var nodemailer = require("nodemailer");


ContactUsController.danishContactUs = async (req, res) => {
    try {
        const body = req.body;

        const email = process.env.EMAIL;
        const password = process.env.PASSWORD;


        var transporter = nodemailer.createTransport({
            service: "gmail.com",
            auth: {
                user: email,
                pass: password,
            },
        });
        var mailOptions = {
            from: email,
            to: "danishlashari3@gmail.com",
            subject: "Porfolio Contact Form",
            html: `<h1>Mail from ${body.name}</h1><p>Name: ${body.name}</p><p>Phone: ${body.phone}</p><p>Email: ${body.email}</p><p>Message: ${body.message}</p>`,
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.status(500).send({
                    message: "Email not sent",
                    error: error,
                });
            } else {
                console.log("Email sent: " + info.response);
                res.status(200).send({
                    message: "Email sent",
                    info: info,
                });
            }
        });

    } catch (error) {
        console.log("error", error);
        return res.status(500).send(error);
    }
};



ContactUsController.usamaContactUs = async (req, res) => {
    try {
        const body = req.body;

        const email = process.env.EMAIL;
        const password = process.env.PASSWORD;



        var transporter = nodemailer.createTransport({
            service: "gmail.com",
            auth: {
                user: email,
                pass: password,
            },
        });
        var mailOptions = {
            from: email,
            to: "usamajavaid52@gmail.com",
            subject: "Porfolio Contact Form",
            html: `<h1>Mail from ${body.name}</h1><p>Name: ${body.name}</p><p>Phone: ${body.phone}</p><p>Email: ${body.email}</p><p>Message: ${body.message}</p>`,
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.status(500).send({
                    message: "Email not sent",
                    error: error,
                });
            } else {
                console.log("Email sent: " + info.response);
                res.status(200).send({
                    message: "Email sent",
                    info: info,
                });
            }
        });

    } catch (error) {
        console.log("error", error);
        return res.status(500).send(error);
    }
};



module.exports = ContactUsController;
