// 1
'number' + 3 + 3; 
// 'number' + 3 → 'number3'
// 'number3' + 3 → 'number33'
// Результат: 'number33'

// 2
null + 3;
// null → 0
// 0 + 3 → 3
// Результат: 3

// 3
5 && "qwerty";
// 5 → truthy
// && возвращает последнее истинное значение
// Результат: "qwerty"

// 4
+'40' + +'2' + "hillel";
// +'40' → 40
// +'2' → 2
// 40 + 2 → 42
// 42 + "hillel" → "42hillel"
// Результат: "42hillel"

// 5
'10' - 5 === 6;
// '10' → число 10
// 10 - 5 → 5
// 5 === 6 → false
// Результат: false

// 6
true + false;
// true → 1
// false → 0
// 1 + 0 → 1
// Результат: 1

// 7
'4px' - 3;
// '4px' → NaN (не число)
// NaN - 3 → NaN
// Результат: NaN

// 8
'4' - 3;
// '4' → число 4
// 4 - 3 → 1
// Результат: 1

// 9
'6' + 3 ** 0;
// 3 ** 0 → 1
// '6' + 1 → '61'
// Результат: '61'

// 10
12 / '6';
// '6' → число 6
// 12 / 6 → 2
// Результат: 2

// 11
'10' + (5 === 6);
// 5 === 6 → false
// '10' + false → '10false'
// Результат: '10false'

// 12
null == '';
// null == '' → false (особое правило сравнения)
// Результат: false

// 13
3 ** (9 / 3);
// 9 / 3 → 3
// 3 ** 3 → 27
// Результат: 27

// 14
!!'false' == !!'true';
// 'false' → непустая строка → truthy
// !!'false' → true
// 'true' → непустая строка → truthy
// !!'true' → true
// true == true → true
// Результат: true

// 15
0 || '0' && 1;
// '0' → truthy
// '0' && 1 → 1
// 0 || 1 → 1
// Результат: 1

// 16
(+null == false) < 1;
// +null → 0
// 0 == false → true
// true → 1
// 1 < 1 → false
// Результат: false

// 17
false && true || true;
// false && true → false
// false || true → true
// Результат: true

// 18
false && (false || true);
// false || true → true
// false && true → false
// Результат: false

// 19
(+null == false) < 1 ** 5;
// +null → 0
// 0 == false → true
// true → 1
// 1 ** 5 → 1
// 1 < 1 → false
// Результат: false
