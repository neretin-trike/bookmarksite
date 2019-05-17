
// класс для валидации полей ввода
export default class Validate {
    public target;
    public errors?;

    constructor(name, errors?) {
        this.errors = errors;
        this.target = {
            name: name,
            message: ""
          };
    }
    check(rules, singleField?) {

      let hasError = false;

      // выполняет каждое правило, переданное при вызове функции
      rules.forEach(rule => {
          this.target = rule() || this.target;
      });

      // выгружает все текущие ошибки в один массив
      let items = {...this.errors};
      items[this.target.name] = this.target.message;

      // если требуется проверить одно поле (например для полей URL или Тег)
      if (singleField) {
        if (this.target.message !== "") {
          hasError = true;
        }
      } else { // иначе проверять все
        for (const key in items) {
          if (items[key] !== "" && key !== "tag") {
            hasError = true;
          }
        }
      }

      return [items, hasError];
    }
}

