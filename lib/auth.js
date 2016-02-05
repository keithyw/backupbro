Auth = new function(){
    this.isLoggedIn = function(){
        return Meteor.userId();
    }
}


