//function render() {
    var container = document.getElementById("container");
    var arr1 = []; //ініціалізуємо масив
    arr1[0] = 123;
    arr1[1] = false;
    arr1[2] = "текст";
    console.log(arr1);

    var arr2 = [123, false, "текст"]; // ініціалізуємо і одразу заповнюємо масив
    var arr2a = arr2; //копіюємо масив у іншу змінну
    console.log(arr2a);

    var arr3 = [];
    arr3.push(123); // додаємо елемент в кінець
    arr3.push(false);
    arr3.push("текст");
    arr3.unshift("test"); //додаємо елемент в начало
    console.log(arr3);

    arr3[4] = [1, 2, 3, true, ["рекурcія", 1, 0, false], "тест"]; // додаємо у масив елемент, що сам є масивом
    arr3.push(["qweerty", -100, true]); // додаємо у масив елемент, що сам є масивом

    arr3.pop(); // видаляємо останнє
    console.log(arr3);

    arr3.shift(); // видаляємо перше
    console.log(arr3);

    arr3.splice(1,2); //видаляємо, починаючи з індексу 1, 2 елементи
    console.log(arr3);

    var arr4 = ["текст", 100, -5.12, true, 0, false, "testing..."];
    console.log(arr4);
    console.log(arr4.length); // розмір массива
    container.innerHTML += arr4 + "<br>";
    container.innerHTML += `<hr>`;

    for (let ind = 0; ind < 4; ind+=1) { // цикл, починаємо з 0-го елементу, ідемо до 3-го (<4), крок - 1
        console.log(`${ind}: ${arr4[ind]}`);
    }

    for (let ind = 0; ind < arr4.length; ind+=1) { // цикл, починаємо з 0-го елементу, ідемо до останнього в массиві (<arr4.length), крок - 1
        container.innerHTML += `${ind}: ${arr4[ind]}<br>`;
    }
    container.innerHTML += `<hr>`;

    for (let ind = 0; ind < arr4.length; ind+=2) {// цикл, починаємо з 0-го елементу, ідемо до останнього в массиві (<arr4.length), крок - 2
        container.innerHTML += `${ind}: ${arr4[ind]}<br>`;
    }
    container.innerHTML += `<hr>`;

    for (let ind = arr4.length-1; ind >= 0; ind-=1) { // цикл, починаємо з останнього в массиві, ідемо до 0-го, крок - -1
        container.innerHTML += `${ind}: ${arr4[ind]}<br>`;
    }
    container.innerHTML += `<hr>`;

    for (let ind = arr4.length-1; ind >= 0; ind-=3) { // цикл, починаємо з останнього в массиві, ідемо до 0-го, крок - -3
        container.innerHTML += `${ind}: ${arr4[ind]}<br>`;
    }
    container.innerHTML += `<hr>`;

    for (let ind in arr4) { //переюираємо массив, використовуючи індекси
        container.innerHTML += `${ind}: ${arr4[ind]}<br>`;
    }
    container.innerHTML += `<hr>`;

    for (let item of arr4) { //переюираємо массив, використовуючи копії елементів
        container.innerHTML += `${item}<br>`;
    }
    container.innerHTML += `<hr>`;

    for (let ind in arr4) { ///переюираємо массив, використовуючи індекси, змінюємо елементи массиву
        arr4[ind] += "_1";
        container.innerHTML += `${ind}: ${arr4[ind]}<br>`;
    }
    container.innerHTML += arr4 + `<br>`;
    container.innerHTML += `<hr>`;

    for (let item of arr4) { //переюираємо массив, використовуючи копії елементів, змінити массив немождиво
        item += "_q";
        container.innerHTML += `${item}<br>`;
    }
    container.innerHTML += arr4 + `<br>`;
    container.innerHTML += `<hr>`;

    var wl_ind = 0;
    while (wl_ind < arr4.length) { //перебираємо массив
        container.innerHTML += `${wl_ind}: ${arr4[wl_ind]}<br>`;
        wl_ind += 1;
    }
    container.innerHTML += `<hr>`;

    wl_ind = 5;
    while (wl_ind < 5) { //нічого не виведе, бо не виконується умова
        container.innerHTML += `${wl_ind}<br>`;
        wl_ind += 2;
    }
    container.innerHTML += `<hr>`;

    wl_ind = 5;
    do { // 1 раз виведе, бо do-while саме для цього
        container.innerHTML += `${wl_ind}<br>`;
        wl_ind += 2;
    } while (wl_ind < 5);
    container.innerHTML += `<hr>`;

    for (let ind in arr4) { //continue - проігнорувати остаток блоку після нього, але продвжити цикл
        if (ind == 3) {
            continue;
        }
        container.innerHTML += `${ind}: ${arr4[ind]}<br>`;
    }
    container.innerHTML += `<hr>`;

    for (let ind in arr4) { //break - повністю перервати цикл і піти далі
        if (ind == 4) {
            break;
        }
        container.innerHTML += `${ind}: ${arr4[ind]}<br>`;
    }
    container.innerHTML += `<hr>`;

    var flag1 = true; //1
    var flag2 = false; //0
    console.log(flag1);
//}