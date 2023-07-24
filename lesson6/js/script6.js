//створення об'єкту-картки
function createUserCard(idP, imgP, nameP, jobP, isAciveP, langsP, langsP2, techP) {
    var checkActiveFunc = (elem) => {
        if (elem) {
            return "Доступний, в пошуках роботи";
        }  else {
            return "Недоступний, працевлаштовний";
        }
    }

    //об'єкт, що буде повернутий
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
        //параметр, що обраховується функцією
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

//function add_card(idP, imgP, nameP, jobP, isAciveP, langsP, langsP2, techP, css_classP) { //варіант з попереднього уроку
function add_card(card_obj) { //новий варіант
    //знаходимо контейнер і запам'ятовуємо його у змінну
    let container = document.getElementById("container");
    //створюємо картку через виклик функції createUserCard
    const card = createUserCard(card_obj.id, card_obj.img, card_obj.name, card_obj.job, card_obj.isAcive, card_obj.langs, card_obj.langsP, card_obj.tech);
    //додаємо картку у html контейнеру
    container.innerHTML += `<div class="card" id="card${card.id}">
    <h2>${card.name}</h2>
    <img src="${card.img}" width="150px"><br>
    ${card.job}<br>
    </div>`;
}