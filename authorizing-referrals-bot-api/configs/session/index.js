"use strict";




const typeEnv = global.process.env.TYPE_ENV;




const obj = {
  "store": {
    "host": "authorizing-referrals-bot-redis",
    "port": 6379
  }
};


const handler = () => {

  if (typeEnv === "docker") {
    return obj;
  }

  obj.store.host = "127.0.0.216";
  return obj;
};




module.exports = handler;
