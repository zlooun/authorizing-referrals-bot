"use strict";


const TYPE_ENV = process.env.TYPE_ENV;




const handler = () => {
  return [
    {
      "protocol": "redis",
      "host": "authorizing-referrals-bot-redis",
      "port": 6379,
      "to": function () {

        if (TYPE_ENV === "docker") {
          return `${ this. protocol }://${ this. host }:${ this. port }`;
        }


        return `${ this. protocol }://127.0.0.216:${ this. port }`;
      }
    }
  ];
};




module. exports = handler;
