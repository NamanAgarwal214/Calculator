const selectBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.res');
selectBtn.addEventListener('click', function () {
    let selectElement = document.querySelector('#unit');
    let toElement = document.querySelector('#unitTo');
    let toInput = document.querySelector('#num1');
    let inp = selectElement.value;
    let out = toElement.value;
    if (inp == 'metre(m)' && out == 'centimetre(cm)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a * 100;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    else if (inp === out) {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    else if (out == 'metre(m)' && inp == 'centimetre(cm)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a / 100;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    else if (inp == 'metre(m)' && out == 'inches(in)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a * 39.3701;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    else if (out == 'metre(m)' && inp == 'inches(in)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a / 39.3701;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    else if (inp == 'centimetre(cm)' && out == 'inches(in)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a * 0.393701;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    else if (out == 'centimetre(cm)' && inp == 'inches(in)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a / 0.393701;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }

    else if (inp == 'millimetre(m)' && out == 'inches(in)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a * 0.0393700787;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    else if (out == 'millimetre(m)' && inp == 'inches(in)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a / 0.0393700787;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }

    else if (inp == 'millimetre(m)' && out == 'metre(m)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a * 0.001;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    else if (out == 'millimetre(m)' && inp == 'metre(m)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a / 0.001;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }

    else if (inp == 'millimetre(m)' && out == 'centimetre(cm)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a * 0.1;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    else if (out == 'millimetre(m)' && inp == 'centimetre(cm)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a / 0.1;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }


    else if (inp == 'kilometre(km)' && out == 'inches(in)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a * 39370.078740157;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    else if (out == 'kilometre(km)' && inp == 'inches(in)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a / 39370.078740157;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }

    else if (inp == 'kilometre(km)' && out == 'metre(m)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a * 1000;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    else if (out == 'kilometre(km)' && inp == 'metre(m)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a / 1000;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }

    else if (inp == 'kilometre(km)' && out == 'centimetre(cm)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a * 100000;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    else if (out == 'kilometre(km)' && inp == 'centimetre(cm)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a / 100000;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }


    else if (inp == 'foot(ft)' && out == 'inches(in)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a * 12;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    else if (out == 'foot(ft)' && inp == 'inches(in)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a / 12;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }

    else if (inp == 'foot(ft)' && out == 'metre(m)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a * 0.3048;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    else if (out == 'foot(ft)' && inp == 'metre(m)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a / 0.3048;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }

    else if (inp == 'foot(ft)' && out == 'centimetre(cm)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a * 30.48;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    else if (out == 'foot(ft)' && inp == 'centimetre(cm)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a / 30.48;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }

    else if (inp == 'foot(ft)' && out == 'kilometre(km)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a * 0.0003048;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    else if (out == 'foot(ft)' && inp == 'kilometre(km)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a / 0.0003048;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }

    else if (inp == 'foot(ft)' && out == 'millimetre(m)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a * 304.8;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    else if (out == 'foot(ft)' && inp == 'millimetre(m)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a / 304.8;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }

    else if (inp == 'kilometre(km)' && out == 'millimetre(m)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a * 1000000;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    else if (out == 'kilometre(km)' && inp == 'millimetre(m)') {
        let a = document.getElementById('num1').value;
        document.querySelector(".lenL").innerHTML = a / 1000000;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.go').innerText = `in ${out} is: `;
    }
    // let ind = document.getElementById("unitTo").selectedIndex;
    // let ind2 = document.getElementById("unit").selectedIndex;
    else if (toElement.selectedIndex === "0" || selectElement.selectedIndex === "0") {
        alert('No units Selected...Select Units');
    }
    else if (toInput.value == '') {
        alert('Provide some input');
    }
})

resetBtn.addEventListener('click', function () {
    document.querySelector(".lenL").innerHTML = '';
    document.getElementById('num1').value = '';
    document.querySelector('.in').innerText = '';
    document.querySelector('.go').innerText = '';
    document.getElementById("unitTo").selectedIndex = 0;
    document.getElementById("unit").selectedIndex = 0;
})