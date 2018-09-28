const express = require('express')
const validator = require('validator')
const xssFilters = require('xss-filters')
const Mailjet = require('node-mailjet').connect(
    'bb2a800ddd6f9330fbb3350cdd4cf3bf', //public key
    '5fa1e27bb3703c54a490fa18bfbbb295' //private key
);

const app = express()

const validateAndSanitize = (key, value) => {
    const rejectFunctions = {
        name: v => v.length < 4,
        email: v => !validator.isEmail(v),
        company: v => v.length < 3,
        message: v => v.length < 25
    }

    // If object has key and function returns false, return sanitized input. Else, return false
    return rejectFunctions.hasOwnProperty(key) && !rejectFunctions[key](value) && xssFilters.inHTMLData(value)
}

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json())

app.get('/', function (req, res) {
    res.status(405).json({ error: 'sorry!' })
})

app.post('/', function (req, res) {
    const attributes = ['name', 'email', 'company', 'message']
    const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))
    const someInvalid = sanitizedAttributes.some(r => !r)
    const sendEmail = Mailjet.post('send');
    let success = 'sent'

    if (someInvalid) {
        return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' })
    }

    const emailData = {
        'FromEmail': 'davidjamesdavis.djd@gmail.com',
        'FromName': req.body.name,
        'Subject': 'New Marmot Inquiry from ' + req.body.company,
        'Text-part': req.body.message,
        'Html-part': '<p>' + req.body.message + '</p>',
        'Recipients': [{ 'Email': 'davidjamesdavis.djd@gmail.com', 'Name': 'David' }, { 'Email': 'sorensenjg@gmail.com', 'Name': 'Justin' }],
        "Headers": { "Reply-To": req.body.email }
    }

    const mailResponse = async() => {
        await sendEmail
            .request(emailData)
            .catch(function (error) {
                // Render error message
                console.error(error.ErrorMessage)
                success = { message: error.ErrorMessage };
            })
        
        if (success == 'sent') {
            return res.status(200).send({ message: 'Email sent.' })
        } else {
            return res.status(401).send(success)
        }
    }

    mailResponse()
})

module.exports = {
    path: '/api/contact',
    handler: app
}