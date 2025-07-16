import express from 'express';
import auth from './middlwares/auth.js';
import users from './routes/users.js'
import products from './routes/products.js'

const app = express();
app.use(express.json());
app.use('/users', users);
app.use('/products', products);

app.listen(3001, () => console.log('Listening on port 3001'));