const api="https://652ab8e94791d884f1fd46f5.mockapi.io/details";
//select dom elements
const firstdiv=document.querySelector("#studentList")
// console.log(firstdiv);
const seconddiv=document.querySelector("#studentForm");
// console.log(seconddiv);

//redering data

function rendering(data){
    const inform=document.createElement("div");
    inform.className="card";
    inform.innerHTML+=`
    <h2>${data.name}</h2>
    <span>Age:</span>
    <p class="ageEdit">${data.age}</p>
    <span>Sex:</span>
    <p class="sexEdit">${data.sex}</p>
    <button data-id="${data.id}" class="edit">Edit</button>
    <button data-id="${data.id}" class="delete">Delete</button>
    `;
    firstdiv.append(inform);
}

const obj={
    name:"fabian",
    age:"21",
    sex:"male"
}
// rendering(obj);



function readAllData(){
fetch(api)
.then((result)=>result.json())
.then((result)=>renderAllStudents(result))
.catch((result)=>console.log(result+"Invalid link"));
}
readAllData();


function renderAllStudents(result){
    result.forEach((value)=>{
        rendering(value);
        // console.log(value);
    })   ;
}

firstdiv.addEventListener("click",(event)=>{
    
    if(event.target.className==="delete"){
        const id=event.target.dataset.id;
    const parent=event.target.parentNode;
        deleteData(id,parent);
    }
    if(event.target.className==="edit"){
        const id=event.target.dataset.id;
    const parent=event.target.parentNode;
       const editable=parent.parentNode;
       inputName.value=editable.querySelector("h2").textContent;
       inputAge.value=editable.querySelector(".ageEdit").textContent;
       inputSex.value=editable.querySelector(".sexEdit").textContent;
       update.style.display="block";
       add.style.display="none";
       editId=id;
    }
})

function deleteData(id,parent){
    fetch(`${api}/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
        },
    }).then(()=>parent.remove())
    .catch((result)=>console.log(result));

}

seconddiv.innerHTML+=`
<form class="formData">
<h3 class="head">Student Form</h3>
<input 
type="text" 
name="name" 
value=""
placeholder="Student Name"
class="inputText"
id="inputName"
required>

<input 
type="text" 
name="age" 
value=""
placeholder="Student Age"
class="inputText"
id="inputAge"
required>

<input 
type="text" 
name="sex" 
value=""
placeholder="Student Sex"
class="inputText"
id="inputSex"
required>
<button type="submit" class="addButton">Add</button>
<button type="submit" class="updateButton">Update</button>
`;
const add=document.querySelector(".addButton");
const update=document.querySelector(".updateButton");
update.style.display="none";

seconddiv.addEventListener("click",(event)=>{
    event.preventDefault();   
    const inputName=document.querySelector("#inputName");
    const inputAge=document.querySelector("#inputAge");
    const inputSex=document.querySelector("#inputSex");
    if(event.target.className==="addButton"){
        const newData={
        name:inputName.value,
       age:inputAge.value,
       sex:inputSex.value
        };
        //post
        fetch(api,{
            method:"POST",
            body: JSON.stringify(newData),
            headers:{
                "Content-Type" : "application/json",
            },
        })
        .then((result)=>result.json())
        .then((result)=>rendering(result))
        .then(()=>{
            inputName.value="";
            inputAge.value="";
            inputSex.value="";
        })
        .catch((result)=>console.log(result));
    }
    if(event.target.className="updateButton"){
        const updateDetails={
            name:inputName.value,
            age:inputAge.value,
            sex:inputSex.value,
        };
          updateData(updateDetails);
    }
    
  
})
//update
function updateData(updated){
    fetch(`${api}/${editId}`,{
        method:"PUT",
        body:JSON.stringify(updated),
        headers:{
            "Content-Type":"application/json",
        }
    })
    .then((result)=>result.json())
    .then((result)=>location.reload())
    .catch((result)=>console.log(result));
}