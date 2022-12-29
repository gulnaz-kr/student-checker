let studentName = prompt('Введите имя');
while (studentName === null || studentName.length < 3) {
  alert('Вы некорректно ввели имя, попробуйте еще раз');
  studentName = prompt('Введите имя');
}
alert('Первый этап пройден');

let age = Number(prompt('Введите ваш возраст'));
while (age < 14 || age > 60) {
  alert('Вы должны быть старше 14 и младше 60.');
  age = Number(prompt('Введите ваш возраст'));
}
alert('Второй этап пройден');

let student = confirm('Вы студент?');
if (student) {
  alert('Вам предоставлен доступ');
} else {
  alert('Отказано в доступе');
}
