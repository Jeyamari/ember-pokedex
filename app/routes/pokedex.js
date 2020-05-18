import Route from '@ember/routing/route';
import { later } from '@ember/runloop';
export default Route.extend({
    async  model(params)
    {
        this.set('order',params.order);
        let response = await fetch("https://api.myjson.com/bins/8kfis");
        let result=await response.json();
        let myContext=this;
        later(myContext, function() {
            // code here will execute within a RunLoop in about 500ms with this == myContext
            console.log("POkedex Model");
          }, 500);
        return result.results;  
    },
    resetController(controller, isExiting) {
        console.log("Reset Controller");
        console.log(isExiting);
        this._super(...arguments);
        if(isExiting) {
            controller.set('currentlyLoading',false);
        }

    },
    loading() {
        this.controller.send('currentlyLoading',true);
        return true;
    },
    actions: {
        reloadDetails()
        {
            console.log("Reloading....");
            this.refresh();
        }
    }
});
