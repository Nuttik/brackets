module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) return false;

  let result = [];

  for (let i = 0; i < str.length; i++) {
    bracketsConfig.forEach((item) => {
      if (item[0] == item[1] && item.includes(str[i])) {
        if (result[result.length - 1] == item[0]) {
          result.pop();
        } else {
          result.push(str[i]);
        }
      } else if (item.includes(str[i])) {
        let index = item.indexOf(str[i]);

        if (index == 0) {
          result.push(str[i]);
        } else {
          if (result[result.length - 1] == item[0]) {
            result.pop();
          }
        }
      }
    });
  }
  if (result.length == 0) {
    return true;
  } else {
    return false;
  }
};
