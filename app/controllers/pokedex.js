import Controller from '@ember/controller';
import {computed} from '@ember/object';
import {inject as service} from '@ember/service';
import { later } from '@ember/runloop';
export default Controller.extend({
    loading:service(),
    queryParams:['order'],
    searchName:null,
    searchArray:null,
    modelDuplicate2:computed('order','searchName',function()
    {
        if(this.searchName!=null)
        {
            this.searchArray=[];
            let length=this.model.length;
            for( let i=0;i<length;i++)
            {
                if(this.model[i].name.includes(this.searchName.toLowerCase()))
                {
                    this.searchArray.push(this.model[i]);
                }
            }
            return this.searchArray;   
        } 
        else if(this.order=='asc')
        {
            return this.ascending(this.model.slice());
        }
        else if(this.order=='desc')
        {
            return this.descending(this.model.slice());
        }
       return  this.model.slice();

        
    }),
    ascending: function(asc)
    {
        console.log(this.loading);
         return asc.sort(function(obj1, obj2){
            let name1=obj1.name.toLowerCase();
            let name2=obj2.name.toLowerCase();
            if (name1 < name2)
                return -1
            if (name1 > name2)   
                return 1
            return 0
        })     
    },
    descending: function(desc)
    {
       return  desc.sort(function(obj1, obj2){
            let name1=obj1.name.toLowerCase();
            let name2=obj2.name.toLowerCase();
            if (name1 > name2)
                return -1
            if (name1 < name2)
                return 1
            return 0
        })
    },
    actions:{
        searchByName()
        {
            let name=this.get('name');
            this.set('searchName',name);
        },
        ascending: function()
        {
           this.set('order','asc');
           this.set('searchName',null);
        },
        descending: function()
        {
            this.set('order','desc');
            this.set('searchName',null);
        },
        Nonsort: function()
        {
            this.set('order',null);
            this.set('searchName',null);
        },
        reload() {
            console.log("Started Refresh");
            this.send('reloadDetails');
        },
        save(model) {
            console.log("isLoading..");
            return this.loading.run(() => model.save());

        }
       
    },   
});




