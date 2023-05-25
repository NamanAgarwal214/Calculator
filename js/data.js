const dataSelect = document.querySelector('.convD');
const dataReset = document.querySelector('.resD');
dataSelect.addEventListener('click', function () {
    let selectData = document.querySelector('#unitD');
    let toData = document.querySelector('#unitToD');
    let inp = selectData.value;
    let out = toData.value;
    if (inp == 'bits(bit)' && out == 'bytes(B)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a * 0.125;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goD').innerText = `in ${out} is: `;
    }
    else if (inp === out) {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goD').innerText = `in ${out} is: `;
    }
    else if (out == 'bits(bit)' && inp == 'bytes(B)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a / 0.125;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goD').innerText = `in ${out} is: `;
    }
    else if (inp == 'bits(bit)' && out == 'kilobytes(KB)') {
        let a = document.getElementById('num5').value;
        // let b = eval(`${a} + 273.15`);
        document.querySelector(".dataD").innerHTML = a * 0.0001220703;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goD').innerText = `in ${out} is: `;
    }
    else if (out == 'bits(bit)' && inp == 'kilobytes(KB)') {
        let a = document.getElementById('num5').value;
        // let b = eval(`${a} - 273.15`);
        document.querySelector(".dataD").innerHTML = a / 0.0001220703;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goD').innerText = `in ${out} is: `;
    }
    else if (inp == 'bits(bit)' && out == 'megabytes(MB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a * 1.19209290;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goD').innerText = `in ${out} is: `;
    }
    else if (out == 'bits(bit)' && inp == 'megabytes(MB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a / 1.19209290;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goD').innerText = ` in ${out} is: `;
    }
    else if (inp == 'bits(bit)' && out == 'gigabytes(GB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a * 1.164153220;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goD').innerText = `in ${out} is: `;
    }
    else if (out == 'bits(bit)' && inp == 'gigabytes(GB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a / 1.164153220;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goD').innerText = ` in ${out} is: `;
    }
    else if (inp == 'bits(bit)' && out == 'terabytes(TB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a * 1.136868383;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goD').innerText = `in ${out} is: `;
    }
    else if (out == 'bits(bit)' && inp == 'terabytes(TB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a / 1.136868383;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goD').innerText = ` in ${out} is: `;
    }
    else if (inp == 'bytes(B)' && out == 'kilobytes(KB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a * 0.0009765625;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goD').innerText = `in ${out} is: `;
    }
    else if (out == 'bytes(B)' && inp == 'kilobytes(KB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a / 0.0009765625;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goD').innerText = ` in ${out} is: `;
    }
    else if (inp == 'bytes(B)' && out == 'megabytes(MB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a * 9.53674316;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goD').innerText = `in ${out} is: `;
    }
    else if (out == 'bytes(B)' && inp == 'megabytes(MB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a / 9.53674316;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goD').innerText = ` in ${out} is: `;
    }
    else if (inp == 'bytes(B)' && out == 'gigabytes(GB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a * 9.313225750;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goD').innerText = `in ${out} is: `;
    }
    else if (out == 'bytes(B)' && inp == 'gigabytes(GB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a / 9.313225750;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goD').innerText = ` in ${out} is: `;
    }
    else if (inp == 'bytes(B)' && out == 'terabytes(TB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a * 9.094947023;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goD').innerText = `in ${out} is: `;
    }
    else if (out == 'bytes(B)' && inp == 'terabytes(TB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a / 9.094947023;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goD').innerText = ` in ${out} is: `;
    }
    else if (inp == 'kilobytes(KB)' && out == 'megabytes(MB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a * 0.0009765625;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goD').innerText = `in ${out} is: `;
    }
    else if (out == 'kilobytes(KB)' && inp == 'megabytes(MB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a / 0.0009765625;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goD').innerText = ` in ${out} is: `;
    }
    else if (inp == 'kilobytes(KB)' && out == 'gigabytes(GB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a * 0.953674316;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goD').innerText = `in ${out} is: `;
    }
    else if (out == 'kilobytes(KB)' && inp == 'gigabytes(GB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a / 0.953674316;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goD').innerText = ` in ${out} is: `;
    }
    else if (inp == 'kilobytes(KB)' && out == 'terabytes(TB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a * 9.31322575;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goD').innerText = `in ${out} is: `;
    }
    else if (out == 'kilobytes(KB)' && inp == 'terabytes(TB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a / 9.31322575;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goD').innerText = ` in ${out} is: `;
    }
    else if (inp == 'megabytes(MB)' && out == 'gigabytes(GB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a * 0.0009765625;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goD').innerText = `in ${out} is: `;
    }
    else if (out == 'megabytes(MB)' && inp == 'gigabytes(GB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a / 0.0009765625;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goD').innerText = ` in ${out} is: `;
    }
    else if (inp == 'megabytes(MB)' && out == 'terabytes(TB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a * 9.53674316;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goD').innerText = `in ${out} is: `;
    }
    else if (out == 'megabytes(MB)' && inp == 'terabytes(TB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a / 9.53674316;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goD').innerText = ` in ${out} is: `;
    }
    else if (inp == 'gigabytes(GB)' && out == 'terabytes(TB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a * 0.0009765625;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goD').innerText = `in ${out} is: `;
    }
    else if (out == 'gigabytes(GB)' && inp == 'terabytes(TB)') {
        let a = document.getElementById('num5').value;
        document.querySelector(".dataD").innerHTML = a / 0.0009765625;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goD').innerText = ` in ${out} is: `;
    }
})

dataReset.addEventListener('click', function () {
    document.querySelector(".dataD").innerHTML = '';
    document.getElementById('num5').value = '';
    document.querySelector('.in').innerText = '';
    document.querySelector('.goD').innerText = '';
    document.getElementById("unitToD").selectedIndex = 0;
    document.getElementById("unitD").selectedIndex = 0;
})