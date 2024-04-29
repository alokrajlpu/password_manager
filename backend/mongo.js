const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
    username:{
        type: String
        // required: true
    },
    email:{
      type:String
    },
    password:{
        type: String
        // required: true
    }
});

// Create model
const User = mongoose.model('User', userSchema);













// Connection URI
const uri = 'mongodb://localhost:27017/passop'; // Replace 'passop' with your database name

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = User;
