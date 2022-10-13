const GOOGLEURL: string  = "https://www.google.com/search?q=";
let searchBar = document.getElementById("search-bar") as HTMLInputElement | null;


function OnSearch(event: MouseEvent) {
    if (searchBar == null) { return; };
    document.location= GOOGLEURL + searchBar.value.replace(" ", "+")
}