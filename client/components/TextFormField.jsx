TextFormField = React.createClass({
    handleChange(e){
        this.props.updateChange(this.props.field, e.target.value);
    },

    render(){
        let type = this.props.type ? this.props.type : 'text';
        return(
            <div>
                <label htmlFor={this.props.field}>{this.props.display}</label>
                <input type={type} name={this.props.field} placeholder={this.props.placeholder} onChange={this.handleChange} value={this.props.value}/>
                <FormFieldError errors={this.props.error}/>
            </div>
        );
    }
});