moment = require("moment");

let dates = [];
const func = () => {
  for (var i = moment().date(); i > moment().date() + 7; i++) {
    console.log(i);
  }
};
func();
