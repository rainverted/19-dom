function time(from, until, step) {
    const pamokuKiekis = Math.floor((until - from) * 60 / step);
    console.log(pamokuKiekis + 1);

    for (let i = from * 60; i <= until * 60; i += step) {
        const m = i % 60;
        const h = (i - m) / 60;
        //const h = Math.floor(i / 60);
        //const m = i - (h * 60);


        console.log(i, `${h}:${m < 10 ? '0' + m : m}`);
    }

}

time(8, 13, 45);
time(1, 4, 31);

/*
8:00
8:45
9:30
10:15
11:00
11:45
12:30

*/

/*
i=150;
h = Math.floor(i / 60) = 2

*/