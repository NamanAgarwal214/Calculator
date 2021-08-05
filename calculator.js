let screen = document.getElementById('input');
let btn = document.querySelectorAll('.data');
let isThere = true;
let screenValue = '';
function changeBg() {
    document.getElementById('input').style.backgroundColor = white;
}

window.addEventListener('reload', move1())

for (item of btn) {
    item.addEventListener('click', function (e) {
        let btnText = e.target.innerText;
        console.log('Number is: ', btnText);

        if (btnText == 'X') {

            if (screenValue.length == 1) {

                screenValue = '';
                screen.value = screenValue;
                isThere = true;
            }
            else {
                screenValue = screenValue.slice(0, screenValue.length - 1);
                screen.value = screenValue;
                isThere = true;
            }
        }
        else if (btnText == 'C') {
            screenValue = "";
            screen.value = '';
        }
        else if (btnText == '=' || e.keyCode == '13') {
            screen.value = eval(screenValue);
            screenValue = screen.value;
        }
        else if (btnText == 'x2') {
            let a = prompt('Enter value of x: ');
            screen.value = Math.pow(a, 2);
        }
        else if (btnText == 'x3') {
            let a = prompt('Enter value of x: ');
            screen.value = Math.pow(a, 3);
        }
        else if (btnText == '√') {
            let a = prompt('Enter value of x: ');
            screen.value = Math.sqrt(a, 2);
        }
        else if (btnText == 'xy') {
            let a = prompt('Enter value of x: ');
            let b = prompt('Enter value of y: ');
            screen.value = Math.pow(a, b);
        }
        else if (btnText === '.') {
            if (isThere === true) {
                screenValue += btnText;
                screen.value = screenValue;
                isThere = false;
            }

            else {
                alert('More than one decimal point not allowed');
            }
        }
        else {
            screenValue += btnText;
            screen.value = screenValue;
        }
    })

}



window.addEventListener('keydown', function (e) {
    console.log(e.keyCode);

    if (e.keyCode >= 96 && e.keyCode <= 111 || (e.keyCode >= 48 && e.keyCode <= 57)) {
        screenValue += e.key;
        screen.value = screenValue;
    }

    else if (e.keyCode == 46) {
        screenValue = "";
        screen.value = '';
    }
    else if (e.keyCode == '13') {
        screen.value = eval(screenValue);
        screenValue = screen.value;
    }
    else if (e.keyCode == 8) {
        if (screenValue.length == 1) {
            screenValue = '';
            screen.value = screenValue;
            // isThere = true;
        }
        else {
            screenValue = screenValue.slice(0, screenValue.length - 1);
            screen.value = screenValue;
            // isThere = true;
        }
    }
    // else if (e.keyCode == 110 || e.keyCode == 190) {
    //     if (isThere === true) {
    //         screenValue += btnText;
    //         screen.value = screenValue;
    //         isThere = false;
    //     }

    //     else {
    //         alert('More than one decimal point not allowed');
    //     }
    // }
})

let selectList = document.querySelectorAll('.list');

for (let i = 0; i < selectList.length; i++) {
    selectList[i].addEventListener('click', function (e) {
        let j = 0;
        while (j < selectList.length) {
            selectList[j++].className = 'list';
        }
        selectList[i].className = 'list active';

        e.preventDefault();
    })
}

let toggleSelect = document.querySelector('.toggler');
let navigateSelect = document.querySelector('.navigate');

toggleSelect.addEventListener('click', function () {
    toggleSelect.classList.toggle('active');
    navigateSelect.classList.toggle('active');
})

function move1() {
    var elmnt = document.getElementById("calc");
    elmnt.scrollIntoView();
}

function move2() {
    var elmnt = document.getElementById("conlen");
    elmnt.scrollIntoView();
}

function move3() {
    var elmnt = document.getElementById("conarea");
    elmnt.scrollIntoView();
}

function move4() {
    var elmnt = document.getElementById("contemp");
    elmnt.scrollIntoView();
}
function move5() {
    var elmnt = document.getElementById("contime");
    elmnt.scrollIntoView();
}

