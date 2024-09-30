// ==================================
//    Conditionals-TS-Level-2_3
// ==================================
console.log("%c------------ Conditionals-TS-Level-2_3 ------------ ", "background: black; color: yellow");

function differenceOf27(x: number) {
    if(x > 27) {
       console.log((x - 27) * 2);
    }
}

differenceOf27(35);
differenceOf27(74);
differenceOf27(123);

// ==================================
//    Conditionals-TS-Level-2_4
// ==================================
console.log("%c------------ Conditionals-TS-Level-2_4 ------------ ", "background: black; color: yellow");

function randomNumber(a: number, b: number) {
    if(a < 1 || a > 77 || b < 1 || b > 77) {
        console.log("Please only type numbers between 1 and 77.");
    } else if(a === b) {
        console.log("Was für ein Zufall");
    } else if(a > b) {
        console.log("Erste Zahl größer");
    } else if(a < b) {
        console.log("Zweite Zahl größer");
    }

}

randomNumber(47,29);

// Math.floor(Math.random() * (max + min) - min)

function randomSwitchNumber(c: number, d: number) {
    switch(true) {
        case(c < 1 || c > 77 || d < 1 || d > 77): console.log("Please only type numbers between 1 and 77.");
        break;

        case(c === d): console.log("Was für ein Zufall");
        break;

        case(c > d): console.log("Erste Zahl größer");
        break;

        case(c < d): console.log("Zweite Zahl größer");
    }
}

randomSwitchNumber(10, 50);