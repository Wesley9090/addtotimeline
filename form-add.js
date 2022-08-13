
function Abrir(id) {
    document.getElementById(id).style.display = "block";
    Inserir()
    var formAdd = document.querySelector("#formAdd");

    let name = (formAdd.name.value)
    let date = (formAdd.date.value)
    let description = (formAdd.description.value)

    localStorage.setItem('name', name);
    localStorage.setItem('date', date);
    localStorage.setItem('description', description);

    document.querySelector("#nameInner").innerHTML = name;
    document.querySelector("#dateInner").innerHTML = date;
    document.querySelector("#descriptionInner").innerHTML = description;
}

function edit(id) {
    document.getElementById(id).style.display = "none";
}
function save() {

    window.location.href = './confirm.html'
}
function Inserir() {
    let NameP = document.querySelector('#Name');
    let dateP = document.querySelector('#Date');
    let descriptionP = document.querySelector('#Description');
    //console.log(dadosDiv);
}
var eDate = (formAdd.date.value)
var eDescription = (formAdd.description.value)
var btnSalvar = document.querySelector("#save");
btnSalvar.addEventListener("click", function (event) {
    event.preventDefault();
})

