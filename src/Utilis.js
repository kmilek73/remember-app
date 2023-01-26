export function isValidNumberInput(e){
if (isNaN(parseInt(e.key,10))=== true)
    return e.preventDefault();
}


export function parsInputforNumber(val){
  if(val === "") return -1;
  return parseInt (val, 10) ;
}