import Route from '@ember/routing/route';

export default Route.extend({
    isShowingResult:false,
    async  model(params)
    {
      console.log(params);
      console.log("Details Model");
        let response = await fetch("https://api.jsonbin.io/b/5e382585593fd7418575642b/latest");
        let result=await response.json();
        let pokemonObj=result.results;
        const getPokemon = pokemonObj.find(pokedex => pokedex.api_id === params.name);
        let responseForPokedex=await fetch("https://api.jsonbin.io/b/"+getPokemon.api_id+"/latest");
        let resultForPokedex=await responseForPokedex.json();
        return resultForPokedex;
    },
    setupController: function(controller, model) {
        controller.set('model', model);
        controller.set('isShowingResult',this.isShowingResult);
     },
     resetController: function(controller, isExiting, isShowingResult) {
      console.log("Reset...Details");
      console.log(isExiting);
        if (isShowingResult) {
          controller.set('isShowingResult', false);
        }
      },
});
