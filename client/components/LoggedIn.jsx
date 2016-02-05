LoggedIn = React.createClass({
    signout(e){
        e.preventDefault();
        Meteor.logout(function(){
            FlowRouter.go('/');
        })
    },
    render(){
        return(
            <ul>
                <li>
                    <a href="#" onClick={this.signout}>Sign Out</a>
                </li>
            </ul>
        );
    }
});