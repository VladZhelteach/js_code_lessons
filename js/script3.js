//найпростіша функція, виводить текст у місці свого виклику
function write_text() {
    document.write("Приклад тексту<br>");
}

//функція, що виводить текст у парний (<></>) html-елемент, який має id="container", текст передається через параметр div_text
function write_text_to_div(div_text) {
    var container = document.getElementById("container");
    container.innerHTML += div_text + "<br>";
}

//функція, аналогічна попередній, але без параметру, текст береться з непарного (<input>) html-елемент, який має id="text_input"
function write_text_to_div_2() {
    var container = document.getElementById("container");
    var div_text = document.getElementById("text_input");
    var text = div_text.value;
    container.innerHTML += text + "<br>";
}

//функція, додає у поле з id="calc_name" текст, що передається через параметр symb
function addSymbol(symb) {
    var calcName = document.getElementById("calc_name");
    calcName.value += symb;
}

//функція, очищує текстове поле, аналогічна попередній, але не має параметрів, просто записує пустий текст в поле
function clear_text() {
    var calcName = document.getElementById("calc_name");
    calcName.value = ``;
}

//робимо розрахунок кальулятором:
function calc_exec() {
    //регулярний вираз, перевіряємо наявність лище цифр та операндів
    const reg = new RegExp("^[-+]?[0-9]+([-+*/]+[-+]?[0-9]+)*$");
    //отримуємо текстове поле калькулятора, в нього id="calc_name"
    var calcName = document.getElementById("calc_name");
    //отримуємо з нього текст
    var textExec = calcName.value;
    //перевіряємо текст на регулярний вираз
    var check = reg.test(textExec);
    if (check) { //true/false
        calcName.value = eval(textExec); //якщо все робре - робимо розрахунок через стандартну eval
    } else {
        calcName.value = "Помилка!"; //якщо є проблеми - видаємо повідомлення про помилку
    }
}

//виконуємо JS-текст з поля id="ide" через стандартну eval
function exec() {
    var ideText = document.getElementById("ide");
    var textExec = ideText.value;
    //console.log(textExec);
    eval(textExec);
}

//функція, що змінює колір фону на сторінці (фон тегу <body>)
function theme() {
    document.body.style.backgroundColor = "#EDEDED";
}

//функція, що видаляє текст (записує пусту строку) у об'єкті з id="header_id"
function text_off() {
    var hoverText = document.getElementById("header_id");
    hoverText.innerHTML = "";
}

//функція, що додає текст у об'єкт з id="header_id"
function text_over() {
    var hoverText = document.getElementById("header_id");
    hoverText.innerHTML = "Навелись курсором на калькулятор";
}

//сума трьох чисел з параметрів: num1, num2, num3. результат можна отримати завдяки return
function summ(num1, num2, num3) {
    var result = num1 + num2 + num3;
    return result;
}