
function result(form) {
    if (form.display.value.includes("^")) {
        exponentCustom(form)
    } else if (form.display.value.includes("√")) {
        squareRoot(form)
    } else if (form.display.value.includes("lg")) {
        log10(form)
    } else if (form.display.value.includes("!")) {
        factorial(form)
    }else {
        form.display.value = eval(form.display.value);
    }
}

function square(form) {
    form.display.value = eval(form.display.value) * eval(form.display.value)
}

function exponentCustom(form) {
    const values = form.display.value.split("^");

    if (values.length === 2) {
        const base = parseFloat(values[0]);
        const exponent = parseFloat(values[1]);
        if (!isNaN(base) && !isNaN(exponent)) {
            form.display.value = Math.pow(base, exponent);
        } else {
            form.display.value = 'Error';
        }
    } else {
        form.display.value = 'Error';
    }
}

function squareRoot(form) {
    const values = form.display.value.split("√");

    if (values.length === 2) {
        const radicand = parseFloat(values[1]);
        if (!isNaN(radicand)) {
            form.display.value = Math.sqrt(radicand);
        } else {
            form.display.value = 'Error';
        }
    } else {
        form.display.value = 'Error';
    }
}

function log10(form) {
    const values = form.display.value.split("lg");

    if (values.length === 2) {
        const number = parseFloat(values[1]);
        if (!isNaN(number)) {
            form.display.value = Math.log10(number);
        } else {
            form.display.value = 'Error';
        }
    } else {
        form.display.value = 'Error';
    }
}

function factorial(form) {
    const values = form.display.value.split("!");
    const value = parseFloat(form.display.value);

    if (!isNaN(value)) {
        if (value < 0) {
            form.display.value = 'Error';
        } else if (value === 0) {
            form.display.value = 1;
        } else {
            let result = 1;
            for (let i = 1; i <= value; i++) {
                result *= i;
            }
            form.display.value = result;
        }
    } else {
        form.display.value = 'Error';
    }
}
