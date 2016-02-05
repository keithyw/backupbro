Dashboard = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            user: Meteor.user()
        };
    },
    componentDidMount(){
        if (!this.data.user){
            FlowRouter.go('/');
        }
    },
    render(){
        return(
            <div>
                Dashboard
            </div>
        );
    }
});