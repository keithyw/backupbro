/**
 * Created by keithwatanabe on 1/21/16.
 */
Template.women.helpers({
    getWomen: function(){
        return Women.find({});
    }
});