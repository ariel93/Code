
const container = document.getElementById('container')
const registerBtn = document.getElementById('register')
const loginBth = document.getElementById('login')

registerBtn.addEventListener('click',()=>{
    container.classList.add("active")
})

loginBth.addEventListener('click',()=>{
    container.classList.remove("active")
})


async function newTeacher(event) {
    event.preventDefault();
    let teacherFullName = event.target.teacherFullName.value;
    let id = event.target.teacherId.value;
    let salary = event.target.teacherSalary.value;
    let profession = event.target.teacherProfession.value;
    try {
        const response = await axios.post("http://localhost:4000/teachers",
           { teacherFullName, id, salary, profession});
           
        if (response.data !== undefined) {
          console.log("Create teacher successful");
        }
      } catch (error) {
        console.error("Error fetching, " + error);
      }
    
}

async function getTeachersByLowerSalary(event) {
  event.preventDefault();
  let salary = event.target.teacherSalaty.value;
  try {
    const response = await axios.post("http://localhost:4000/teachers/salary",{salary});
    if (response.data !== undefined) {
      console.log("successful");
    }
  } catch (error) {
    console.error("Error: " + error);
  }
}

  


