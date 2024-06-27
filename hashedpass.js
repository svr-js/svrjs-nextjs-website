const bcrypt = require("bcrypt");

// run node `.\hashedpass.js`
// Replace this with your password and then replace that in .env file
const password = "thisisrandomahhpassword";
const saltRounds = 10;

bcrypt.hash(password, saltRounds, function (error, hash) {
  if (error) throw error;
  // copy the hash and put it the value for ADMIN_PASSWORD in .env
  console.log("Hashed Password:", hash);
});
