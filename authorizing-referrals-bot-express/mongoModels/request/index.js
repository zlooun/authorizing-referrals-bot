"use strict";




const Schema = require("mongoose").Schema;




const obj = new Schema ({
  "phone": String,
  "name": String,
  "lastname": String,
  "login": String,
  "createDate": Date,
  "project": String,
  "fromServer": String,
  "idRecipient": String,
  "link": String
});




module.exports = obj;
