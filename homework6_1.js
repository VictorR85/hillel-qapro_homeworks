// ДЗ 6.1 — Теория вероятности
// Проверяем: при большом количестве случайных чисел
// чётных и нечётных будет примерно 50/50?

function checkProbabilityTheory(count) {

    // счётчики для чётных и нечётных чисел
    let evenCount = 0;  // чётные
    let oddCount = 0;   // нечётные

    // запускаем цикл count раз
    for (let i = 0; i < count; i++) {

        // генерируем случайное целое число от 100 до 1000
        // Math.random() даёт от 0 до 0.999...
        // * 901 растягивает до 0...900.999
        // Math.floor() обрезает дробную часть: 0...900
        // + 100 сдвигает диапазон: 100...1000
        let randomNumber = Math.floor(Math.random() * 901) + 100;

        // проверяем чётное или нечётное
        // % — остаток от деления. Если делится на 2 без остатка — чётное
        if (randomNumber % 2 === 0) {
            evenCount++;  // чётное — добавляем в счётчик чётных
        } else {
            oddCount++;   // нечётное — добавляем в счётчик нечётных
        }
    }

    // считаем проценты
    // toFixed(2) — округляем до 2 знаков после запятой
    let evenPercent = (evenCount / count * 100).toFixed(2);
    let oddPercent = (oddCount / count * 100).toFixed(2);

    // выводим результат в консоль
    console.log('Количество сгенерированных чисел: ' + count);
    console.log('Чётных чисел: ' + evenCount);
    console.log('Нечётных чисел: ' + oddCount);
    console.log('Процент чётных: ' + evenPercent + '%');
    console.log('Процент нечётных: ' + oddPercent + '%');
}

// Запускаем функцию с разными значениями count:
checkProbabilityTheory(10);    // мало чисел — результат непредсказуем
checkProbabilityTheory(100);   // больше — уже ближе к 50/50
checkProbabilityTheory(1000);  // много — почти всегда ~50/50
checkProbabilityTheory(10000); // очень много — практически точно 50/50