User = React.createClass({
    render(){
        return(
            <li>
                {this.props.user.name}
            </li>
        );
    }
});

Users = React.createClass({
    mixins: [ReactMeteorData],
    startMeteorSubscriptions(){

    },
    getMeteorData(){
        var handle = Meteor.subscribe('women');
        return {
            womenLoading: ! handle.ready(),
            women: Women.find({}).fetch()
        };
    },
    render(){
        if (this.data.womenLoading){
            return(
                <div>
                    Loading
                </div>
            );
        }
        return(
            <ul>
                {this.data.women.map((user, i) => {
                    return <User user={user} key={i}/>;
                })}
            </ul>
        );
    }
});