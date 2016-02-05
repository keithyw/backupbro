FormFieldError = React.createClass({
    render(){
        if (this.props.errors.length == 0){
            return null;
        }
        let errors = this.props.errors.map((e, i) => {
            return (<li key={i}>{e}</li>)
        });

        return(
            <div>
                <ul>
                    {errors}
                </ul>
            </div>
        );
    }
});