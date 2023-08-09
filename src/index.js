module.exports = function check(str, bracketsConfig) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    bracketsConfig.map((item) => {
      if (!item.includes(str[i])) {
        return false;
      } else if ((item[0] = item[i])) {
        if (result[result.length - 1] == item[0]) {
          result.pop();
        } else {
          result.push(str[i]);
        }
      } else {
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
