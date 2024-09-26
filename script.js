////////////////// Intro /////////////////

let N2 = document.querySelector('.two');
let N0 = document.querySelector('.zero');
let N4 = document.querySelector('.four');
let N8 = document.querySelector('.eight');
let creator = document.querySelector('.creator');
let introBox = document.querySelector('.intro-container');


function delay(ms) {

    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, ms);
    })

}

async function introBoxVanish() {
    for (let i = 0; i <= 850; i++)await delay(1);
    for (let i = 100; i >= 0; i--) {
        introBox.style.opacity = i / 100;
        await delay(1);
    }
    introBox.style.visibility = 'hidden';
}

async function itemVanish() {
    x = 150;
    let opRatio = 1 / x;
    let baseOp = 1;
    let y = 0;
    creator.style.opacity = '0';
    for (let i = 0; i <= 650; i++)await delay(1);

    for (let i = 0; i <= x; i++) {
        N0.style.opacity = baseOp;
        N0.style.transform = 'translateY(' + y + '%)';
        N2.style.opacity = baseOp;
        N2.style.transform = 'translateY(' + y + '%)';
        N4.style.opacity = baseOp;
        N4.style.transform = 'translateY(' + y + '%)';
        N8.style.opacity = baseOp;
        N8.style.transform = 'translateY(' + y + '%)';
        creator.style.opacity = baseOp;
        creator.style.transform = 'translateY(' + (3 * y) + '%)';
        baseOp = baseOp - opRatio;
        y = y - 1 / 5;
        await delay(1);
    }
}

async function CreatorName() {
    x = 150;
    let opRatio = 1 / x;
    let baseOp = 1 / x;

    creator.style.opacity = '0';
    for (let i = 0; i <= 300; i++)await delay(1);

    for (let i = 0; i <= x; i++) {
        creator.style.opacity = baseOp;
        baseOp = baseOp + opRatio;
        await delay(1);
    }
}
async function two() {
    let t, v, l, m, p, x;
    x = 181;
    let opRatio = 1 / x;
    let baseOp = 1 / x;

    t = 0; v = -20; l = 100; m = 65;
    N2.style.opacity = '0';
    for (let i = 0; i <= x; i++) {
        p = (((v - m) * (i - l) * (i - l)) / ((t - l) * (t - l))) + m
        N2.style.opacity = baseOp;
        baseOp = baseOp + opRatio;
        N2.style.left = p + '%';
        await delay(1);
    }
}
async function zero() {
    let t, v, l, m, p, x;
    x = 156;
    let opRatio = 1 / x;
    let baseOp = 1 / x;

    for (let i = 0; i <= 40; i++)await delay(1);

    t = 0; v = -20; l = 100; m = 52;
    N0.style.opacity = '0';
    for (let i = 0; i <= x; i++) {
        p = (((v - m) * (i - l) * (i - l)) / ((t - l) * (t - l))) + m
        N0.style.opacity = baseOp;
        baseOp = baseOp + opRatio;
        N0.style.left = p + '%';
        await delay(1);
    }
}
async function four() {
    let t, v, l, m, p, x;
    x = 156;
    let opRatio = 1 / x;
    let baseOp = 1 / x;

    for (let i = 0; i <= 60; i++)await delay(1);

    t = 0; v = -20; l = 100; m = 52;
    N4.style.opacity = '0';
    for (let i = 0; i <= 156; i++) {
        p = (((v - m) * (i - l) * (i - l)) / ((t - l) * (t - l))) + m
        N4.style.opacity = baseOp;
        baseOp = baseOp + opRatio;
        N4.style.right = p + '%';
        await delay(1);
    }
}
async function eight() {
    let t, v, l, m, p, x;
    x = 181;
    let opRatio = 1 / x;
    let baseOp = 1 / x;

    for (let i = 0; i <= 20; i++)await delay(1);

    t = 0; v = -20; l = 100; m = 65;
    N8.style.opacity = '0';
    for (let i = 0; i <= 181; i++) {
        p = (((v - m) * (i - l) * (i - l)) / ((t - l) * (t - l))) + m
        N8.style.opacity = baseOp;
        baseOp = baseOp + opRatio;
        N8.style.right = p + '%';
        await delay(1);
    }
}

two();
zero();
four();
eight();
CreatorName();
itemVanish();
introBoxVanish();



