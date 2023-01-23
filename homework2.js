let sam = "https://fakestoreapi.com/products?limit=10";
const sam1=document.getElementById("sarim"); //to link html, we are going to instantiate from the id in html
const button1=document.getElementById("btn");
let global=[];//declared an emptry array to set the scope of the product list to have a global scope
// button1.onclick=()=>{
//     let strInnerHTML=document.getElementById("search").value;
//     //filtering through our global array and returning a new array newTitle where all the elements in newTitle have products whose title 
//     //contain keyword that was typed into the input 
//     let newTitle=globlal.filter((data)=>{
//       return data.title.includes(strInnerHTML.text);
        
//     })
//    newTitle.map((title)=>{
//     product(title);
//    }); 
// }

fetch(sam).then((data)=>{ //call back function
    return data.json();
}).then((data)=>{
    global=data;
   for ( let i=0 ; i<=data.length; i++){
     product(data[i]);
   }
})

button1.onclick=()=>{
    
   

    sam1.innerHTML='';//clearing the container
    let strInnerHTML=document.getElementById("Search").value;
    //filtering through our global array and returning a new array newTitle where all the elements in newTitle have products whose title 
    //contain keyword that was typed into the input 
    let newTitle=global.filter((data)=>{
      return data.title.includes(strInnerHTML);
        
    }
    )
   newTitle.map((title)=>{
    product(title);
   }); 
   console.log(strInnerHTML);
}
// fetch(sam).then(convertToJason(data)).then(populate(data));
// function convertToJason(data){
//     return data.json();
// }
// function populate(data){
//     for ( let i=0 ; i<=data.length; i++){
//         product(data[i]);
//       }
// }
//first we have to make data digestable, we convert the incoming data into json
// we get data in json as an array of objects.
//we make another "then" to arrange data as an array.
//we make a function product for all the products that would run through each element in the array at a time.





const product=(object)=>{
    //javascript treats the innerHTML code as an actual html code only if we are passing the string through calling the "innerHTNL"
    let data= `
    <div class="row">
    <div class="col-md-7">
        
        <h2>${object.title}</h2>
        <div>${object.price}</div>
        <p>${object.description}</p>
        <div>${object.category}</div>
        <div class="my-3">
            <button class="btn btn-outline-secondary">Dismiss</button>
        </div>
    </div>
    <div class="col-md-5">
    <img src="${object.image}" alt="${object.title}" width="120" height="200">
        
    </div>
</div> `;//back tics we can inject variables into it
    sam1.innerHTML+=data;

}
