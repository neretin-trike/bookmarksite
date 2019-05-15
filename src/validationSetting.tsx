
export const searchInputMaxLength = 256;



export default class Validate {
    // public rules;
    public target;
    public errors;

    constructor(name, errors) {
        // this.rules = rules;
        this.errors = errors;
        this.target = {
            name: name,
            message: ""
          };
    }
    check(rules) {

        rules.forEach(rule => {
            this.target = rule() || this.target;
        });


        let items = {...this.errors};
        items[this.target.name] = this.target.message;

        let hasError = false;
        for (const key in items) {
          if (items[key] !== "") {
            hasError = true;
          }
        }

        return [items, hasError];
    }
}

