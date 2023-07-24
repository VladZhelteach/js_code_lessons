function createUserCard(idP, imgP, nameP, jobP, isAciveP, langsP, langsP2, techP) {
    //var func1 = function(elem) {
    var checkActiveFunc = (elem) => {
        if (elem) {
            return "Доступний, в пошуках роботи";
        }  else {
            return "Недоступний, працевлаштовний";
        }
    }
    //var listLangs

    var result = {
        //параметри:
        id: idP,
        img: imgP,
        name: nameP,
        job: jobP,
        isActive: isAciveP,
        langs: langsP,
        //парамет-об'єкт:
        exp: {
            //параметри:
            langs: langsP2,
            tech: techP,
            //метод:
            listTech: function(css_class) {
                //перевіряємо наявність у аргументах функції CSS-класу
                if (css_class != undefined && css_class.length > 0) {
                    var result = `<ul class="${css_class}">`;
                } else {
                    var result = "<ul>";
                }
                for (let ind in this.tech) {
                    result += `<li>${this.tech[ind]}</li>`;
                }
                result += "</ul>";
                return result;
            }
        },
        checkActive: checkActiveFunc(isAciveP),
        //метод:
        listLangs: function() {
            var result = "<ul>";
            for (let ind in this.exp.langs) {
                result += `<li>${this.exp.langs[ind]}</li>`;
            }
            result += "</ul>";
            return result;
        }
    };
    
    //повертаємо об'єкт:
    return result;
}


function add_card(idP, imgP, nameP, jobP, isAciveP, langsP, langsP2, techP, css_classP) {
    //знаходимо контейнер і запам'ятовуємо його у змінну
    let container = document.getElementById("container");
    //створюємо картку через виклик функції createUserCard
    const card = createUserCard(idP, imgP, nameP, jobP, isAciveP, langsP, langsP2, techP);
    //додаємо картку у html контейнеру
    container.innerHTML += `<div class="card" id="card1">
    <h2>${card.name}</h2>
    <img src="${card.img}"><br>
    ${card.job}<br>
    ${card.checkActive}<br>
    ${card.listLangs(css_classP)}
    ${card.exp.listTech(css_classP)}
    </div>`;
}

/*function add_card() {
    var container = document.getElementById("container");
    if (cardCounter <= cards.length) {
        container.innerHTML += `<div class="card" id="card${cardCounter}">
        <img src="${cards[cardCounter-1].img}" width="100%">
        ${cards[cardCounter-1].title}</div>`;
        cardCounter += 1;
    } else {
        container.innerHTML += `<div class="card" id="card${cardCounter}">
        Текст у картці${cardCounter++}</div>`;
    }
}*/