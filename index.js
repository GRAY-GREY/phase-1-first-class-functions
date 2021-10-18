function receivesAFunction(add) {
    return add();
}

function add() {
    return 3+5;
}

function returnsANamedFunction() {
    const foo = () => 'foo';
    return foo;
}

function returnsAnAnonymousFunction() {
    let x = 5;
    return () => x++;
}