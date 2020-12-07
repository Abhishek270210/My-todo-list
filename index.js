console.log("file loaded");


let inputvalue=document.querySelector('.input');
let add=document.querySelector('.add-button');
let container=document.querySelector('.container');


if(window.localStorage.getItem("list")==undefined)
{
  var list=[];
  window.localStorage.setItem("list",JSON.stringify(list));
}

var prevlist=window.localStorage.getItem('list');
var list=JSON.parse(prevlist);


class additems{
    constructor(name){
          this.createitem(name);
    }
    createitem(name){
        let div=document.createElement('div');
        let input=document.createElement('input');
        let editbtn=document.createElement('button');
        let removebtn=document.createElement('button');


     div.classList.add('created-div');


       input.value=name;
       input.disabled=true;
       input.classList.add('created-input');

       editbtn.classList.add('created-edit');
       editbtn.innerHTML="EDIT";

       removebtn.classList.add('created-remove');
       removebtn.innerHTML="REMOVE";


       editbtn.addEventListener('click',()=> this.edit(input,name,editbtn));

       removebtn.addEventListener('click',()=> this.remove(div,container,name));
       

       container.appendChild(div);
       div.appendChild(input);
       div.appendChild(editbtn);
       div.appendChild(removebtn);
 }

   edit(input,name,editbtn){
     editbtn.innerHTML="SAVE";
         if(input.disabled==true)
         input.disabled = !input.disabled;
         else
         {
            input.disabled = !input.disabled;
            let index=list.indexOf(name);
            list[index]=input.value;
            window.localStorage.setItem("list",JSON.stringify(list));
         }
         editbtn.addEventListener('click',()=>editbtn.innerHTML="EDIT");
   }

   remove(div,container,name){
       container.removeChild(div);
       let ind=list.indexOf(name);
       list.splice(ind,1);
       window.localStorage.setItem("list",JSON.stringify(list));
   }

}


add.addEventListener('click',clickonadd);

window.addEventListener('keypress',function(e){
  if(e.key==='Enter')
  {
    clickonadd();
  }
})

function clickonadd(){
    let text=inputvalue.value;
    if(text!="")
    {
      new additems(text);
      list.push(text);
      window.localStorage.setItem("list",JSON.stringify(list));
    }
   inputvalue.value="";
}

for(var i=0;i< list.length ;i++)
{
  new additems(list[i]);
}