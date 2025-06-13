


//on crée un conteneur
const container = document.querySelector('#aFaire');

document.querySelector('#add-task-button').addEventListener('click', function() {
    //on récupère la valeur de l'input
    let valeur = document.querySelector('#task-input').value;

    //création de la carte || une div qui contiendra les informations de la tache || son titre (valeur de l'input)
    const card = document.createElement('div');
    const crossBtn = document.createElement("button");
    const status = document.createElement('div');
    
    //on nomme la tâche || sa description
    let desc = document.createElement('div');
    desc.textContent = document.querySelector('#info-input').value;
    let name = document.createElement('h2');
    name.textContent = valeur;

    //Ajout du button de delete card
    crossBtn.textContent="X"
    crossBtn.id = "crossBtn"
    crossBtn.addEventListener("click", function(){
        card.remove()
    })

    
    //on ajoute la carte et ses informations    
    const cardId = (uniqueID());
    card.setAttribute('id', cardId);
    card.setAttribute('draggable', 'true');
    card.setAttribute('class', 'card');
    card.appendChild(name);
    card.appendChild(status);
    card.appendChild(desc)
    card.appendChild(crossBtn);
    status.textContent = 'Informations:';

    //on créer le label du status
    status.setAttribute('id', 'status');
    status.setAttribute('class', 'status');

    const dateDiv = document.createElement('div');
    const currentDate = new Date().toLocaleString();
    dateDiv.textContent = `Date d'ajout: ${currentDate}`;
    status.appendChild(dateDiv);

    //on ajoute la carte au conteneur
    container.appendChild(card);
    
    //on ajoute un option de modification
    const modif = document.createElement('button');
    modif.textContent = 'Modifier';
    modif.setAttribute('class', 'modif');
    modif.setAttribute('type', 'button');
    
    // Ajouter l'événement directement sur le bouton créé
    modif.addEventListener('click', function() {
        createModal(cardId, name);
    });
    
    card.appendChild(modif);
    cards.push(card)
    cardDraggable(card.id)

})

// Fonction pour créer un modal fonctionnel


//ca fait des trucs TKT --- Damien
