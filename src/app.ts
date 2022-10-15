import data from "../public/json/tabs.json";

const GOOGLEURL: string = "https://www.google.com/search?q=";
const URLPATTERN: RegExp = RegExp(
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
);
const IMAGEPATTERN: RegExp = RegExp(
  /(https?:\/\/.*\.(?:png|jpg|gif|jpeg|webp|svg))/i
);
// store input related thingies
let searchBar = document.getElementById(
  "search-bar"
) as HTMLInputElement | null;
let urlBox = document.getElementById("url-box") as HTMLInputElement | null;
let iconBox = document.getElementById("icon-box") as HTMLInputElement | null;

let tabgroup = document.getElementById("tab-group") as HTMLElement | null;
let popUp = document.getElementById("popup") as HTMLElement | null;

let popupVisible: boolean = false;

function tab(link: string, icon: string): Node {
  let div = document.createElement("div");
  let img = document.createElement("img");
  let a = document.createElement("a");

  div.className = "tabs";
  img.src = icon;
  a.href = link;

  a.appendChild(img);
  div.appendChild(a);

  return div;
}

function OnSearch(event: MouseEvent) {
  if (searchBar == null) {
    return;
  }
  document.location = GOOGLEURL + searchBar.value.replace(" ", "+");
}

function visPopup(event: MouseEvent) {
  if (popupVisible) {
    popUp?.classList.remove("hidden");
    popupVisible = !popupVisible;
    return;
  }
  popUp?.classList.add("hidden");
  popupVisible = !popupVisible;
}

function addTab(event: MouseEvent) {
  if (
    urlBox?.value === undefined ||
    iconBox?.value === undefined ||
    !urlBox.value.match(URLPATTERN) ||
    !iconBox.value.match(IMAGEPATTERN)
  ) {
    document.getElementById("error")?.classList.remove("hidden");
    return;
  }
  let url = urlBox.value;
  let icon = iconBox.value;
  data.push({[url] : icon});
  tabgroup?.appendChild(tab("https://" + url, icon));
}

function getJson(url: string) {

}
exports = null;