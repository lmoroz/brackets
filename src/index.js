module.exports = function check(str, bracketsConfig) {
    const configMap = new Map(bracketsConfig), stack = [];

    str.split('').map(symbol =>
        stack.length > 0 && configMap.get(stack[stack.length - 1]) === symbol
        ? stack.pop()
        : stack.push(symbol),
    );
    return stack.length === 0;
};
