import express from 'express'
import validator from 'validator'
import xssFilters from 'xss-filters'

const API_KEY = process.env.MAILGUN_KEY;
const DOMAIN = 'marmt.io';
const mailgun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN });

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

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json())

app.post('*', (req, res) => {
    const attributes = ['name', 'email', 'company', 'message']
    const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))
    const someInvalid = sanitizedAttributes.some(r => !r)

    if (someInvalid) {
        return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' })
    }

    try {
        const emailData = {
            from: 'admin@marmt.io',
            subject: 'New Marmot Inquiry from ' + req.body.company,
            text: req.body.message,
            html: '<p>Message from: ' + req.body.name + '. ' + req.body.message + '</p>',
            to: 'davidjamesdavis.djd@gmail.com',
            'h:Reply-To': req.body.email 
        }

        const mailResponse = async () => {
            await mailgun.messages()
                .send(emailData, (error, body) => {
                    if (error) {
                        throw (error);
                    }
                    console.log(body)
                    return res.render('submitted', { email: req.body.email });
                });
        }
        mailResponse()

    } catch (error) {
        console.error(error)
        return res.render('error', { error: error });
    }

})

app.all('*', (req, res) => {
    res.status(405).send({ error: 'only POST requests are accepted' })
})

export default app