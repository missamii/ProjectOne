// window.onload = function() {
window.addEventListener('DOMContentLoaded', function(event) {
    console.log('DOM is loaded');
    levelOne();
    event.preventDefault();
});

check = function(n) {
    return function(v) {
        console.log(n, v.target.checked);
        checkstate(v.target.value);
    };
};

for (var i = 0; i < 25; i++) {
    document.bulbform.elements[i].addEventListener('change', check(i));
}

function fillall() {
    for (var i = 0; i < 24; i++) {
        document.bulbform.elements[i].checked = 1;
    }
}

function clearall() {
    for (var i = 0; i < 24; i++) {
        document.bulbform.elements[i].checked = 0;
    }
}

function levelOne() {
    clearall();
    document.bulbform.elements[10].checked = 1;
    document.bulbform.elements[12].checked = 1;
    document.bulbform.elements[14].checked = 1;
}

function levelTwo() {
    clearall();
    document.bulbform.elements[12].checked = 1;
    document.bulbform.elements[16].checked = 1;
    document.bulbform.elements[17].checked = 1;
    document.bulbform.elements[18].checked = 1;
    document.bulbform.elements[20].checked = 1;
    document.bulbform.elements[21].checked = 1;
    document.bulbform.elements[22].checked = 1;
    document.bulbform.elements[23].checked = 1;
    document.bulbform.elements[24].checked = 1;
}

function levelThree() {
    fillall();
    document.bulbform.elements[4].checked = 0;
    document.bulbform.elements[6].checked = 0;
    document.bulbform.elements[7].checked = 0;
    document.bulbform.elements[8].checked = 0;
    document.bulbform.elements[11].checked = 0;
    document.bulbform.elements[12].checked = 0;
    document.bulbform.elements[13].checked = 0;
    document.bulbform.elements[16].checked = 0;
    document.bulbform.elements[17].checked = 0;
    document.bulbform.elements[18].checked = 0;
    document.bulbform.elements[24].checked = 0;
}

function levelFour() {
    clearall();
    document.bulbform.elements[2].checked = 1;
    document.bulbform.elements[6].checked = 1;
    document.bulbform.elements[8].checked = 1;
    document.bulbform.elements[10].checked = 1;
    document.bulbform.elements[12].checked = 1;
    document.bulbform.elements[14].checked = 1;
    document.bulbform.elements[16].checked = 1;
    document.bulbform.elements[18].checked = 1;
    document.bulbform.elements[22].checked = 1;
}

function levelFive() {
    clearall();
    document.bulbform.elements[11].checked = 1;
    document.bulbform.elements[16].checked = 1;
    document.bulbform.elements[21].checked = 1;
}

function checkall() {
    var win = 1;
    for (var i = 0; i < 24; i++) {
        if (document.bulbform.elements[i].checked == 1) {
            win = 0;
        }
    }
    if (win == 1) {
        alert("You Won!!");
    }
}

function checkstate(v) {
    q = 5;
    w = 1;
    row = parseInt(v / q) + w;
    if (isNaN(row)) {
        row = 1;
    }
    intv = parseInt(v);
    a = intv + q;
    b = intv - q;
    c = intv + w;
    d = intv - w;
    if (a < 0 || a > 24) {
        a = 25;
    }
    if (b < 0 || b > 24) {
        b = 25;
    }
    if (c < 0 || c > 24) {
        c = 25;
    }
    if (d < 0 || d > 24) {
        d = 25;
    }
    kc = (parseInt(c / q) + w)
    kd = (parseInt(d / q) + w)
    kv = row;
    if (kc != kv) {
        c = 25;
    }
    if (kd != kv) {
        d = 25;
    }
    if (v == 5) d = 25;

    if (document.bulbform.elements[a].checked == 1) {
        document.bulbform.elements[a].checked = 0;
    } else {
        document.bulbform.elements[a].checked = 1;
    }
    if (document.bulbform.elements[b].checked == 1) {
        document.bulbform.elements[b].checked = 0;
    } else {
        document.bulbform.elements[b].checked = 1;
    }
    if (document.bulbform.elements[c].checked == 1) {
        document.bulbform.elements[c].checked = 0;
    } else {
        document.bulbform.elements[c].checked = 1;
    }
    if (document.bulbform.elements[d].checked == 1) {
        document.bulbform.elements[d].checked = 0;
    } else {
        document.bulbform.elements[d].checked = 1;
    }
    checkall();
}
