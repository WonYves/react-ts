

interface Iobj  {
  age:number,
  name: string,
  isShow: boolean,
  [prposname: string]: any
}

let obj1:Iobj = {
  age: 1,
  name: 'kerwin',
  isShow: false,
  locatiton:'dalian'
}

console.log(obj1); 



export default {}