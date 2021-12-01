// Task 1
// Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.
class Goods {
  constructor(out, name, amount) {
    this.out = out;
    this.name = name;
    this.amount = amount;
  }
}

let goods = new Goods();
console.log(goods);

//Task 2.
//  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

class Goods2 {
  constructor(out, name, amount, image, count) {
    this.out = out;
    this.name = name;
    this.amount = amount;
    this.image = image;
    this.count = count;
  }
}

//Task 3.
//  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).

class Goods3 {
  constructor(out, name, amount, image, count) {
    this.out = out;
    this.name = name;
    this.amount = amount;
    this.image = image;
    this.count = count;
  }

  draw() {
    document.querySelector(
      this.out
    ).innerHTML += `<div><p>${this.image}</p><p>${this.name}</p><p>${this.amount}</p></div>`;
  }
}

// Task 4.
// Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.

let goods2 = new Goods3(".out-4", "image", "name", "1000");
goods2.draw();

//Task 5.
// Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.

class Goods4 extends Goods3 {
  constructor(out, name, amount, image, count, sale) {
    super(out, name, amount, image, count);
    this.sale = false;
  }
  drawWithSale() {
    document.querySelector(
      this.out
    ).innerHTML += `<div><p>${this.image}</p><p>${this.name}</p><p>${this.amount}</p><p>${this.sale}</p></div>`;
  }
}

// Task 6.
// Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.

let goods3 = new Goods4(".out-6", "image", "name", "1000");
goods3.drawWithSale();

// Task 7.
// Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.

class Valid {
  constructor(email, password, isValid) {
    this.email = email;
    this.password = password;
    this.isValid = false;
  }
  validate() {
    return this.password.length < 6
      ? (this.isValid = false)
      : (this.isValid = true);
  }
}

//Task 8.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.

let valid = new Valid("name", "1000");
valid.validate();
console.log(valid.isValid);

//Task 9.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.

let valid2 = new Valid("name", "1000000");
valid2.validate();
console.log(valid2.isValid);

//Task 10.
// Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.

class Valid2 extends Valid {
  constructor(email, password, isValid, emaiError, passwordError) {
    super(email, password, isValid);
    this.emaiError = "";
    this.passwordError = "";
  }
  validate2() {
    if (this.password.length < 6 || this.email === "") {
      this.isValid = false;
      this.emaiError = "email empty";
      this.passwordError - "min length 6";
    } else {
      this.isValid = true;
    }
  }
}

//Task 11.
// Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

let valid3 = new Valid2("", "100000");
valid3.validate2();
console.log(valid3);

//Task 12.
// Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

let valid4 = new Valid2("name", "100000");
valid4.validate2();
console.log(valid4);
