module.exports = function Solve(a, b, c) {
    if (a === 0) {
        return { error: `a can't be zero!` }
    }
    const discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant < 0) {
        return { error: `discriminant is less than zero, equation can't be solved in real numbers!` }
    }
    else if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return { answer: [root1, root2] };
    }
    else {
        root = -b / (2 * a);
        return { answer: [root] };
    }
}