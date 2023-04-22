//Modal criar paciente

function openModalC() {
  const modalC = document.getElementById("modalInsert");
  modalC.style.display = "flex";
}

function closeModalC() {
  const modalC = document.getElementById("modalInsert");
  modalC.style.display = "none";
}


function outSideClickC(event) {
  const modalC = document.getElementById("modalInsert");
  if (event.target == modalC) {
    closeModalC()
  }
}

document.addEventListener("click", outSideClickC)


//Modal editar paciente utilizado pelo botão da tabela e da consultande paciente

async function openModalE(id) {
  //recebendo id que vem do onclick
  // O parametro vindo atraves do botão de consulta paciente é "read".
  const modalE = document.getElementById("modalEdit");
  modalE.style.display = "flex";
  console.log(id)
  if (id === "read") {  
      //Condição feita para verificar se vem da consulta paciente. 
    const editId = document.querySelector("#idD")
    const cpf = document.querySelector("#cpfD")
    console.log(cpf.value)
    const name = document.querySelector("#nameD")
    const date = document.querySelector("#dateD")
    const email = document.querySelector("#emailD")
    const gender = document.querySelector("#genderD")
    const nationality = document.querySelector("#nationalityD")
    const naturalness = document.querySelector("#naturalnessD")
    const profession = document.querySelector("#professionD")
    const scholarity = document.querySelector("#scholarityD")
    const maritalStatus = document.querySelector("#maritalStatusD")
    const mom = document.querySelector("#momD")
    const dad = document.querySelector("#dadD")
    // querySelector esta lendo o input.

    document.getElementById("idE").value = editId.value
    document.getElementById("cpfE").value = cpf.value
    document.getElementById("nameE").value = name.value
    document.getElementById("dateE").value = date.value
    document.getElementById("emailE").value = email.value
    document.getElementById("genderE").value = gender.value
    document.getElementById("nationalityE").value = nationality.value
    document.getElementById("naturalnessE").value = naturalness.value
    document.getElementById("professionE").value = profession.value
    document.getElementById("scholarityE").value = scholarity.value
    document.getElementById("maritalStatusE").value = maritalStatus.value
    document.getElementById("momE").value = mom.value
    document.getElementById("dadE").value = dad.value
    // getElementById esta escrevendo no input

    closeModalD()
    // fecha o modal ao termino da execução da função
  } else {
    // se vier do botão de edição da tabela realiza a requisição na API com getById .

    const response = await fetch(`http://localhost:3000/patients/${id}`) // Faz a requisição para o arquivo db.json
    const data = await response.json() // Transforma a resposta em um objeto json

    document.getElementById("idE").value = id
    document.getElementById("cpfE").value = data.cpf
    document.getElementById("nameE").value = data.name
    document.getElementById("dateE").value = data.date
    document.getElementById("emailE").value = data.email
    document.getElementById("genderE").value = data.gender
    document.getElementById("nationalityE").value = data.nationality
    document.getElementById("naturalnessE").value = data.naturalness
    document.getElementById("professionE").value = data.profession
    document.getElementById("scholarityE").value = data.scholarity
    document.getElementById("maritalStatusE").value = data.maritalStatus
    document.getElementById("momE").value = data.mom
    document.getElementById("dadE").value = data.dad
     // getElementById esta escrevendo no input os dados retornados da requisição
  }
}


function closeModalE() {
  const modalE = document.getElementById("modalEdit");
  modalE.style.display = "none";
}


function outSideClickE(event) {
  const modalE = document.getElementById("modalEdit");
  if (event.target == modalE) {
    closeModalE()
  }
}

document.addEventListener("click", outSideClickE)


//Modal exibir dados paciente
async function openModalData(id) {
  const modalD = document.getElementById("modalPatientData");
  modalD.style.display = "flex";

  const response = await fetch(`http://localhost:3000/patients/${id}`) // Faz a requisição para o arquivo db.json
  const data = await response.json() // Transforma a resposta em um objeto json

  document.getElementById("idD").value = id
  document.getElementById("cpfD").value = data.cpf
  document.getElementById("nameD").value = data.name
  document.getElementById("dateD").value = data.date
  document.getElementById("emailD").value = data.email
  document.getElementById("genderD").value = data.gender
  document.getElementById("nationalityD").value = data.nationality
  document.getElementById("naturalnessD").value = data.naturalness
  document.getElementById("professionD").value = data.profession
  document.getElementById("scholarityD").value = data.scholarity
  document.getElementById("maritalStatusD").value = data.maritalStatus
  document.getElementById("momD").value = data.mom
  document.getElementById("dadD").value = data.dad

}



function closeModalD() {
  const modalD = document.getElementById("modalPatientData");
  modalD.style.display = "none";
}


function outSideClickD(event) {
  const modalD = document.getElementById("modalPatientData");
  if (event.target == modalD) {
    closeModalD()
  }
}

document.addEventListener("click", outSideClickD)




function patientCreate() {
  const modalS = document.getElementById("modalSuccess");
  modalS.style.display = "flex";
}

function closeModalS() {
  const modalS = document.getElementById("modalSuccess");

  window.setTimeout(() => {
    modalS.style.display = "none";

  }, 5000)
}


function outSideClickS(event) {
  const modalS = document.getElementById("modalSuccess");
  if (event.target == modalS) {
    closeModalS()
  }
}

document.addEventListener("click", outSideClickS)




