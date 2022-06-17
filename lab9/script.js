const URL = "https://usersdogs.dmytrominochkin.cloud/dogs"
const root = "https://usersdogs.dmytrominochkin.cloud"

fetch(URL)
.then((response) => {
    return response.json();
})
.then(json => {
    document.body.insertAdjacentHTML('afterbegin',
    `<div class="main">
    
    </div>
    `);
    json.forEach(dog => {
        document.querySelector(`.main`).insertAdjacentHTML('beforeend',
        `
        <div class="container align-items-center card mb-3" style="max-width: 540px;" id="${dog.id}">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${root + dog.dogImage}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${dog.title}</h5>
                        <p class="card-text">${dog.description}</p>
                    </div>
                </div>
            </div>
        </div>
        `);
    });
})
.catch(err => {
    console.log(err);
});

window.setTimeout(function(e){
    document.querySelectorAll('.card').forEach(item => {
    item.addEventListener("click", function(e){
        
        fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then(json => {
            document.body.insertAdjacentHTML("afterbegin", `
                <div class="modal modal-sheet d-block" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content rounded-4 shadow">
                            <div class="modal-header border-bottom-0">
                                <div class="btn-close btn-close-white"></div>
                            </div>
                            <div class="modal-body py-0">
                                <img src="${root + json[item.id - 1].dogImage}" class="img-fluid rounded-start" alt="...">
                                <h4 class="modal-title">${json[item.id - 1].title}</h4>
                                <ol class="list-group list-group-flush ps-0">
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="me-auto">
                                            <div class="fw-bold">Sex</div>
                                            ${json[item.id - 1].sex}
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="me-auto">
                                            <div class="fw-bold">Age</div>
                                            ${json[item.id - 1].age}
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="me-auto">
                                            <div class="fw-bold">Personality</div>
                                            ${json[item.id - 1].description}
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>             
            `);
            document.querySelector(`.main`).hidden = true;
            document.querySelector(`.btn-close`).addEventListener("click", function(e){
                document.querySelector(`.modal`).remove();
                document.querySelector(`.main`).hidden = false;
            });
        })
        .catch(err => {
            console.log(err);
        });
    });
});}, 500);
