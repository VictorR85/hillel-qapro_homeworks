// ДЗ 10.1 — Параноя
// Фильтруем email — доверяем только gmail.com и yahoo.com

var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    }
];

// Регулярное выражение — наш фильтр-сито
// Проверяет: одно или два слова до @, потом gmail или yahoo, потом .com
let regex = /^[a-z0-9]+(\.[a-z0-9]+)?@(gmail|yahoo)\.com$/i;

// Создаём массив только с доверенными почтами
// filter() перебирает каждый объект и оставляет только те,
// где regex.test() вернул true
let trustedUsers = arr.filter(function(user) {
    return regex.test(user.email);
});

// Выводим результат
console.log('Всего пользователей: ' + arr.length);
console.log('Доверенных пользователей: ' + trustedUsers.length);
console.log('Список доверенных:');
console.log(trustedUsers);