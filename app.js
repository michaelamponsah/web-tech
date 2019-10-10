const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose  = require('mongoose');

const app = express();

// DB Config
const db  = require('./config/keys').MongoURI

// Connect to Mongoose
const conn = mongoose.connect(db, { useNewUrlParser: true });
conn
.then(() => {console.log("MongoDB connected")})
.catch(err => console.log(err));

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Body Parser
app.use(express.urlencoded({ extended:false }));

// Routes
app.use('/', require('./routes/index'));
app.use('/students', require('./routes/students'));


const PORT  = process.env.PORT || 5010;
app.listen(PORT, () => {console.log(`Server running on port ${PORT} ...`)});
