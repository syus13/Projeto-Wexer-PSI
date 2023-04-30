//Pegar os dados para enviar para API
const btnSave = document.querySelector("#createPatient")

/* const btnUpdate = document.querySelector("editPatient")
 */
//referenciar o id de cada input
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

    closeModalC()
    loadPatient()
    
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
    
    closeModalE()
}

// colocar observador no botão

btnSave.addEventListener('click', requestValue)
 
//Criar função assincrona para gravar os dados na API
async function insertInApi(firstPosition) {
    const api = 'https://bancodedadosprojeto.onrender.com' // constante com a URL do db.json na render

    return fetch(api+ '/patients', {
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
    const api = 'https://bancodedadosprojeto.onrender.com' // constante com a URL do db.json na render

    console.log(editId)
    return fetch(api+ `/patients/${editId}`, {
        method: 'PUT',
        headers: {            
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(firstPosition)
    })
}



// Função GET
async function listPatients(name) {
    const api = 'https://bancodedadosprojeto.onrender.com'
  
    const response = await fetch(api + '/patients')
    const data = await response.json()
  
    if (name) {
      return data.filter(patient => patient.name.toLowerCase().includes(name.toLowerCase()))
    }
  
    return data;
  }
  
  async function loadPatient() {
    const searchInput = document.querySelector('#inputFilter')
    let filteredData = await listPatients()
  
    searchInput.addEventListener('keyup', async () => {
      filteredData = await listPatients(searchInput.value)
      renderTable(filteredData)
    })
  
    renderTable(filteredData)
  }
  
  function renderTable(data) {
    const table = document.querySelector('#tablePatient')
    table.innerHTML = ''
  
    data.forEach(patient => {
      const row = document.createElement('tr')
      row.innerHTML = `
        <td onclick="openModalData(${patient.id})">${patient.id}</td>
        <td onclick="openModalData(${patient.id})">${patient.name}</td>
        <td onclick="openModalData(${patient.id})">${patient.cpf}</td>
        <td>
          <div id="icons">
            <a href="prontuario.html">
              <button id="openModalMedicalRecord"><i class="fa-solid fa-clipboard-list"></i></button>
            </a>
            <button onclick="openModalE(${patient.id})" class="openModalEdit" id="openModalEdit"><i class="fa-solid fa-pen"></i></button>
            <button onclick="deleteLine(${patient.id})" id="btnDelete"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        </td>
      `;
      table.appendChild(row)
    });
  }
  
  window.addEventListener('DOMContentLoaded', loadPatient)
  

async function deleteLine(deleteId) {
    const api = 'https://bancodedadosprojeto.onrender.com' // constante com a URL do db.json na render

        return fetch(api+`/patients/${deleteId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
           
        })
        
    }

    