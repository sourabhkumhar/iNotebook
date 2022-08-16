const connectToMongo = require('./db')
const express = require('express')
connectToMongo();

const app = express();
const port = 6000;

app.use(express.json());

// Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`iNotebook Backend listening on port http://localhost:${port}`);
})