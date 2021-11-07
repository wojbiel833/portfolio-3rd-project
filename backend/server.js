const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const productsRoutes = require('./routes/products.routes');
const cartRoutes = require('./routes/cart.routes');
const ordersRoutes = require('./routes/orders.routes');

const app = express();

// connection with .env
require('dotenv').config();

/* MONGOOSE */
const NODE_ENV = process.env.NODE_ENV;

let dbURL = '';

if (NODE_ENV === 'production') {
  dbURL = `mongodb+srv://wojbiel833:mongoDBheroku1@wojbiel833.p51y7.mongodb.net/yogaSchool?retryWrites=true&w=majority`;
  console.log('Connected to remote DataBase');
} else if (NODE_ENV === 'test') {
  dbURL = 'mongodb://localhost:27017/yogaSchooltest';
  console.log('Connected to test DataBase');
} else if (NODE_ENV === 'dev') {
  dbURL = `mongodb+srv://wojbiel833:mongoDBheroku1@wojbiel833.p51y7.mongodb.net/yogaSchool?retryWrites=true&w=majority`;
  console.log('Connected to local DataBase');
} else {
  dbURL = 'mongodb://localhost:27017/yogaSchool';
  console.log('Connected to local DataBase by default');
}

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'foo',
    store: MongoStore.create({
      mongoUrl: dbURL,
    }),
  })
);

/* API ENDPOINTS */
app.use('/api', productsRoutes);
app.use('/api', cartRoutes);
app.use('/api', ordersRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ server: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

db.once('open', () => {
  console.log(
    `Successfully connected to ${
      NODE_ENV !== 'production' ? 'local' : 'remote'
    } database`
  );
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
