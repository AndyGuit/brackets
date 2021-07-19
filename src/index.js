module.exports = function check(str, bracketsConfig) {
  let map = new Map();

  const stack = [];
  const sameBrackets = [];
  let count = 0;

  bracketsConfig.forEach((brackets) => {
    if (brackets[0] === brackets[1]) {
      sameBrackets.push(brackets[0]);
    } else {
      map.set(brackets[0], brackets[1]);
    }
  });

  for (let i = 0; i < str.length; i++) {
    if (sameBrackets.includes(str[i]) && count % 2 === 0) {
      count++;
    } else if (map.has(str[i]) && count % 2 === 0) {
      stack.push(str[i]);
    } else {
      if (sameBrackets.includes(str[i]) && count % 2 !== 0) {
        count--;
      } else if (map.get(stack[stack.length - 1]) === str[i]) {
        stack.pop();
      } else if (stack.length === 0 && count === 0) {
        return false;
      }
    }
  }

  return stack.length === 0 && count === 0; // stack.length === 0
};
