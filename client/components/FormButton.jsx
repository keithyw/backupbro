FormButton = React.createClass({
    onSubmit(e){
        e.preventDefault();
        this.props.handleSubmit(e);
    },
    render(){
        return(
            <div>
                <button type="submit" onClick={this.onSubmit}>{this.props.value}</button>
            </div>
        );
    }
});