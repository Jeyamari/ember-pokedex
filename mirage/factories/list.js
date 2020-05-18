import { Factory } from 'ember-cli-mirage';
import faker from 'faker';
export default Factory.extend({
    
    "api_id": "5e39187dbd805113c043b181",
    name()
    {
        return faker.name.firstName();

    },
    id(i){
        return i;
    },
    avatar()
    {
        return faker.image.avatar();
    }
});
