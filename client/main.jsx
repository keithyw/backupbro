MainLayout = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            user: Meteor.user()
        };
    },
    render(){
        return(
            <div>
                <Header user={this.data.user}/>
                <div id="content">
                    {this.props.content}
                </div>
                <Footer/>
            </div>
        );
    }
});