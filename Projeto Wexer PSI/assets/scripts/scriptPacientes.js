//Pegar os dados para enviar para API
const btnSave = document.querySelector("#createPatient")
/* const btnUpdate = document.querySelector("editPatient")
 */
//referenciar ou id de cada input
async function requestValue() {
    const cpf = document.querySelector("#cpf")
    const name = document.querySelector("#name")
    const date = document.querySelector("#date")
    const email = document.querySelector("#email")
    const gender = document.querySelector("#gender")
    const nationality = document.querySelector("#nationality")
    const naturalness = document.querySelector("#naturalness")
    const profession = document.querySelector("#profession")
    const scholarity = document.querySelector("#scholarity")
    const maritalStatus = document.querySelector("#maritalStatus")
    const mom = document.querySelector("#mom")
    const dad = document.querySelector("#dad")

    //Objeto para pegar os valores dos inputs
    const valueTotal = {
        id: "",
        cpf: cpf.value,
        name: name.value,
        date: date.value,
        email: email.value,
        gender: gender.value,
        nationality: nationality.value,
        naturalness: naturalness.value,
        profession: profession.value,
        scholarity: scholarity.value,
        maritalStatus: maritalStatus.value,
        mom: mom.value,
        dad: dad.value,
    }

    console.log(valueTotal + "teste funcão leitura")
    await insertInApi(valueTotal)
}

async function requestValueUpdate() {
    const editId = document.querySelector("#idE")
    const cpf = document.querySelector("#cpfE")
    const name = document.querySelector("#nameE")
    const date = document.querySelector("#dateE")
    const email = document.querySelector("#emailE")
    const gender = document.querySelector("#genderE")
    const nationality = document.querySelector("#nationalityE")
    const naturalness = document.querySelector("#naturalnessE")
    const profession = document.querySelector("#professionE")
    const scholarity = document.querySelector("#scholarityE")
    const maritalStatus = document.querySelector("#maritalStatusE")
    const mom = document.querySelector("#momE")
    const dad = document.querySelector("#dadE")

    //Objeto para pegar os valores dos inputs
    const valueTotal = {
        id: editId.value,
        cpf: cpf.value,
        name: name.value,
        date: date.value,
        email: email.value,
        gender: gender.value,
        nationality: nationality.value,
        naturalness: naturalness.value,
        profession: profession.value,
        scholarity: scholarity.value,
        maritalStatus: maritalStatus.value,
        mom: mom.value,
        dad: dad.value,
    }

    console.log(valueTotal + "teste funcão update")
    await updateApi(valueTotal, editId.value)
}

// colocar observador no botão

btnSave.addEventListener('click', requestValue)
 
//Criar função assincrona para gravar os dados na API
async function insertInApi(firstPosition) {
    return fetch('http://localhost:3000/patients', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(firstPosition)
    })
}

//Criar função assincrona para editar os dados na API
async function updateApi(firstPosition, editId) {
    console.log(editId)
    return fetch(`http://localhost:3000/patients/${editId}`, {
        method: 'PUT',
        headers: {            
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(firstPosition)
    })
}



// Função GET
async function listPatients() {
    const response = await fetch('http://localhost:3000/patients') // Faz a requisição para o arquivo db.json
    const data = await response.json() // Transforma a resposta em um objeto json
    return data; // Retorna os dados obtidos
}
console.log(listPatients() + "teste get")

//Chama a url do db.json com os dados
async function carregarPaciente() {
    const formData = await listPatients('../assets/api/db.json')
    console.log(formData + "test data")

  
    //Criar a tabela dentro do body com os dados capturados
    const table = document.querySelector('#tablePatient')
    formData.forEach(data => {
        const row = document.createElement('tr')
        row.innerHTML = `
    <td onclick = "openModalData(${data.id})">${data.id}</td>
    <td onclick = "openModalData(${data.id})">${data.name}</td>
    <td onclick = "openModalData(${data.id})">${data.cpf}</td>
    <td>
    <div id="icons">
    <a href="prontuario.html"> <button id="openModalMedicalRecord"><i class="fa-solid fa-clipboard-list"></i>
     </button></a>
     <button onclick="openModalE(${data.id})" class="openModalEdit" id="openModalEdit"><i class="fa-solid fa-pen"></i>
     </button>
     <button onclick="deleteLine(${data.id})" id="btnDelete"><i class="fa-solid fa-trash-can"></i>
     </button>
 </div>
    </td>
  `;
        table.appendChild(row)
    });
}
window.addEventListener('DOMContentLoaded', carregarPaciente)


async function deleteLine(deleteId) {
        return fetch(`http://localhost:3000/patients/${deleteId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
           
        })
    }
