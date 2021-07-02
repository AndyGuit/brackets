module.exports = function check(str, bracketsConfig) {
  const map = new Map();
  const stack = [];
  let count = 0;

  bracketsConfig.forEach((brackets) => {
    if (brackets.includes('|')) {
      count = 0;
    } else {
      map.set(brackets[1], brackets[0]);
    }
  });

  const openBrackets = Array.from(map.values());
  const closedBrackets = Array.from(map.keys());

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '|') {
      count++;
    } else if (openBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else if (closedBrackets.includes(str[i]) && map.get(str[i]) === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return (stack.length === 0) && (count % 2 === 0);
};
