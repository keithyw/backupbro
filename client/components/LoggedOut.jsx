LoggedOut = React.createClass({
    render(){
        return(
            <ul>
                <li>
                    <a href={FlowHelpers.pathFor('login')}>Sign In</a>
                </li>
                <li>
                    <a href={FlowHelpers.pathFor('registration')}>Sign Up</a>
                </li>
            </ul>
        );
    }
});