////////////// Game Other Functions //////////////
// Developed by Raveen-S

let tileVals = document.querySelectorAll('.val');
let backTiles = document.querySelectorAll('.tile');
let uA = document.querySelector('.up-ar');
let lA = document.querySelector('.left-ar');
let rA = document.querySelector('.right-ar');
let dA = document.querySelector('.down-ar');
let back = document.querySelector('.rel');
let refresh = document.querySelector('.ref');
let undoCount = document.querySelector('.undo-terms');
let gameOverBoarder = document.querySelector('.game-over-board');
let restartButton = document.querySelector('.restart');
let winnerBox = document.querySelector('.winnerbox');

let baseArray;
let baseSize = 4;
if (baseSize == 4) baseArray = [[[], [], [], []],
[[], [], [], []],
[[], [], [], []],
[[], [], [], []]];

baseArray = [[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0]];

/* baseArray =[[0,0,0,0],
            [0,0,2,4],
            [64,32,16,8],
            [128,256,512,1024]]; */

/* baseArray =[[32,16,8,0],
            [64,128,256,512],
            [8192,4096,2048,1024],
            [16384,32768,65536,131072]]; */


let undoArray = [];
let turn = 0;
let uCount;
let winnerBoardAppeared = true;

setRandomVal();
setValsToTheBackBoard();


let h1 = [];
let h2 = [];
let h3 = [];
let h4 = [];

let v1 = [];
let v2 = [];
let v3 = [];
let v4 = [];

let horizontalSet = [h1, h2, h3, h4];
let verticalSet = [v1, v2, v3, v4];


uA.addEventListener('click', e => { run("vertical", true, true) })
lA.addEventListener('click', e => { run("horizontal", true, false) })
rA.addEventListener('click', e => { run("horizontal", false, false) })
dA.addEventListener('click', e => { run("vertical", false, true) })


// Arrow Keys Functions
document.addEventListener('keydown', (e) => {

    if (e.key == "ArrowUp") run("vertical", true, true);
    if (e.key == "ArrowDown") run("vertical", false, true);
    if (e.key == "ArrowLeft") run("horizontal", true, false);
    if (e.key == "ArrowRight") run("horizontal", false, false);
})

back.addEventListener('click', e => { if (undoArray.length > 0) backStep() })
refresh.addEventListener('click', e => { refreshGame() })
restartButton.addEventListener('click', e => {
    gameOverBoarder.style.visibility = 'hidden';
    refreshGame();
})



function run(setType, counterDirection, verticalMove) {

    let arraySet;
    let check1 = [];
    let check2 = [];
    let newUndoTempArray = [];
    let passForRandom = false;

    if (setType == "vertical") arraySet = getItemsFromBaseArray("v");
    else if (setType == "horizontal") arraySet = getItemsFromBaseArray("h");

    check1 = getridBlockedMove(verticalMove, arraySet).toString();
    console.log(check1);
    newUndoTempArray = getridBlockedMove(verticalMove, arraySet);

    for (let i = 0; i < arraySet.length; i++) {
        move(arraySet[i], counterDirection) //shift all to the end
        math(arraySet[i], counterDirection) //add same numbers
        move(arraySet[i], counterDirection) //fill the free spaces that math function made
    }

    check2 = updateBaseArray(verticalMove, arraySet).toString();

    if (check1 != check2) passForRandom = true;

    if (passForRandom) newArrange(newUndoTempArray);
    if (passForRandom) setRandomVal();
    setValsToTheBackBoard();
    if (winnerBoardAppeared && winnerCheck()) winner();
    if (gameOverCheck()) gameOverBoarder.style.visibility = 'visible';

}


function getItemsFromBaseArray(type) {

    h1 = baseArray[0];
    h2 = baseArray[1];
    h3 = baseArray[2];
    h4 = baseArray[3];

    v1 = [baseArray[0][0], baseArray[1][0], baseArray[2][0], baseArray[3][0]];
    v2 = [baseArray[0][1], baseArray[1][1], baseArray[2][1], baseArray[3][1]];
    v3 = [baseArray[0][2], baseArray[1][2], baseArray[2][2], baseArray[3][2]];
    v4 = [baseArray[0][3], baseArray[1][3], baseArray[2][3], baseArray[3][3]];

    horizontalSet = [h1, h2, h3, h4];
    verticalSet = [v1, v2, v3, v4];

    if (type == "v") {
        return verticalSet;
    }
    if (type == "h") {
        return horizontalSet;
    }
}


