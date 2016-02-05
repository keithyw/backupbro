Bros = new Mongo.Collection('bros');


var BroSchema = new SimpleSchema({
    email: {
        type: String,
        label: 'Email',
        max: 150
    },
    password: {
        type: String,
        label: 'Password',
        max: 10
    }
});

Bros.attachSchema(BroSchema);

if (Meteor.isClient){
    Meteor.subscribe('bros');
}

if (Meteor.isServer){
    Meteor.publish('bros', function(){
        return Bros.find();
    });

}

Meteor.methods({
   register(data){
     Bros.insert({email: data.email, password: data.password});
   }
});