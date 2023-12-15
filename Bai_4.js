function createTriangle(n) {
    let triangle = [];
    for(let i = 0; i < n; i++) {
        triangle[i] = [];
        triangle[i][0] = 1;
        for(let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle[i][i] = 1;
    }
    return triangle;
}

function display(triangle) {
    for(let i = 0; i < triangle.length; i++) {
        console.log(" ".repeat((triangle.length - i - 1)) + triangle[i].join(" "));
    }
}

var n2 = 5;
var resultt = createTriangle(n2);
display(resultt);