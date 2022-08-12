

  
var eName = (formAdd.name.value)


    var eDate = (formAdd.date.value)
    var eDescription = (formAdd.description.value)

var btnSalvar = document.querySelector("#save");

btnSalvar.addEventListener("click", function (event) {
    event.preventDefault();

    var formAdd = document.querySelector("#formAdd");


    let name = (formAdd.name.value)
    let date = (formAdd.date.value)
    let description = (formAdd.description.value)






    console.log(`Nome: `, name)
    console.log(formAdd.name.value);
    console.log(formAdd.date.value);
    console.log(formAdd.description.value);
    localStorage.setItem('name', name);
    localStorage.setItem('date', date);
    localStorage.setItem('description', description);

    

})

