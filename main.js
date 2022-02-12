
let courseName = document.getElementById("courseName");
let courseCategory = document.getElementById("courseCategory");
let coursePrice = document.getElementById("coursePrice");
let courseDescription = document.getElementById("courseDescription");
let T_body = document.getElementById("T_body");
let search = document.getElementById("search");
let courses=[];

// CREATE
function createCource(){
   let course = {
     cName:courseName.value,
     cCategory:courseCategory.value,
     cPrice:coursePrice.value,
     cDescription:courseDescription.value
   }
   courses.push(course);
   localStorage.setItem("alldata",JSON.stringify(courses));
  displayCourse();
  clearInput();
}

function displayCourse(){
  let result='';
  for(let i=0; i<courses.length; i++){
    result+=`
      <tr>
        <td>${i+1}</td>
        <td>${courses[i].cName}</td>
        <td>${courses[i].cCategory}</td>
        <td>${courses[i].cPrice}</td>
        <td>${courses[i].cDescription}</td>
        <td><button onclick="updateCourse(${i} )" class="update"><i class="fas fa-edit"></i></button></td>
        <td><button onclick="deleteCourse(${i})" class="delete"><i class="far fa-trash-alt"></i></button></td>
      </tr>
    `;
  }
  T_body.innerHTML=result;
}

function clearInput(){
  courseName.value="";
  courseCategory.value="";
  coursePrice.value="";
  courseDescription.value="";
}

function deleteCourse(id){
  courses.splice(id,1);
  displayCourse();
}

function updateCourse(id){
  courses[id].cName=courseName.value;
  courses[id].cCategory=courseCategory.value;
  courses[id].cPrice=coursePrice.value;
  courses[id].cDescription=courseDescription.value;
   displayCourse();
   clearInput();
}

function searchCourse(){
  let searchValue=search.value; 
  let result='';
  for(let i=0; i<courses.length; i++){
  if(courses[i].cName.toLowerCase().includes(searchValue.toLowerCase()))
   
    result+=`
      <tr>
        <td>${i+1}</td>
        <td>${courses[i].cName}</td>
        <td>${courses[i].cCategory}</td>
        <td>${courses[i].cPrice}</td>
        <td>${courses[i].cDescription}</td>
        <td><button onclick="updateCourse(${i} )" class="update"><i class="fas fa-edit"></i></button></td>
        <td><button onclick="deleteCourse(${i})" class="delete"><i class="far fa-trash-alt"></i></button></td>
      </tr>
    `;
  }
  T_body.innerHTML=result;
}