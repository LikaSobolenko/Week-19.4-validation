class Validation {
    constructor(mean, name) {
        this.mean = mean;
        this.name = name;
    }

    //НЕстатические методы
    checkingEmpty() {
        if (this.mean.value == '') {
            console.log(`Поле ${this.name} не заполнено`);
        };
    }

    checkingEmail() {
        let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

        if (this.mean.value.match(mailFormat)) {
            console.log('УРА, мыло!');
        } else {
            console.log("Ваша почта введена неверно!");
        };
    }

    checkingTel() {
        let telFormat = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;

        if (this.mean.value.match(telFormat)) {
            console.log('УРА, телефон!');
        } else {
            console.log("Ваш номер телефона введен неверно!");
        };
    }

    checkingUrl() {
        let urlFormat =
            /^(?:([a-z]+):(?:([a-z]*):)?\/\/)?(?:([^:@]*)(?::([^:@]*))?@)?((?:[a-z0-9_-]+\.)+[a-z]{2,}|localhost|(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])))(?::(\d+))?(?:([^:\?\#]+))?(?:\?([^\#]+))?(?:\#([^\s]+))?$/i;

        if (this.mean.value.match(urlFormat)) {
            console.log('УРА, адрес сайта!');
        } else {
            console.log("Ваш адрес сайта введен неверно!");
        };
    }

    //Статические методы
    static CheckEmptyStatic(collection) {
        let isEmpty = false;
        for (let input of collection) {
            if (input.value == '')
                isEmpty = true;
        }
        return isEmpty;
    }

    static CheckEmailStatic(collection) {
        let notEmail = true;
        let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
        for (let input of collection) {
            if (input.value.match(mailFormat))
                notEmail = false;
        }
        return notEmail;
    }

    static CheckTelStatic(collection) {
        let notTel = true;
        let telFormat = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;
        for (let input of collection) {
            if (input.value.match(telFormat))
                notTel = false;
        }
        return notTel;
    }

    static CheckUrlStatic(collection) {
        let notUrl = true;
        let urlFormat =
            /^(?:([a-z]+):(?:([a-z]*):)?\/\/)?(?:([^:@]*)(?::([^:@]*))?@)?((?:[a-z0-9_-]+\.)+[a-z]{2,}|localhost|(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])))(?::(\d+))?(?:([^:\?\#]+))?(?:\?([^\#]+))?(?:\#([^\s]+))?$/i;
        for (let input of collection) {
            if (input.value.match(urlFormat))
                notUrl = false;
        }
        return notUrl;
    }
}

//функции на кнопки
function letsgo() {
    if (Validation.CheckEmptyStatic(document.getElementsByClassName('input'))) {
        console.log('Есть незаполненное поле!')
    }

    if (Validation.CheckEmailStatic(document.getElementsByName('email'))) {
        console.log('Неправильно заполненена почту!')
    }

    if (Validation.CheckTelStatic(document.getElementsByName('tel'))) {
        console.log('Неправильно заполнен номер телефона!')
    }

    if (Validation.CheckUrlStatic(document.getElementsByName('url'))) {
        console.log('Неправильно заполнен адрес сайта!')
    }
}

function letsgo2() {
    let validatoremail = new Validation(document.getElementById('email'), 'электронная почта');
    validatoremail.checkingEmpty();
    validatoremail.checkingEmail();
    let validatortel = new Validation(document.getElementById('tel'), 'номер телефона');
    validatortel.checkingEmpty();
    validatortel.checkingTel();
    let validatorurl = new Validation(document.getElementById('url'), 'адрес сайта')
    validatorurl.checkingEmpty();
    validatorurl.checkingUrl();
    let validatordate = new Validation(document.getElementById('date'), 'дата');
    validatordate.checkingEmpty();

}