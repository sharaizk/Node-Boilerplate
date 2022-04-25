const mongoose = require("mongoose");
exports.connect = () => {
  mongoose
    .connect(process.env.DatabaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Access Granted");
    })
    .catch((err) => {
      console.log(err.message);
    });
};
