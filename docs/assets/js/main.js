"use strict";function favoritesShows(t){const s=parseInt(t.currentTarget.id),e=favorites.indexOf(shows[s]);let i,a=!1;for(let t=0;t<favorites.length;t++)if(shows[s].id===favorites[t].id){a=!0,i=t;break}!0===a?favorites.splice(i,1):!1===a&&(-1===e?favorites.push(shows[s]):favorites.splice(e,1)),paintShows(),listenShow()}function listenShow(){const t=document.querySelectorAll(".js-show-item");for(const s of t)s.addEventListener("click",favoritesShows);paintFavorites(),setLocalStorage()}function setLocalStorage(){localStorage.setItem("favorites",JSON.stringify(favorites))}function getLocalStorage(){const t=localStorage.getItem("favorites"),s=JSON.parse(t);null!==s&&(favorites=s,paintFavorites())}const btn=document.querySelector(".js--button"),main=document.querySelector(".main"),showsList=document.querySelector(".main__list"),FavList=document.querySelector(".main__fav"),mainList=document.querySelector(".main__lists");let shows=[],favorites=[];function getFetch(){const t=document.querySelector(".js--input").value;console.log(t),fetch("//api.tvmaze.com/search/shows?q="+t).then(t=>t.json()).then(t=>{for(let s=0;s<t.length;s++)shows[s]=t[s].show;paintShows(),listenShow()})}function paintFavorites(){const t=document.querySelector(".main__fav");if(0===favorites.length)t.innerHTML="",mainList.classList.remove("js-main-containerList"),showsList.classList.remove("js-main-showListFav");else if(favorites.length>0){mainList.classList.add("js-main-containerList"),t.classList.add("js-main-showFav"),showsList.classList.add("js-main-showListFav");let s="";for(let t=0;t<favorites.length;t++){let e;s=paintData(s,`<li class='js-fav-item' id="${t}">`),s=paintData(s,`<h2 class="js-fav-name">${favorites[t].name}</h2>`),e=null===favorites[t].image?"https://via.placeholder.com/210x295/ffffff/666666/? text=TV":favorites[t].image.medium,s=paintData(s,`<img class="js-fav-img" src="${e}" alt="${favorites[t].name}" />`),s=paintData(s,"</li>")}t.innerHTML=s}}function paintData(t,s){return t+=s}function getClassShow(t){let s;if(-1===favorites.indexOf(shows[t]))for(const e of favorites){if(shows[t].id===e.id)return s="js-show-item-favorite",s;s=""}else s="js-show-item-favorite";return s}function paintShows(){main.classList.add("js-main-showList");let t="";if(0!==shows.length){for(let s=0;s<shows.length;s++){let e;t=paintData(t,`<li class='js-show-item ${getClassShow(s)}' id="${s}">`),t=paintData(t,`<h2 class="js-show-name">${shows[s].name}</h2>`),e=null===shows[s].image?"https://via.placeholder.com/210x295/666666/ffffff/? text=TV":shows[s].image.medium,t=paintData(t,`<img class="js-show-img" src="${e}" alt="${shows[s].name}" />`),t=paintData(t,"</li>")}showsList.innerHTML=t}else{const t=document.querySelector(".js--input").value;showsList.innerHTML=`No existe ningun resultado con el nombre "${t}"`}}getLocalStorage(),btn.addEventListener("click",getFetch);