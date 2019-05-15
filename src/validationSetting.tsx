
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

      rules.forEach(rule => {
          this.target = rule() || this.target;
      });

      let items = {...this.errors};
      items[this.target.name] = this.target.message;

      if (singleField) {
        if (this.target.message !== "") {
          hasError = true;
        }
      } else {
        for (const key in items) {
          if (items[key] !== "" && key !== "tag") {
            hasError = true;
          }
        }
      }

      return [items, hasError];
    }
}

