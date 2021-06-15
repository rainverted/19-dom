function time(from, until) {
    for (let h = from; h < until; h++) {
        for (let m = 0; m < 60; m += 15) {
            console.log(`${h}:${m}`);
        }
    }
}

time(1, 7);


/*

m = 0; 00
m = 1; 15
m = 2; 30

*/