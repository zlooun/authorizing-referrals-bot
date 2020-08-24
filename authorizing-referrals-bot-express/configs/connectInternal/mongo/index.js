"use strict";


const TYPE_ENV = process.env.TYPE_ENV;




const handler = () => {
  return [
    {
      "protocol": "mongodb",
      "host": "authorizing-referrals-bot-mongo",
      "port": 27017,
      "nameDb": "data",
      "to": function () {

        if (TYPE_ENV === "docker") {
          return `${ this. protocol }://${ this. host }:${ this. port }/${ this. nameDb }`;
        }

        return `${ this. protocol }://127.0.0.216:${ this. port }/${ this. nameDb }`
      }
    }
  ];
};




module.exports = handler;
