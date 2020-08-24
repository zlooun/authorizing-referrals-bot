"use strict";


const typeEnv = global. process. env. TYPE_ENV;
const localhost = "mongodb://127.0.0.216:27017/data";
const defaulthost = "mongodb://authorizing-referrals-bot-mongo:27017/data";




const handler = () => {

  if (typeEnv === "docker") {
    return defaulthost;
  }

  return localhost;
};




module.exports = handler;