function getridBlockedMove(verticalMove, arraySet) {

    let getrid = [[], [], [], []];

    if (verticalMove) {
        for (let j = 0; j < 4; j++) {
            for (let i = 0; i < 4; i++) {
                getrid[i][j] = arraySet[j][i];
            }
        }
    }
    else {
        for (let j = 0; j < 4; j++) {
            for (let i = 0; i < 4; i++) {
                getrid[j][i] = arraySet[j][i];
            }
        }
    }

    return getrid;

}


function newArrange(tempUndoArray) {
    let size = undoArray.length;

    for (let i = 0; i < 5; i++) {
        if (size == i) undoArray.unshift(tempUndoArray);
    }

    if (size == 5) {
        undoArray.pop();
        undoArray.unshift(tempUndoArray);
    }

    uCount = undoArray.length;
    undoCount.textContent = uCount;
}


function updateBaseArray(verticalMove, arraySet) {
    if (verticalMove) {
        for (let j = 0; j < 4; j++) {
            for (let i = 0; i < 4; i++) {
                baseArray[i][j] = arraySet[j][i];
            }
        }
    }
    else {
        for (let j = 0; j < 4; j++) {
            for (let i = 0; i < 4; i++) {
                baseArray[j][i] = arraySet[j][i];
            }
        }
    }
    return baseArray;
}


function move(tempArray, counterDirection) {

    let freeCount = 0;
    let filledCount = 0;
    let round = 1;
    let terms = tempArray.length - 1;

    if (counterDirection) {
        for (let term = 0; term <= terms; term++) {
            if (tempArray[term] == 0) {
                freeCount++;
            }
            else {
                if (freeCount > 0 && round > 1) {
                    tempArray[(term - freeCount + filledCount)] = tempArray[term];
                    tempArray[term] = 0;
                    freeCount++;
                    filledCount++;
                }
            }
            round++;

        }
    }
    else {
        for (let term = terms; term >= 0; term--) {
            if (tempArray[term] == 0) {
                freeCount++;
            }
            else {
                if (freeCount > 0 && round > 1) {
                    tempArray[(term + freeCount - filledCount)] = tempArray[term];
                    tempArray[term] = 0;
                    freeCount++;
                    filledCount++;
                }
            }
            round++;
        }
    }
}


function math(tempArray, counterDirection) {

    let terms = tempArray.length - 1;

    if (counterDirection) {
        for (let term = 0; term < terms; term++) {
            if (tempArray[term] == tempArray[term + 1]) {
                tempArray[term] = (tempArray[term] + tempArray[term + 1]);
                tempArray[term + 1] = 0;
            }
        }
    }
    else {

        for (let term = terms; term > 0; term--) {
            if (tempArray[term] == tempArray[term - 1]) {
                tempArray[term] = (tempArray[term] + tempArray[term - 1]);
                tempArray[term - 1] = 0;
            }
        }


        if (tempArray[0] == tempArray[1]) {
            tempArray[0] = (tempArray[0] + tempArray[1]);
            tempArray[1] = 0;
        }

    }
}


function setRandomVal() {

    let numberList = [2, 2, 2, 4];
    let tempRepeat = true;

    let rN = Math.floor(Math.random() * 4);
    let rR;
    let rC;

    while (tempRepeat) {
        rR = Math.floor(Math.random() * 4);
        rC = Math.floor(Math.random() * 4);

        if (baseArray[rR][rC] == 0) tempRepeat = false;
    }

    baseArray[rR][rC] = numberList[rN];

}

function backStep() {
    baseArray = undoArray[0];
    undoArray.splice(0, 1);
    uCount = undoArray.length;
    undoCount.textContent = uCount;
    setValsToTheBackBoard()
}

function refreshGame() {

    baseArray = [[0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]];

    winnerBoardAppeared = true;
    undoArray = [];
    turn = 0;
    uCount;


    setRandomVal();
    setValsToTheBackBoard();


    h1 = [];
    h2 = [];
    h3 = [];
    h4 = [];

    v1 = [];
    v2 = [];
    v3 = [];
    v4 = [];

    horizontalSet = [h1, h2, h3, h4];
    verticalSet = [v1, v2, v3, v4];

    uCount = undoArray.length;
    undoCount.textContent = uCount;
}

