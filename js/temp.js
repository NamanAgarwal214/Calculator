const selectBut = document.querySelector('.convT');
const resetBut = document.querySelector('.resT');
selectBut.addEventListener('click', function () {
    let selectTemp = document.querySelector('#unitT');
    let toTemp = document.querySelector('#unitToT');
    let inp = selectTemp.value;
    let out = toTemp.value;
    if (inp == 'c' && out == 'f') {
        let a = document.getElementById('num3').value;
        document.querySelector(".tempT").innerHTML = (a * 1.8) + 32;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goT').innerText = `in ${out} is: `;
    }
    else if (inp === out) {
        let a = document.getElementById('num3').value;
        document.querySelector(".tempT").innerHTML = a;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goT').innerText = `in ${out} is: `;
    }
    else if (out == 'c' && inp == 'f') {
        let a = document.getElementById('num3').value;
        document.querySelector(".tempT").innerHTML = ((a - 32) * 5) / 9;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goT').innerText = `in ${out} is: `;
    }
    else if (inp == 'c' && out == 'k') {
        let a = document.getElementById('num3').value;
        let b = eval(`${a} + 273.15`);
        document.querySelector(".tempT").innerHTML = b;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goT').innerText = `in ${out} is: `;
    }
    else if (out == 'c' && inp == 'k') {
        let a = document.getElementById('num3').value;
        let b = eval(`${a} - 273.15`);
        document.querySelector(".tempT").innerHTML = b;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goT').innerText = `in ${out} is: `;
    }
    else if (inp == 'f' && out == 'k') {
        let a = document.getElementById('num3').value;
        document.querySelector(".tempT").innerHTML = ((((a - 32) * 5) / 9) + 273.15);
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goT').innerText = `in ${out} is: `;
    }
    else if (out == 'f' && inp == 'k') {
        let a = document.getElementById('num3').value;
        document.querySelector(".tempT").innerHTML = (((a - 273.15) * 1.8) + 32);
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goT').innerText = ` in ${out} is: `;
    }
})

resetBut.addEventListener('click', function () {
    document.querySelector(".tempT").innerHTML = '';
    document.getElementById('num3').value = '';
    document.querySelector('.in').innerText = '';
    document.querySelector('.goT').innerText = '';
    document.getElementById("unitToT").selectedIndex = 0;
    document.getElementById("unitT").selectedIndex = 0;
})