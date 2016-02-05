Validator = new function(){

    this.rules = [];
    this.values = [];
    this.emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.init = function (rules, values) {
        this.rules = rules;
        this.values = values;
    }

    this.destroy = function () {
        this.rules = [];
        this.values = [];
    }


    this.validate = function () {
        var errors = {};
        var errorCount = 0;
        for (var rule in this.rules){
            if (!errors[rule]){
                errors[rule] = [];
            }
            for (var key in this.rules[rule]){
                if ('required' == key && !this.values[rule]){
                    errorCount++;
                    errors[rule].push(rule + ' Required');
                }
                else if ('min' == key && this.values[rule] && this.values[rule].length < this.rules[rule][key]){
                    errorCount++;
                    errors[rule].push(rule + ' has minimum size of ' + this.rules[rule][key]);
                }
                else if ('max' == key && this.values[rule] && this.values[rule].length > this.rules[rule][key]){
                    errorCount++;
                    errors[rule].push(rule + ' has maximum size of ' + this.rules[rule][key]);
                }
                else if ('regex' == key && this.values[rule] && !this.rules[rule][key].test(this.values[rule])){
                    errorCount++;
                    errors[rule].push(rule + ' must follow the expression ' + this.rules[rule][key]);
                }
                else if ('email' == key && this.values[rule] && !this.emailReg.test(this.values[rule])){
                    errorCount++;
                    errors[rule].push(rule + ' must be a valid email address');
                }
                else if ('password' == key && this.values[rule]){
                    let bro = Bros.findOne({email: this.values['email']});
                    if (!bro){
                        errorCount++;
                        errors[rule].push('Cannot find person');
                    }
                    if (bro && bro.password != this.values[rule]){
                        errorCount++;
                        errors[rule].push(rule + ' does not match');
                    }
                }
            }

        }
        return { errors: errors, errorCount: errorCount };
    }
}