async function dataPatient(id) {
    const api = 'https://bancodedadosprojeto.onrender.com'

    try {
        const response = await fetch(`/patients/${id}`);
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        document.getElementById("idD").value = id
        document.getElementById("nameP").value = data.name
        document.getElementById("dateP").value = data.date
        document.getElementById("professionP").value = data.profession
        document.getElementById("scholarityP").value = data.scholarity
    } catch (error) {
        console.error(error);
    }
}
