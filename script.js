//on crée un conteneur
const container = document.querySelector('#aFaire');

document.querySelector('#ajouter').addEventListener('click', function() {
    //on récupère la valeur de l'input
    let valeur = document.querySelector('#input').value;
    //création de la carte || une div qui contiendra les informations de la tache || son titre (valeur de l'input)
    const card = document.createElement('div');
    const status = document.createElement('div');
    //on nomme la tâche
    let name = document.createElement('h2');
    name.textContent = valeur;
    //on ajoute la carte et ses informations
    card.setAttribute('class', 'card');
    card.appendChild(name);
    card.appendChild(status);
    status.textContent = 'Informations';
    //on créer le label du status
    let status_label = document.createElement('label');
    status.setAttribute('id', 'status');
    status_label.textContent ='à faire';
    card.appendChild(status_label);
    status.setAttribute('class', 'status');
    
    const dateDiv = document.createElement('div');
    const currentDate = new Date().toLocaleString();
    dateDiv.textContent = `Date d'ajout: ${currentDate}`;
    card.appendChild(dateDiv);
    //on ajoute la carte au conteneur
    container.appendChild(card);
    
    //on ajoute un option de modification
    const modif = document.createElement('button');
    modif.textContent = 'Modifier';
    modif.setAttribute('class', 'modif');
    modif.setAttribute('class', 'btn');
    card.appendChild(modif);
    document.querySelectorAll('.modif').forEach(function(element) {
        element.addEventListener('click', function() {
            
        })
    })
    
    //style à supprimer à l'implémentation
    card.setAttribute('style', 'border: 1px solid black; width: 300px; height: 200px; display: flex; flex-direction: column; justify-content: space-between; align-items: center;');
})

