function time(nuo, iki, trukme) {
    let pakeistasIki = iki;
    if (nuo > iki) {
        pakeistasIki = 24 + iki;
    }
    for (let i = nuo * 60; i <= pakeistasIki * 60; i += trukme) {
        const h = Math.floor(i / 60);
        const m = i - h * 60;
        const hMOD = h % 24;
        console.log(`${h < 10 ? '0' + hMOD : hMOD}:${m < 10 ? '0' + m : m}`);
    }
}

time(22, 1, 45);

/*
22:00
22:45
23:30
0:15
1:00
*/