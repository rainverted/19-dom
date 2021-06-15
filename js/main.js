function time() {
    for (let h = 0; h < 24; h++) {
        for (let m = 0; m < 60; m += 15) {
            console.log(`${h}:${m}`);
        }
    }
}

time();