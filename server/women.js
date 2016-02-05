Meteor.publish('women', function(){
    return Women.find({});
});
