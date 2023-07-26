const sgMail = require('@sendgrid/mail');
require('dotenv').config()

const sendEmail = (req, res) => {
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    sgMail.setApiKey(SENDGRID_API_KEY);
  const { name, email, subject, message } = req.body;

  const msg = {
    to:[email,'gemtimo994@gmail.com'] ,
    from: 'info.riricarrepair@gmail.com', 
    subject: `Issue: ${subject} -  A copy of Form Submission`,
    text: `Name: ${name}\nEmail: ${email} \nSubject: ${subject}\nMessage: ${message}`,
  };

  try {
    sgMail.send(msg);
    console.log('Email sent successfully!');
    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
module.exports = sendEmail


