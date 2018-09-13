const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

let corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

app.listen(8000, () => {
    console.log('Server started!');
});


app.route('/api/cats').post((req, res) => {
    res.status(201).send("OK");
});

app.route('/api/cats').get((req, res) => {
    res.send({
        cats: [{ name: 'lilly' }, { name: 'lucy' }]
    });
});
app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name'];
    res.status(200).send({ name: requestedCatName });
});

app.route('/api/cats/:name').put((req, res) => {
    const requestedCatName = req.params['name'];
    res.status(200).send("Created: " + requestedCatName.toString());
});

app.route('/api/cats/:name').delete((req, res) => {
    res.status(204).send();
});