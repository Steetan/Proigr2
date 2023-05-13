let url = window.location.href //получаем урл сайта

if(window.location.href.includes("?=https://")) {  //проверяем вставили ли мы ссылку на видео
    url = window.location.href.toString().split("?=") //обрезаем урл
        .pop() //удаляем ненужный последний элемент
        .replace("watch?v=", "embed/") //делаем так чтобы проигрыватель нормально работал

    window.open(url, "_self")  //открываем проигрыватель
}

