function func1() {
    console.log('Function 1.');
}
function func2() {
    func1();
    console.log('Function 2.');
}
function func3() {
    setTimeout(func2(), 3000);
    console.log('Function 3.');
}
function func4() {
    func3();
    console.log('Function 4.');
}
function func5() {
    func4();
    console.log('Function 5.');
}

func5();