function gameOverCheck() {

    let zeroPass = true;
    let mathPass = true;


    for (let i = 0; i < tileVals.length; i++) {
        if (tileVals[i].textContent == 0) zeroPass = false;
    }

    let verticalOverSet = [];
    let horizontalOverSet = [];

    verticalOverSet = getItemsFromBaseArray("v");
    horizontalOverSet = getItemsFromBaseArray("h");

    for (let i = 0; i < 4; i++) {
        if (!overArrayRepeater(verticalOverSet[i], "v")) mathPass = false;
    }
    for (let i = 0; i < 4; i++) {
        if (!overArrayRepeater(horizontalOverSet[i], "h")) mathPass = false;
    }

    if (mathPass && zeroPass) return true;
    else return false;
}

function overArrayRepeater(tempArray, name) {

    let terms = tempArray.length - 1;
    for (let term = 0; term < terms; term++) {
        if (tempArray[term] == tempArray[term + 1]) return false;
    }
    return true;

}

function winnerCheck() {
    for (let i = 0; i < tileVals.length; i++) {
        if (tileVals[i].textContent == 2048) return true;
    }
    return false;
}

async function winner() {
    winnerBox.style.visibility = 'visible';
    winnerBox.style.opacity = 0;
    for (let i = 0; i <= 50; i++) {
        winnerBox.style.transform = 'scale(' + i / 50 + ')';
        winnerBox.style.opacity = i / 50;
        await delay(1);
    }
    for (let i = 0; i <= 400; i++) await delay(1);

    for (let i = 100; i >= 0; i--) {
        winnerBox.style.opacity = i / 100;
        await delay(1);
    }
    winnerBox.style.visibility = 'hidden';
    winnerBoardAppeared = false;
}




////////////////////  Designing Part  //////////////////////

function setValsToTheBackBoard() {
    let k = 0;
    let content;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            tileVals[k].textContent = baseArray[i][j];
            //console.log(tileVals[k].textContent);
            if (tileVals[k].textContent == 0) tileVals[k].style.visibility = 'hidden';
            else tileVals[k].style.visibility = 'visible';


            content = tileVals[k].textContent;

            if (content.length == 1) tileVals[k].style.fontSize = '60px';
            else if (content.length == 2) tileVals[k].style.fontSize = '55px';
            else if (content.length == 3) tileVals[k].style.fontSize = '45px';
            else if (content.length == 4) tileVals[k].style.fontSize = '35px';
            else if (content.length == 5) tileVals[k].style.fontSize = '28px';
            else tileVals[k].style.fontSize = '24px';

            k++;
        }
    }

    for (let i = 0; i < tileVals.length; i++) {
        content = tileVals[i].textContent;
        if (content == 2) backTiles[i].style.backgroundColor = '#eee4da'
        else if (content == 4) backTiles[i].style.backgroundColor = '#ff8080'
        else if (content == 8) backTiles[i].style.backgroundColor = '#ff7a59'
        else if (content == 16) backTiles[i].style.backgroundColor = '#ff693b'
        else if (content == 32) backTiles[i].style.backgroundColor = '#ff4c20'
        else if (content == 64) backTiles[i].style.backgroundColor = '#ff2828'
        else if (content == 128) backTiles[i].style.backgroundColor = '#cbf077'
        else if (content == 256) backTiles[i].style.backgroundColor = '#a6d833'
        else if (content == 512) backTiles[i].style.backgroundColor = '#86b31e'
        else if (content == 1024) backTiles[i].style.backgroundColor = '#ffe23b'
        else if (content == 2048) backTiles[i].style.backgroundColor = '#0ab2ff'
        else if (content == 4096) backTiles[i].style.backgroundColor = '#007add'
        else if (content == 8192) backTiles[i].style.backgroundColor = '#bf7bff'
        else if (content == 16384) backTiles[i].style.backgroundColor = '#be33ff'
        else if (content == 32768) backTiles[i].style.backgroundColor = '#ff00f2'
        else if (content == 65536) backTiles[i].style.backgroundColor = '#c20088'
        else if (content == 131072) backTiles[i].style.backgroundColor = '#20181e'
        else backTiles[i].style.backgroundColor = '#cdc1b3'
    }

}


