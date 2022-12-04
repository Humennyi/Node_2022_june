const nodemailer = require('nodemailer');
const { NO_REPLY_EMAIL, NO_REPLY_EMAIL_PASSWORD } = require('../config/config');



const sendEmail = async (receiverMail) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: NO_REPLY_EMAIL,
            pass: NO_REPLY_EMAIL_PASSWORD
        }
    });

    return transporter.sendMail({
        from: 'No reply',
        to: receiverMail,
        subject: 'Ytllj',
        html:'<h2>Hello/////</h2>'
    });
}

module.exports = {
    sendEmail
}