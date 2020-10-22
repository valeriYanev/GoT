let divStark;
let divBaratheon;
let divTargaryen;
let divLannister;

let isTrueStark = true;
let isTrueBaratheon = true;
let isTrueTargaryen = true;
let isTrueLannister = true;

function showStark() {
    divStark = document.getElementById('divStark');
    divStark.innerHTML = 'Stark';
    isTrueStark = true;
    if (isTrueBaratheon || isTrueTargaryen || isTrueLannister) {
        divBaratheon.innerHTML = ' ';
        divTargaryen.innerHTML = ' ';
        divLannister.innerHTML = ' ';
    }
}

function showBaratheon() {
    divBaratheon = document.getElementById('divBaratheon');
    divBaratheon.innerHTML = 'Baratheon';
    isTrueBaratheon = true;
    if (isTrueStark || isTrueTargaryen || isTrueLannister) {
        divStark.innerHTML = ' ';
        divTargaryen.innerHTML = ' ';
        divLannister.innerHTML = ' ';
    }
}

function showTargaryen() {
    divTargaryen = document.getElementById('divTargaryen');
    divTargaryen.innerHTML = 'Targaryen';
    isTrueTargaryen = true;
    if (isTrueStark || isTrueBaratheon || isTrueLannister) {
        divStark.innerHTML = ' ';
        divBaratheon.innerHTML = ' ';
        divLannister.innerHTML = ' ';
    }
}

function showLannister() {
    divLannister = document.getElementById('divLannister');
    divLannister.innerHTML = 'Lannister';
    isTrueLannister = true;
    if (isTrueStark || isTrueTargaryen || isTrueBaratheon) {
        divStark.innerHTML = ' ';
        divTargaryen.innerHTML = ' ';
        divBaratheon.innerHTML = ' ';
    }
}