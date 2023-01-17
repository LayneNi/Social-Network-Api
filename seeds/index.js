const connection = require("../config/connection")
const {User, Thought} = require("../models")
const userData = require("./userData")
const thoughtData = require("./thoughtData")

connection.on('error', (err) => console.log(err));

connection.once('open', async () => {
    console.log('connected');
  
    // Drop existing courses
    await User.deleteMany({});
  
    // Drop existing students
    await Thought.deleteMany({});
  
    // Add users to the collection and await the results
    await User.collection.insertMany(userData);
  
    // Add courses to the collection and await the results
    await Thought.collection.insertMany(thoughtData);

  
    // Log out the seed data to indicate what should appear in the database
    console.info('Seeding complete! 🌱');
    process.exit(0);
  });
  
