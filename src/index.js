module.exports = function check(str, bracketsConfig) {
  const closeBracket= Object.fromEntries(bracketsConfig)

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    str[i] === closeBracket[stack[stack.length - 1]]
        ? stack.pop()
        : stack.push(str[i]);

  }

  return stack.length === 0;
}
