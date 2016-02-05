Registration = React.createClass({
    getInitialState(){
        return {
            username: '',
            email: '',
            password: '',
            errors: {
                username: [],
                email: [],
                password: []
            }
        };
    },
    onSubmit(e){
        e.preventDefault();
        let rules = {
            'username': {
                'required': true,
                'max': 50
            },
            'email': {
                'required': true,
                'max': 50,
                'email': true
            },
            'password': {
                'required': true,
                'min': 8,
                'max': 12
            }
        };
        let data = { email: this.state.email, password: this.state.password, username: this.state.username };
        Validator.init(rules, data);
        let errors = Validator.validate();
        if (errors.errorCount == 0){
            let user = { email: this.state.email, password: this.state.password, username: this.state.username };
            Accounts.createUser(user, function(err){
                console.log(err);
                if(!err) {
                    FlowRouter.go('/dashboard');
                }
            });
        }
        else{
            console.log(errors);
            this.setState({errors: errors.errors});
        }
    },
    updateField(k, v){
        let state = {};
        state[k] = v;
        this.setState(state);
    },

    render(){
        return(
            <div className="registration">
                <h2>Registration</h2>
                <form onSubmit={this.onSubmit}>
                    <fieldset>
                        <TextFormField field="username" updateChange={this.updateField} placeholder="Username" error={this.state.errors.username} display="Username" value={this.state.username}/>
                        <TextFormField field="email" updateChange={this.updateField} placeholder="Email Address" error={this.state.errors.email} display="Email" value={this.state.email}/>
                        <TextFormField field="password" updateChange={this.updateField} placeholder="6-10 Character Password" error={this.state.errors.password} type="password" display="Password" value={this.state.password}/>
                        <FormButton value="Sign Up" handleSubmit={this.onSubmit}/>
                    </fieldset>
                </form>
            </div>
        );
    }
});