const timeSelect = document.querySelector('.convI');
const timeReset = document.querySelector('.resI');
timeSelect.addEventListener('click', function () {
    let selectTime = document.querySelector('#unitI');
    let toTime = document.querySelector('#unitToI');
    let inp = selectTime.value;
    let out = toTime.value;
    if (inp == 'milliseconds(ms)' && out == 'seconds(s)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a * 0.001;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goI').innerText = `in ${out} is: `;
    }
    else if (inp === out) {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goI').innerText = `in ${out} is: `;
    }
    else if (out == 'milliseconds(ms)' && inp == 'seconds(s)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a / 0.001;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goI').innerText = `in ${out} is: `;
    }
    else if (inp == 'milliseconds(ms)' && out == 'minutes(min)') {
        let a = document.getElementById('num4').value;
        // let b = eval(`${a} + 273.15`);
        document.querySelector(".timeT").innerHTML = a * 0.0000166667;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goI').innerText = `in ${out} is: `;
    }
    else if (out == 'milliseconds(ms)' && inp == 'minutes(min)') {
        let a = document.getElementById('num4').value;
        // let b = eval(`${a} - 273.15`);
        document.querySelector(".timeT").innerHTML = a / 0.0000166667;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goI').innerText = `in ${out} is: `;
    }
    else if (inp == 'milliseconds(ms)' && out == 'hour(h)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a * 2.77777778;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goI').innerText = `in ${out} is: `;
    }
    else if (out == 'milliseconds(ms)' && inp == 'hour(h)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a / 2.77777778;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goI').innerText = ` in ${out} is: `;
    }
    else if (inp == 'milliseconds(ms)' && out == 'day(d)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a * 1.15740741;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goI').innerText = `in ${out} is: `;
    }
    else if (out == 'milliseconds(ms)' && inp == 'day(d)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a / 1.15740741;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goI').innerText = ` in ${out} is: `;
    }
    else if (inp == 'milliseconds(ms)' && out == 'weeks(wk)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a * 1.65343915;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goI').innerText = `in ${out} is: `;
    }
    else if (out == 'milliseconds(ms)' && inp == 'weeks(wk)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a / 1.65343915;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goI').innerText = ` in ${out} is: `;
    }
    else if (inp == 'seconds(s)' && out == 'minutes(min)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a * 0.0166666667;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goI').innerText = `in ${out} is: `;
    }
    else if (out == 'seconds(s)' && inp == 'minutes(min)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a / 0.0166666667;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goI').innerText = ` in ${out} is: `;
    }
    else if (inp == 'seconds(s)' && out == 'hour(h)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a * 0.0002777778;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goI').innerText = `in ${out} is: `;
    }
    else if (out == 'seconds(s)' && inp == 'hour(h)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a / 0.0002777778;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goI').innerText = ` in ${out} is: `;
    }
    else if (inp == 'seconds(s)' && out == 'day(d)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a * 0.0000115741;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goI').innerText = `in ${out} is: `;
    }
    else if (out == 'seconds(s)' && inp == 'day(d)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a / 0.0000115741;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goI').innerText = ` in ${out} is: `;
    }
    else if (inp == 'seconds(s)' && out == 'weeks(wk)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a * 0.000016534;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goI').innerText = `in ${out} is: `;
    }
    else if (out == 'seconds(s)' && inp == 'weeks(wk)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a / 0.000016534;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goI').innerText = ` in ${out} is: `;
    }
    else if (inp == 'minutes(min)' && out == 'hour(h)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a * 0.0166666667;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goI').innerText = `in ${out} is: `;
    }
    else if (out == 'minutes(min)' && inp == 'hour(h)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a / 0.0166666667;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goI').innerText = ` in ${out} is: `;
    }
    else if (inp == 'minutes(min)' && out == 'day(d)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a * 0.0006944444;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goI').innerText = `in ${out} is: `;
    }
    else if (out == 'minutes(min)' && inp == 'day(d)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a / 0.0006944444;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goI').innerText = ` in ${out} is: `;
    }
    else if (inp == 'minutes(min)' && out == 'weeks(wk)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a * 0.0000992063;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goI').innerText = `in ${out} is: `;
    }
    else if (out == 'minutes(min)' && inp == 'weeks(wk)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a / 0.0000992063;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goI').innerText = ` in ${out} is: `;
    }
    else if (inp == 'hour(h)' && out == 'day(d)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a * 0.416666667;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goI').innerText = `in ${out} is: `;
    }
    else if (out == 'hour(h)' && inp == 'day(d)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a / 0.416666667;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goI').innerText = ` in ${out} is: `;
    }
    else if (inp == 'hour(h)' && out == 'weeks(wk)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a * 0.005952381;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goI').innerText = `in ${out} is: `;
    }
    else if (out == 'hour(h)' && inp == 'weeks(wk)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a / 0.005952381;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goI').innerText = ` in ${out} is: `;
    }
    else if (inp == 'day(d)' && out == 'weeks(wk)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a * 0.1428571429;
        document.querySelector('.in').innerHTML = inp;
        document.querySelector('.goI').innerText = `in ${out} is: `;
    }
    else if (out == 'day(d)' && inp == 'weeks(wk)') {
        let a = document.getElementById('num4').value;
        document.querySelector(".timeT").innerHTML = a / 0.1428571429;
        document.querySelector('.in').innerText = inp;
        document.querySelector('.goI').innerText = ` in ${out} is: `;
    }
})

timeReset.addEventListener('click', function () {
    document.querySelector(".timeT").innerHTML = '';
    document.getElementById('num4').value = '';
    document.querySelector('.in').innerText = '';
    document.querySelector('.goI').innerText = '';
    document.getElementById("unitToI").selectedIndex = 0;
    document.getElementById("unitI").selectedIndex = 0;
})