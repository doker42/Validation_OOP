let validator = new Validator();
validator.init();


function Validator() {
    const self = this;

    this.inputsArray = Array.prototype.slice.call(document.getElementsByTagName('input'));
    this.errorsArray = Array.prototype.slice.call(document.getElementsByClassName('val_error'));
    this.buttonElement = document.getElementById('register');
    this.defaultClassName = 'textInput';
    this.errorClassName = 'error';
    this.successClassName = 'success';

    // ВАЛИДАЦИЯ КОНКРЕТНОГО ИНПУТА ПО СООТВЕТСТВУЮЩЕМУ ПРАВИЛУ

    this.verify = function (el) {
        var objvalue = self.inputsArray.value;
        var objerr = self.errorsArray;
        if(objvalue != "" && self.validationRules[el.type].method(el.value))
        {
            objvalue.style.border = "2px solid #3e985f";
            objerr.innerHTML = "";

            return true;
        } else {
            objvalue.style.border = "1px solid red";
            objerr.textContent = self.validationRules[el.type].message(el.value);
            objvalue.focus();

            return false;
        }
    };

    // ТЕСТОВАЯ функция

    this.test = function() {
        console.log("Blur is working");
    }

    // "СЛУШАТЕЛЬ" ИНПУТА, СРАБАТЫВАЕТ НА "БЛУР" И ВЫЗЫВАЕТ ВАЛИДАЦИЮ

    this.listener = function(el) {

        return el.addEventListener('blur', self.verify(), true );
        // return el.addEventListener('blur', self.test(), true );
    };

    this.inputListener = function () {
      return self.inputsArray.map(self.listener);
    };

    // ПРОВЕРКА НА "ПУСТОЕ ПОЛЕ"

    this.validEmpty = function (el) {

        var obj = el;

        if(obj.value == "")
        {
            obj.self.setErrorClass;

            // objerr.textContent = obj['name'] + ' is required';
            // objerr.textContent = 'name' + ' is required';
            obj.focus();
            return false;

        }
       
    };

    this.checkInput = function (el) {
      return el.
    };

    // ПРАВИЛА ВАЛИДАЦИИ

    this.validationRules = {
        name: {
            message: 'Name must be not longer than 10 characters and must have onli Latina Letters',
            method: function(el) { 
                return el.length <= 10 && /[a-zA-Z]+/.test(el); 
            }
        },
        email: {
            message: 'Email must be valid and no longer than 50 characters',
            method: function(el) { 
                return el.length <= 50 &&
                    /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/.test(el);
            }
        },
    };


    //Тестовый слушатель, выбрасывает Алерт
    this.valid = function (el) {
      return   el.addListener('blur', alert('blur'));
    };


    //Тестовая функция
    this.emp = function (el) {
        var ob = el;
        if (ob.value == "") {
            alert('EMPTY');
            ob.self.setErrorClass;
        } else {
            alert('NOT EMPTY');
        }
    };

    // Стиль ПО УМОЛЧАНИЮ

    this.addDefaultClass = function(el) {
        el.classList.add(self.defaultClassName);
    };

    //Стили ERROR

    this.setErrorClass = function(el) {
        el.classList.remove();
        el.classList.add('error');
    };

    //Стиль Успешный

    this.setSuccessClass = function(el) {
        el.classList.remove();
        el.classList.add('success');
    };

    // Запуск Проверки Инпутов на ПУСТЫЕ ЗНАЧЕНИЯ

    this.check = function()
    {
        self.inputsArray.forEach(self.validEmpty);

        self.inputsArray.forEach(self.emp);

        // return self.inputsArray.forEach(self.setErrorClass);


        // self.inputsArray[0].self.validEmpty;
    }


    this.init = function()
    {
        // self.inputsArray.forEach(self.listener);

        // this.inputsArray.forEach(self.setErrorClass);

        // this.inputsArray.forEach(self.setSuccessClass);

        self.buttonElement.onclick = self.check;

        // self.buttonElement.onclick = console.log(Object.values(self.inputsArray));

        // this.buttonElement.onclick = alert("Hello!");
        // this.buttonElement.onclick = this.setErrorClass(this.inputsArray[1]);
    }
}




// console.log(validator.inputsArray);
// console.log(validator.errorsArray);
