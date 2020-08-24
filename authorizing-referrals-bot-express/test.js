"use strict";




const crypto = require("crypto");


const salt = crypto.createHash("sha1").update("2" + Math.random()).digest("hex");

console.log(salt);