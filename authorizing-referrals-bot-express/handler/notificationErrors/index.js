"use strict";




const dirname = global.path.relative(process.cwd(), __dirname);
const log = `[SYSTEM] - - [${dirname}] - -`;


const nodeEnv = global. process. env. NODE_ENV;


const url = "http://134.122.75.82:9797/system/api/sendnotification";
const apiKey = "1a5f7d6c4a644accb217c00c81242a03a7698b9348dbaa57ff97b8bbed184b9db5b3d1c9e5a9bad2b67545e22a285a8ec0cd6352edaebf7d299cdde1a56a259f";


const axios = require ("axios");


const handler = (notification) => {

  const obj = {
    "apiKey": apiKey,
    "project": "bot",
    "fromServices": "authorizing-referrals-bot-express",
    "typeServer": nodeEnv == "development" ? "test" : "production",
    notification
  };


  axios. post (url, obj). then ( body => {
    console.log (body. data);
  }, err => winston.error(`${log} ${err}`));


};




module. exports = handler;
