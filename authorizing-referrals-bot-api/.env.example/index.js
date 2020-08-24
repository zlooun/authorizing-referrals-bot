"use strict";


const env = {
  "NODE_ENV": "development",
  "TYPE_ENV": "docker",
  "tokenAuthorizingReferralsBot": ""
};




const handler = () => {

  for (let i in env) {

    if (!(i === "TYPE_ENV" && global.process.env.TYPE_ENV === "localhost")) {
      global.process.env[i] = env[i];
    }

  }

};




module.exports = handler;
