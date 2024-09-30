// ==================================
//    Functions-TS-Level-1_3
// ==================================
console.log("%c------------ Functions-TS-Level-1_3 ------------ ", "background: gold; color: red");

function showPersonInfo(name: string, city: string, age: number) {
    console.log(`Hallo, mein Name ist ${name}. Ich bin ${age.toFixed(0)} Jahre alt. Ich komme aus ${city}`);
}

showPersonInfo("Sandra", "Joao Pessoa", 56);
showPersonInfo("Lucio", "Barcelona", 30.2);

// ==================================
//    Functions-TS-Level-1_4
// ==================================
console.log("%c------------ Functions-TS-Level-1_4 ------------ ", "background: gold; color: red");

function showHero(heroName: string, heroPower: string, heroEnemy: string) {
    const nameOutput: string = `Mein:e Lieblingsheld:in ist: ${heroName}. `; 
    const powerOutput: string = `Er/sie hat die Fähigkeit: ${heroPower}. `;
    const enemyOutput: string = `Sein/ihr größte/r Gegner:in ist: ${heroEnemy}. `;

    console.log(nameOutput + powerOutput + enemyOutput );
}

showHero("The Flash", "Superschnelligkeit", "Professor Zoom");

// ==================================
//    Functions-TS-Level-1_5
// ==================================
console.log("%c------------ Functions-TS-Level-1_5 ------------ ", "background: gold; color: red");

function multiplyAndDivide(x: number, y: number) {
    console.log(`Multiplikation von ${x} und ${y}: ${x * y}`);
    if(y === 0) {
        console.log("Division durch 0 nicht erlaubt");
    } else {
        console.log(`Division von ${x} und ${y}: ${x / y}`);
    }
}

multiplyAndDivide(10, 2);
multiplyAndDivide(30, 20);
multiplyAndDivide(100, 100);
multiplyAndDivide(5, 0);
multiplyAndDivide(45, 173);
multiplyAndDivide(1, 1000);