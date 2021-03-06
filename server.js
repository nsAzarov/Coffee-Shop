const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema');
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));