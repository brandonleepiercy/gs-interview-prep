//Given a bunch of random test cases below
let case1 = "((())()(((())()";
let case2 = "()";
let case3 = "(())";
let case4 = "((())";
let case5 = "(((()()()()()())))()(((())))))"
let case6 = "(((())))()()(())()((()))()()(())";

//Write a function that checks if the parenthesis are valid

function testParens(parens) {
    let parensArr = parens.split("");
    let stack = [];

    for (i=0; i<parensArr.length; i++) {
        if (parensArr[i] == "(") {
            stack.push(parensArr[i]);
        } else if (parensArr[i] == ")") {
            let last = stack.pop();
            if (last !== "(") {
                return false;
            }
        };
    };
    return stack.length == 0;
};

console.log(testParens(case1));
console.log(testParens(case2));
console.log(testParens(case3));
console.log(testParens(case4));
console.log(testParens(case5));
console.log(testParens(case6));