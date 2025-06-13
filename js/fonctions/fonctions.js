

function uniqueID(){
    return Math.random().toString(36).substring(2,9)
}

function cardDraggable(cardId){
    const dropZone = document.querySelectorAll(".dropZone")
    console.log(dropZone);
    
    const card= document.getElementById(cardId)
    card.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", e.target.id)
        card.classList.add("hold")
        dropZone.forEach(zones => {
            zones.classList.add("highlightZonne")        
        });
    })
    card.addEventListener("dragend", (e)=>{
        dropZone.forEach(zones => { 
            zones.classList.remove("highlightZonne")
        
        });        
        card.classList.remove("hold")
    })
    dropZone.forEach(zone => {
    zone.addEventListener("dragover", (event) => {
        event.preventDefault()
    })
    zone.addEventListener("drop", (e) => {

            e.preventDefault();
            const dropZone = e.target.closest(".dropZone")
            if (dropZone){
                const data = e.dataTransfer.getData("text")
                const draggedCard = document.getElementById(data)

                if(draggedCard !== e.target){
                    dropZone.appendChild(draggedCard)   
                }
            }
    })

})
}

function createModal(cardId, nameElement) {
    // Supprimer le modal existant s'il y en a un
    const existingModal = document.getElementById('taskModal');
    if (existingModal) {
        existingModal.remove();
    }

    // Créer le modal
    //Tous les modal.style.cssText à supprimer à l'implémentation
    const modal = document.createElement('div');
    modal.setAttribute('id', 'taskModal');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;

    // Contenu du modal
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 20px;
        border-radius: 8px;
        width: 400px;
        max-width: 90%;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;

    // Header du modal
    const modalHeader = document.createElement('div');
    modalHeader.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
    `;

    const modalTitle = document.createElement('h3');
    modalTitle.textContent = 'Modifier la tâche';
    modalTitle.style.margin = '0';

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    // Body du modal
    const modalBody = document.createElement('div');
    modalBody.style.marginBottom = '20px';

    const input = document.createElement('input');
    input.type = 'text';
    input.value = nameElement.textContent;
    input.style.cssText = `
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
        box-sizing: border-box;
    `;

    const label = document.createElement('label');
    label.textContent = 'Nom de la tâche:';
    label.style.cssText = `
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
        `;
    const label_desc_edit = document.createElement('label');
    label_desc_edit.textContent = 'Description de la tâche:';
    label_desc_edit.style.cssText = `
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
        `;
        
    const description_edit = document.createElement('input');
    description_edit.type = 'textArrea';
    description_edit.style.cssText = `
        padding: 10px 20px;
        border: none
        border-radius: 4px;
    `;
    // Footer du modal
    const modalFooter = document.createElement('div');
    modalFooter.style.cssText = `
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    `;

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Annuler';
    cancelBtn.style.cssText = `
        padding: 10px 20px;
        border: 1px solid #ddd;
        background: white;
        border-radius: 4px;
        cursor: pointer;
    `;

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Sauvegarder';
    saveBtn.style.cssText = `
        padding: 10px 20px;
        border: none;
        background: #007bff;
        color: white;
        border-radius: 4px;
        cursor: pointer;
    `;
    // Assemblage du modal
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeBtn);
    
    modalBody.appendChild(label);
    modalBody.appendChild(input);
    modalBody.appendChild(label_desc_edit);
    modalBody.appendChild(description_edit);
    
    modalFooter.appendChild(cancelBtn);
    modalFooter.appendChild(saveBtn);
    
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Événements pour fermer le modal
    function closeModal() {
        modal.remove();
    }

    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    
    // Fermer en cliquant à l'extérieur
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Sauvegarder les modifications
    saveBtn.addEventListener('click', function() {
        const newValue = input.value.trim();
        if (newValue) {
            nameElement.textContent = newValue;
            closeModal();
        } else {
            alert('Le nom de la tâche ne peut pas être vide !');
        }
    });

    // Focus sur l'input
    input.focus();
    input.select();
}



