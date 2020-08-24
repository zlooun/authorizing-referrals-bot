"use strict";




const handler = () => {
  return {
    "saveUser": require("./saveUser"),
    "setAuthenticated": require("./setAuthenticated"),
    "updateUser": require("./updateUser"),
    "setIntervalForWinstonsConfigs": require("./setIntervalForWinstonsConfigs"),
    "setRecipient": require("./setRecipient"),
    "notificationErrors": require("./notificationErrors"),
  };
};




module.exports = handler;
