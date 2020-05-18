import { helper } from '@ember/component/helper';

export function isHeavyWeight(params) 
{
  if(params[0]>100)
  {
    return 'Heavy Weight Category';
  }
  
  
}

export default helper(isHeavyWeight);
