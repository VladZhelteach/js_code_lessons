//глобальна змінна для підрахунку карток
var cardCounter = 1;
//глобальна змінна для поточної теми
var theme = "light";
//глобальна змінна для поточної мови, працює глючно через наявність об'єктів-карток; у реальному житті мова через JS таким чином не перезаписується.
var lang = "ua";

//створюємо масив
var arr1 = [1, false, 3.5, "text", [1, 2, true]];

//створюємо об'єкт
var card1 = {
    id: 1,
    img: "https://picsum.photos/id/1/400/400",
    title: "Card 1",
    descr: "Description 1",
    isActive: true,
    likes: 250,
    dislikes: 20,
    //елементом (параметром) об'єкту може бути інший об'єкт, масив, масив об'єктів і т.д...
    obj: {
        subtitle: "Subtitle",
    },
};

//створюємо масив об'єктів
var cards = [
    //окремий об'єкт у масиві:
    {
        img: "https://picsum.photos/id/1/400/400",
        title: "Користувач",
    },
    //другий окремий об'єкт у масиві:
    {
        img: "https://picsum.photos/id/1024/400/400",
        title: "Орел",
    },
    //і так далі...
    {
        img: "https://picsum.photos/id/1015/400/400",
        title: "Пейзаж",
    },
    {
        img: "https://picsum.photos/id/1040/400/400",
        title: "Замок",
    },
    {
        img: "https://picsum.photos/id/1039/400/",
        title: "Водоспад",
    }
];

//функція, що повертає у результаті суму параметрів
function summ(num1, num2, num3) {
    var result = num1 + num2 + num3;
    return result;
}

//функція, що перевіряє, аби перший параметр був більше другого, повертає везультатом змінну типу bool (true/false)
function check(num1, num2) {
    var result;
    if (num1 > num2) {
        result = true;
    } else {
        result = false;
    }
    //конструкція повернення результату, завжди виконується останньою у функції
    return result;
}

//функція - дублікат попередньої, але коротша та елегантніша, проте має менше можливостей перевірки через debugger
function check_a(num1, num2) {
    //var result;
    if (num1 > num2) {
        return true;
    } else {
        return false;
    }
    //return result;
}

//проста функція без повернення результата (процедура), що знаходить парний (<></>) html-елемент, який має id="container", і додає (дозаписує) в нього текст
function add_text() {
    var container = document.getElementById("container");
    container.innerHTML += "Text<br>";
}

function add_card() {
    //знаходимо контейнер і запам'ятовуємо його у змінну
    var container = document.getElementById("container");
    //допвнюємо існуючий текст новим; вставляємо div, стиль якого описали у style4.css; cardCounter++ вставляє номер і одразу збільшується на 1
    if (cardCounter <= cards.length) {
        //додаємо у парний (<></>) html-елемент, який має id="container", новий внутнішній div-елемент, додаючи його простим текстом
        container.innerHTML += `<div class="card" id="card${cardCounter}">
        <img src="${cards[cardCounter-1].img}" width="100%">
        ${cards[cardCounter-1].title}</div>`;
        //збільшуємо лічильник карток
        cardCounter += 1;
    } else {
        //якщо картки з масиву об'єктів закінчились, створюємо пусту картку зі стандартним текстом
        container.innerHTML += `<div class="card" id="card${cardCounter}">
        Текст у картці${cardCounter++}</div>`;
    }
}

//задаємо світлу тему, підктавляючи в тег body клас theme-light і встановлюючи глобальну зміну theme = "light"
function setLight() {
    theme = "light";
    document.body.className = "theme-light";
}

//задаємо темну тему, підктавляючи в тег body клас theme-dark і встановлюючи глобальну зміну theme = "dark"
function setDark() {
    theme = "dark";
    document.body.className = "theme-dark";
}

//функція, що переключає теми по принципу "вимикача", для встановлення конкретної теми викликаються попередні функції
function switch_theme() {
    switch (theme) {
        case "light":
            setDark();
            break;
        case "dark":
            setLight();
            break;
    }
}

//підмінюємо тест у картках і посиланні, встановлює стандартний текст українською мовою, з картками-об'єктами працю неправильно
function setUA() {
    var card;
    for (let ind = 1; ind < cardCounter; ind+=1) {
        card = document.getElementById(`card${ind}`);
        card.innerHTML = `Текст в картці ${ind}`;
    }
    var link = document.getElementById(`top_link`);
    link.innerHTML = `Натисни!`;
}

//підмінюємо тест у картках і посиланні, встановлює стандартний текст англійською мовою, з картками-об'єктами працю неправильно
function setEN() {
    var card;
    for (let ind = 1; ind < cardCounter; ind+=1) {
        card = document.getElementById(`card${ind}`);
        card.innerHTML = `Text in card ${ind}`;
    }
    var link = document.getElementById(`top_link`);
    link.innerHTML = `Click here!`;
}