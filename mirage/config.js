export default function() {
  let results={};
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = 'https://api.myjson.com/bins/8kfis';    // make this `http://localhost:8080`, for example, if your API is on a different server
   //this.namespace = '';    // make this `/api`, for example, if your API is namespaced
   this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
  this.get('https://api.myjson.com/bins/8kfis', (schema) =>{
  //  this.createList('list',10);
   results.results=schema.lists.all().models;
   return  {
    "results": [
      {"name": "bulbasaur","id": 1,"avatar": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png","api_id": "5e39187dbd805113c043b181"},
      {"name":"ivysaur","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png","api_id":"5e39191df47af813bace6615","id":2},
      {"name":"venusaur","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png","api_id":"5e39154bf47af813bace647a","id":3},
      {"name":"charmander","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png","api_id":"5e39156479afb813dc197c4c","id":4},
      {"name":"charmeleon","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png","api_id":"5e391581bd805113c043b06b","id":5},
      {"name":"charizard","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png","api_id":"5e39159c79afb813dc197c5b","id":6},
      {"name":"squirtle","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png","api_id":"5e3915c9bd805113c043b087","id":7},
      {"name":"wartortle","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png","api_id":"5e3915dfbd805113c043b08e","id":8},
      {"name":"blastoise","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png","api_id":"5e3915f9f47af813bace64ad","id":9},
      {"name":"caterpie","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png","api_id":"5e391621f47af813bace64ba","id":10},
      {"name":"metapod","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png","api_id":"5e39163cf47af813bace64c7","id":11},
      {"name":"butterfree","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png","api_id":"5e391652f47af813bace64d1","id":12},
      {"name":"weedle","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png","api_id":"5e391687bd805113c043b0c2","id":13},
      {"name":"kakuna","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png","api_id":"5e39173779afb813dc197ce6","id":14},
      {"name":"beedrill","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png","api_id":"5e39177d79afb813dc197d05","id":15},
      {"name":"pidgey","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png","api_id":"5e39179379afb813dc197d0e","id":16},
      {"name":"pidgeotto","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png","api_id":"5e3917a779afb813dc197d17","id":17},
      {"name":"pidgeot","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png","api_id":"5e3917c179afb813dc197d20","id":18},
      {"name":"rattata","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png","api_id":"5e3917e179afb813dc197d2b","id":19},
      {"name":"raticate","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png","api_id":"5e3917f2f47af813bace6565","id":20}
    ]};
 });

 this.get('https://api.jsonbin.io/b/5e382585593fd7418575642b/latest',()=>{
   return {
     "results":[
       {"name":"bulbasaur","id":1,"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png","api_id":"5e39187dbd805113c043b181"},
       {"name":"ivysaur","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png","api_id":"5e39191df47af813bace6615","id":2},
       {"name":"venusaur","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png","api_id":"5e39154bf47af813bace647a","id":3},
       {"name":"charmander","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png","api_id":"5e39156479afb813dc197c4c","id":4},
       {"name":"charmeleon","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png","api_id":"5e391581bd805113c043b06b","id":5},
       {"name":"charizard","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png","api_id":"5e39159c79afb813dc197c5b","id":6},
       {"name":"squirtle","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png","api_id":"5e3915c9bd805113c043b087","id":7},
       {"name":"wartortle","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png","api_id":"5e3915dfbd805113c043b08e","id":8},
       {"name":"blastoise","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png","api_id":"5e3915f9f47af813bace64ad","id":9},
       {"name":"caterpie","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png","api_id":"5e391621f47af813bace64ba","id":10},
       {"name":"metapod","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png","api_id":"5e39163cf47af813bace64c7","id":11},
       {"name":"butterfree","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png","api_id":"5e391652f47af813bace64d1","id":12},
       {"name":"weedle","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png","api_id":"5e391687bd805113c043b0c2","id":13},
       {"name":"kakuna","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png","api_id":"5e39173779afb813dc197ce6","id":14},
       {"name":"beedrill","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png","api_id":"5e39177d79afb813dc197d05","id":15},
       {"name":"pidgey","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png","api_id":"5e39179379afb813dc197d0e","id":16},
       {"name":"pidgeotto","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png","api_id":"5e3917a779afb813dc197d17","id":17},
       {"name":"pidgeot","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png","api_id":"5e3917c179afb813dc197d20","id":18},
       {"name":"rattata","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png","api_id":"5e3917e179afb813dc197d2b","id":19},
       {"name":"raticate","avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png","api_id":"5e3917f2f47af813bace6565","id":20}]}
 });
 this.get('https://api.jsonbin.io/b/5e39187dbd805113c043b181/latest',()=>
 {
   return {"name":"bulbasaur","height":7,"id":1,"weight":69,"types":["poison","grass"],"props":[],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"};
 });
 this.get('https://api.jsonbin.io/b/5e39191df47af813bace6615/latest',()=>{
  return {"name":"ivysaur","height":10,"id":2,"weight":130,"types":["poison","grass"],"props":[],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"}
 });
 this.get('https://api.jsonbin.io/b/5e39154bf47af813bace647a/latest',()=>{
   return {"name":"venusaur","height":20,"id":3,"weight":1000,"types":["poison","grass"],"props":[],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"};
   
});this.get('https://api.jsonbin.io/b/5e39156479afb813dc197c4c/latest',()=>{
  return {"name":"charmander","height":6,"id":4,"weight":85,"types":["fire"],"props":[],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"};
   
});this.get('https://api.jsonbin.io/b/5e391581bd805113c043b06b/latest',()=>{
  return {"name":"charmeleon","height":11,"id":5,"weight":190,"types":["fire"],"props":[],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"};
   
});this.get('https://api.jsonbin.io/b/5e39159c79afb813dc197c5b/latest',()=>{
  return {"name":"charizard","height":17,"id":6,"weight":905,"types":["flying","fire"],"props":[],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"};
   
});this.get('https://api.jsonbin.io/b/5e3915c9bd805113c043b087/latest',()=>{
  return {"name":"squirtle","height":5,"id":7,"weight":90,"types":["water"],"props":[],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"};
   
});this.get('https://api.jsonbin.io/b/5e3915dfbd805113c043b08e/latest',()=>{
  return {"name":"wartortle","height":10,"id":8,"weight":225,"types":["water"],"props":[],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"};
   
});this.get('https://api.jsonbin.io/b/5e3915f9f47af813bace64ad/latest',()=>{
  return {"name":"blastoise","height":16,"id":9,"weight":855,"types":["water"],"props":[],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"};
   
});this.get('https://api.jsonbin.io/b/5e391621f47af813bace64ba/latest',()=>{
   return {"name":"caterpie","height":3,"id":10,"weight":29,"types":["bug"],"props":[],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png"};
});this.get('https://api.jsonbin.io/b/5e39163cf47af813bace64c7/latest',()=>{
  return {"name":"metapod","height":7,"id":11,"weight":99,"types":["bug"],"props":[],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"};
   
});this.get('https://api.jsonbin.io/b/5e391652f47af813bace64d1/latest',()=>{
  return {"name":"butterfree","height":11,"id":12,"weight":320,"types":["flying","bug"],"props":["silver-powder"],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"};
   
});this.get('https://api.jsonbin.io/b/5e391687bd805113c043b0c2/latest',()=>{
  return {"name":"weedle","height":3,"id":13,"weight":32,"types":["poison","bug"],"props":[],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png"};
   
});this.get('https://api.jsonbin.io/b/5e39173779afb813dc197ce6/latest',()=>{
  return {"name":"kakuna","height":6,"id":14,"weight":100,"types":["poison","bug"],"props":[],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png"};
});this.get('https://api.jsonbin.io/b/5e39177d79afb813dc197d05/latest',()=>{
   return {"name":"beedrill","height":10,"id":15,"weight":295,"types":["poison","bug"],"props":["poison-barb"],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png"};

});this.get('https://api.jsonbin.io/b/5e39179379afb813dc197d0e/latest',()=>{
   return {"name":"pidgey","height":3,"id":16,"weight":18,"types":["flying","normal"],"props":[],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"};
});this.get('https://api.jsonbin.io/b/5e3917a779afb813dc197d17/latest',()=>{
  return {"name":"pidgeotto","height":11,"id":17,"weight":300,"types":["flying","normal"],"props":[],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png"};
   
});this.get('https://api.jsonbin.io/b/5e3917c179afb813dc197d20/latest',()=>{
  return {"name":"pidgeot","height":15,"id":18,"weight":395,"types":["flying","normal"],"props":[],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png"};
   
});this.get('https://api.jsonbin.io/b/5e3917e179afb813dc197d2b/latest',()=>{
  return {"name":"rattata","height":3,"id":19,"weight":35,"types":["normal"],"props":["chilan-berry"],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png"};
   
});
this.get('https://api.jsonbin.io/b/5e3917f2f47af813bace6565/latest',()=>{
  return {"name":"raticate","height":7,"id":20,"weight":185,"types":["normal"],"props":["oran-berry","sitrus-berry","chilan-berry"],"avatar":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png"};
});
}
