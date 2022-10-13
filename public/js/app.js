"use strict";
const GOOGLEURL = "https://www.google.com/search?q=";
let searchBar = document.getElementById("search-bar");
function OnSearch(event) {
    if (searchBar == null) {
        return;
    }
    ;
    document.location = GOOGLEURL + searchBar.value.replace(" ", "+");
}
