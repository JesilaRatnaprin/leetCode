/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let a = 0;
    let b = 1;
    yield a;
    yield b;
    for(i=2;i<50;i++) {
        let next = a+b;
        yield next;
        a= b;
        b=next;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */