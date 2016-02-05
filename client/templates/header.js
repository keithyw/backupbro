/**
 * Created by keithwatanabe on 1/21/16.
 */
Template.header.helpers({
    routeName: function(){
        return FlowRouter.getRouteName();
    }
});