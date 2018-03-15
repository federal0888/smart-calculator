class SmartCalculator {
    constructor(initialValue) {
        this.initialValue = initialValue;
    }

    add(number) {
        this.initialValue += ` + ${number}`;
        return this;
    }

    subtract(number) {
        this.initialValue += ` - ${number}`;
        return this;
    }

    multiply(number) {
        this.initialValue += ` * ${number}`;
        return this;
    }

    devide(number) {
        this.initialValue += ` / ${number}`;
        return this;
    }

    pow(number) {
        this.initialValue += ` ** ${number}`;
        return this;
    }

    changer() {
        let stroka = this.initialValue;
        let mass = stroka.split(' ');
        let otv = 0;
        let i = mass.length - 1;

        while (i > -1) {
            if (mass[i] == '**') {
                otv = mass[i - 1] ** mass[i + 1];
                otv = otv + '';
                mass.splice(i - 1, 3, otv);
                i++;
            }
            i--;
        }
        i = 0;
        while (i < mass.length) {
            if (mass[i] == '*') {
                otv = mass[i - 1] * mass[i + 1];
                otv = otv + '';
                mass.splice(i - 1, 3, otv);
                i--;
            }
            i++;
        }
        i = 0;
        while (i < mass.length) {
            if (mass[i] == '/') {
                otv = mass[i - 1] / mass[i + 1];
                otv = otv + '';
                mass.splice(i - 1, 3, otv);
                i--;
            }
            i++;
        }
        i = 0;
        while (i < mass.length) {
            if (mass[i] == '-') {
                otv = mass[i - 1] - mass[i + 1];
                otv = otv + '';
                mass.splice(i - 1, 3, otv);
                i--;
            }
            i++;
        }
        i = 0;
        while (i < mass.length) {
            if (mass[i] == '+') {
                otv = +mass[i - 1] + +mass[i + 1];
                otv = otv + '';
                mass.splice(i - 1, 3, otv);
                i--;
            }
            i++;
        }
        this.initialValue = +mass[0];
    }

    toString() {
        this.changer();
        return this.initialValue;
    }


}

module.exports = SmartCalculator;