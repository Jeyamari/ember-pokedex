import Controller from '@ember/controller';
import {computed} from '@ember/object';
import { inject as service } from '@ember/service';
export default Controller.extend({   
    loading:service(),
    heightWithUnits:computed('model.height',function()
    {
        console.log(this.loading);
        let heightInDecimeter=this.model.height;
        let heightInMeter=heightInDecimeter/10;
        if(heightInMeter==1)
        {
            return `${heightInMeter} meter`;
        }
        else{
            return `${heightInMeter} meters`;
        }  
    }),
    weightWithUnits:computed('model.weight',function()
    {
        let weightInHectogram=this.model.weight;
        let weightInKilogram=weightInHectogram/10;
        if(weightInHectogram==1)
        {
            return `${weightInKilogram} kg`;
        }
        else{
            return `${weightInKilogram} kgs`;
        }  
    }),
    toggle:function()
    {
        console.log(this.loading.isLoading);
        this.set('props',this.model.props);   
        this.toggleProperty('isShowingResult'); 
        
    },
});