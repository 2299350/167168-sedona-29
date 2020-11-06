var searchFormIndexOpener = document.querySelector(".search-form-top-header");
var searchForm =  document.querySelector(".search-form-index");
var firstInput = searchForm.querySelector("[name=arrival-date]");


if (searchFormIndexOpener) {
    if (searchForm) {
      searchForm.classList.add("index-form--hide");
    };

    searchFormIndexOpener.addEventListener("click", function (evt) {
        evt.preventDefault();
        searchForm.classList.toggle("search-form-index--hide");
        firstInput.select();
        });
};

window.addEventListener("keydown", function(evt) {
    if (evt.key === "Escape") {
        evt.preventDefault();         
        searchForm.classList.add("search-form-index--hide"); 
    }
});

