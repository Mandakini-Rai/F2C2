const data = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

const newUser = document.getElementsByTagName("input");

const filteredData = document.getElementById("employees");
const selectedProfession = document.getElementById("select");
let selectedData = [];
function filterByProfession(a = false) {
  
  filteredData.innerHTML = "";

  if (!a) {
     selectedData = data.filter(
      (user) => user.profession === selectedProfession.value
    );
  } else {
     selectedData = data;
  }
  if (!selectedData.length) alert("Please select a profession.") ? "" : location.reload();
  // window.location.reload();
  selectedData.map((user, index) => {
    filteredData.innerHTML += `
        <div class ="user">
        <span>${user.id}.</span>
        <span>Name: ${user.name}</span>
        <span>Profession: ${user.profession}</span>
        <span>Age: ${user.age}</span>
       </div>
        `;
  });
}
function addUser() {
  if (
    !newUser[0].value.trim() ||
    !newUser[1].value.trim() ||
    !newUser[2].value.trim()
  ) {
    alert("Please fill all the fields appropriately");
  }
  const user = {
    id: data.length + 1,
    name: newUser[0].value,
    age: newUser[2].value,
    profession: newUser[1].value,
  };
  data.push(user);
  
  filterByProfession(true);
}
filterByProfession(true);
