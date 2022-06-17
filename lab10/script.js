const URL = "https://usersdogs.dmytrominochkin.cloud/dogs"
const root = "https://usersdogs.dmytrominochkin.cloud"

$.get(URL, function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
    {
        $('body').append(
        `<div class="main">
        
        </div>
        `);
        responseTxt.forEach(dog => {
            $('.main').append(
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
    }
    if(statusTxt == "error")
        console.log(err);
});


$(document).on("click", ".card", function(e){
    $.get(URL, function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
        {
            $('body').append(`
                <div class="modal modal-sheet d-block" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content rounded-4 shadow">
                            <div class="modal-header border-bottom-0">
                                <div class="btn-close btn-close-white"></div>
                            </div>
                            <div class="modal-body py-0">
                                <img src="${root + responseTxt[e.currentTarget.id-1].dogImage}" class="img-fluid rounded-start" alt="...">
                                <h4 class="modal-title">${responseTxt[e.currentTarget.id-1].title}</h4>
                                <ol class="list-group list-group-flush ps-0">
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="me-auto">
                                            <div class="fw-bold">Sex</div>
                                            ${responseTxt[e.currentTarget.id-1].sex}
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="me-auto">
                                            <div class="fw-bold">Age</div>
                                            ${responseTxt[e.currentTarget.id-1].age}
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="me-auto">
                                            <div class="fw-bold">Personality</div>
                                            ${responseTxt[e.currentTarget.id-1].description}
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>             
            `);
            $(`.main`).fadeOut();
            $(`.btn-close`).click(function(e){
                $(`.modal`).remove();
                $(`.main`).fadeIn();
            });
        }
        if(statusTxt == "error")
            console.log(err);
    });
});
