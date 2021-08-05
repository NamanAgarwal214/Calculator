const sltBtn = document.querySelector('.convA');
const rstBtn = document.querySelector('.resA');
sltBtn.addEventListener('click', function () {
    let areaSelect = document.querySelector('#unitA');
    let toArea = document.querySelector('#unitToA');
    let inp = areaSelect.value;
    let out = toArea.value;
    if (inp == 'acre' && out == 'are') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 40.468564224;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (inp === out) {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'acre' && inp == 'are') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 40.468564224;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (inp == 'acre' && out == 'hectare') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 0.4046856422;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'acre' && inp == 'hectare') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 0.4046856422;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (inp == 'acre' && out == 'sqcm') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 40468564.224;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'acre' && inp == 'sqcm') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 40468564.224;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }

    else if (inp == 'acre' && out == 'sqft') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 43560;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'acre' && inp == 'sqft') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 43560;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }

    else if (inp == 'acre' && out == 'sqin') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 6272640;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'acre' && inp == 'sqin') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 6272640;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }

    else if (inp == 'acre' && out == 'sqm') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 4046.8564224;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'acre' && inp == 'sqm') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 4046.8564224;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }




    else if (inp == 'are' && out == 'hectare') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 0.01;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'are' && inp == 'hectare') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 0.01;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (inp == 'are' && out == 'sqcm') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 1000000;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'are' && inp == 'sqcm') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 1000000;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }

    else if (inp == 'are' && out == 'sqft') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 1076.391041671;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'are' && inp == 'sqft') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 1076.391041671;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }

    else if (inp == 'are' && out == 'sqin') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 155000.31000062;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'are' && inp == 'sqin') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 155000.31000062;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }

    else if (inp == 'are' && out == 'sqm') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 100;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'are' && inp == 'sqm') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 100;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }




    else if (inp == 'hectare' && out == 'sqcm') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 100000000;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'hectare' && inp == 'sqcm') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 100000000;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }

    else if (inp == 'hectare' && out == 'sqft') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 107639.10416709;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'hectare' && inp == 'sqft') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 107639.10416709;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }

    else if (inp == 'hectare' && out == 'sqin') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 15500031.000062;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'hectare' && inp == 'sqin') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 15500031.000062;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }

    else if (inp == 'hectare' && out == 'sqm') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 10000;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'hectare' && inp == 'sqm') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 10000;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }


    else if (inp == 'sqcm' && out == 'sqft') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 0.001076391;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'sqcm' && inp == 'sqft') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 0.001076391;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }

    else if (inp == 'sqcm' && out == 'sqin') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 0.15500031;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'sqcm' && inp == 'sqin') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 0.15500031;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }

    else if (inp == 'sqcm' && out == 'sqm') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 0.0001;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'sqcm' && inp == 'sqm') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 0.0001;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }


    else if (inp == 'sqft' && out == 'sqin') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 144;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'sqft' && inp == 'sqin') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 144;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }

    else if (inp == 'sqft' && out == 'sqm') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a * 0.09290304;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }
    else if (out == 'sqft' && inp == 'sqm') {
        let a = document.getElementById('num2').value;
        document.querySelector(".areaA").innerHTML = a / 0.09290304;
        // document.querySelector('.in').innerText = inp;
        document.querySelector('.goA').innerText = `in ${out} is: `;
    }

})

rstBtn.addEventListener('click', function () {
    document.querySelector(".areaA").innerHTML = '';
    document.getElementById('num2').value = '';
    // document.querySelector('.in').innerText = '';
    document.querySelector('.goA').innerText = '';
    document.getElementById("unitToA").selectedIndex = 0;
    document.getElementById("unitA").selectedIndex = 0;
})