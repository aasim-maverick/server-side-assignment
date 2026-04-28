class Stack{
 constructor(){
  this.items=[];
 }
 push(el){
  this.items.push(el);
 }
 contains(el){
  return this.items.includes(el);
 }
}
