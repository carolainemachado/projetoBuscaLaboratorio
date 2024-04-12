const laboratories = [
    { name: 'Laboratório 1', campus: 'campus1', contact: 'lab1@ifrs.edu.br' },
    { name: 'Laboratório 2', campus: 'campus1', contact: 'lab2@ifrs.edu.br' },
    { name: 'Laboratório 3', campus: 'campus2', contact: 'lab3@ifrs.edu.br' },
    { name: 'Laboratório 4', campus: 'campus3', contact: 'lab4@ifrs.edu.br' },
    { name: 'Laboratório 5', campus: 'campus3', contact: 'lab5@ifrs.edu.br' }
];

function searchLaboratories() {
    const selectedCampus = document.getElementById('campusInput').value;
    const searchResults = laboratories.filter(lab => lab.campus === selectedCampus || selectedCampus === 'todos');

    const searchResultsList = document.getElementById('searchResults');
    searchResultsList.innerHTML = '';

    searchResults.forEach(lab => {
        const listItem = document.createElement('li');
        listItem.textContent = lab.name;
        listItem.onclick = () => showContactInfo(lab);
        searchResultsList.appendChild(listItem);
    });
}

function showContactInfo(lab) {
    const contactInfoDiv = document.getElementById('contactInfo');
    contactInfoDiv.innerHTML = `
        <p>Nome do Laboratório: ${lab.name}</p>
        <p>Campus: ${lab.campus}</p>
        <p>Entre em contato: <a href="mailto:${lab.contact}">${lab.contact}</a></p>
    `;
}



