"use strict";




const handler = (Markup) => {
  return Markup
  .keyboard([['👍 Включить уведомления'],
             ['💡 Помощь']])
  .resize()
  .extra();
};




module.exports = handler;
