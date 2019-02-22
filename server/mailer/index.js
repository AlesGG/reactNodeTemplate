'use strict';

const nodemailer = require('nodemailer');
const config = require('config');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: config.get('mailer_host'),
    port: config.get('mailer_port'),
    secure: false, // true for 465, false for other ports
//    auth: {
//        user: account.user,
//        pass: account.pass
//    }
});

exports.sendMail = (to, subject, html) => {
	let mailOptions = {
	    from: config.get('mailer_from'),
	    to: to,
	    subject: subject,
	    html: html
	};

	transporter.sendMail(mailOptions, (error, info) => {
	    if (error) { return console.log(error); }
	    console.log('Message sent: %s', info.messageId);
	});
}

