const [mainForm, titleInp, descInp, urgentChk, output] = [
    document.getElementById('main-form'), 
    document.getElementById('title-inp'), 
    document.getElementById('desc-inp'), 
    document.getElementById('urgent-chk'), 
    document.getElementById('output')];

const [completeTodo, todoCard, removeBtn] = [
    document.getElementsByClassName('complete-todo'), 
    document.getElementsByClassName('todo-card'), 
    document.getElementsByClassName('remove-btn')];

mainForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const cardBg = urgentChk.checked == true? 'bg-danger': 'bg-info';

    var randomId = Math.floor(Math.random()*10000000);

    var outputHtml = `
        <div class="card ${cardBg}" id="${randomId}">
            <div class="card-block text-white p-3">
                    <h4>${titleInp.value}:</h4>
                    <hr>
                    <p class="mt-4">${descInp.value}</p>
                    <div class="mt-4">
                        <button class="btn btn-warning complete-todo">Mark as complete</button>
                        <button class="btn btn-warning remove-btn ${randomId}">X</button>
                    </div>
            </div>
        </div>
    `;
    
    let cardOutput= document.createElement('div');
    cardOutput.classList.add("col-md-6", "todo-card", "mb-4");
    cardOutput.innerHTML = outputHtml; 

    output.appendChild(cardOutput);

    titleInp.value = "";
    descInp.value = "";

    
    for(var i = 0; i < completeTodo.length; i++){
        completeTodo[i].addEventListener('click', changeBg);
    };

    for(var i = 0; i < removeBtn.length; i++){
        removeBtn[i].addEventListener('click', deleteCard);
    };

});

function changeBg(e){
    e.target.classList.remove('btn-warning');
    e.target.classList.add('btn-success');
    e.target.innerText = "Todo Completed";
}

function deleteCard(e){
    const cardId = e.target.classList[3];
    const cardNumber = document.getElementById(cardId);
    cardNumber.parentElement.remove()
}


        