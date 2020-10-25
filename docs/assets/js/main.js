"use strict";function favoritesShows(t){const e=parseInt(t.currentTarget.id),s=favorites.indexOf(shows[e]);let o,a=!1;for(let t=0;t<favorites.length;t++)if(shows[e].id===favorites[t].id){a=!0,o=t;break}!0===a?favorites.splice(o,1):!1===a&&(-1===s?favorites.push(shows[e]):favorites.splice(s,1)),paintShows(),listenShow()}function listenShow(){const t=document.querySelectorAll(".js-show-item");for(const e of t)e.addEventListener("click",favoritesShows);console.log(favorites),paintFavorites(),setLocalStorage(),listenFavorite()}function favoritesHeartClick(t){const e=t.currentTarget;for(let t=0;t<favorites.length;t++)if(e.classList.contains("heart"+t)){favorites.splice(t,1);break}paintFavorites(),setLocalStorage(),paintShows(),listenShow()}function listenFavorite(){const t=document.querySelectorAll(".heart");for(const e of t)e.addEventListener("click",favoritesHeartClick)}function setLocalStorage(){localStorage.setItem("favorites",JSON.stringify(favorites))}function getLocalStorage(){const t=localStorage.getItem("favorites"),e=JSON.parse(t);null!==e&&(favorites=e,paintFavorites(),listenFavoriteLocal())}function favoritesHeartClickLocal(t){const e=t.currentTarget;for(let t=0;t<favorites.length;t++)if(e.classList.contains("heart"+t)){favorites.splice(t,1);break}paintFavorites(),setLocalStorage(),listenFavoriteLocal()}function listenFavoriteLocal(){const t=document.querySelectorAll(".heart");for(const e of t)e.addEventListener("click",favoritesHeartClickLocal)}const btn=document.querySelector(".js--button"),main=document.querySelector(".main"),showsList=document.querySelector(".main__list"),FavList=document.querySelector(".main__fav"),mainList=document.querySelector(".main__lists");let shows=[],favorites=[];function getFetch(){const t=document.querySelector(".js--input").value;console.log(t),fetch("//api.tvmaze.com/search/shows?q="+t).then(t=>t.json()).then(t=>{shows=[];for(let e=0;e<t.length;e++)shows[e]=t[e].show;paintShows(),listenShow()})}function paintFavorites(){const t=document.querySelector(".main__fav");if(0===favorites.length)t.innerHTML="",mainList.classList.remove("js-main-containerList"),showsList.classList.remove("js-main-showListFav");else if(favorites.length>0){mainList.classList.add("js-main-containerList"),t.classList.add("js-main-showFav"),showsList.classList.add("js-main-showListFav");let e="";for(let t=0;t<favorites.length;t++){let s;e=paintData(e,`<li class='js-fav-item' id="${t}">`),e=paintData(e,`<h2 class="js-fav-name">${favorites[t].name} <span class="heart heart${t}">❤</span></h2>`),s=null===favorites[t].image?"https://via.placeholder.com/210x295/ffffff/666666/? text=TV":favorites[t].image.medium,e=paintData(e,`<img class="js-fav-img" src="${s}" alt="${favorites[t].name}" />`),e=paintData(e,"</li>")}t.innerHTML=e}}function paintData(t,e){return t+=e}function getClassShow(t){let e;if(-1===favorites.indexOf(shows[t]))for(const s of favorites){if(shows[t].id===s.id)return e="js-show-item-favorite",e;e=""}else e="js-show-item-favorite";return e}function paintShows(){main.classList.add("js-main-showList");let t="";if(0!==shows.length){console.log("holi2");for(let e=0;e<shows.length;e++){let s;t=paintData(t,`<li class='js-show-item ${getClassShow(e)}' id="${e}">`),t=paintData(t,`<h2 class="js-show-name">${shows[e].name}</h2>`),s=null===shows[e].image?"https://via.placeholder.com/210x295/666666/ffffff/? text=TV":shows[e].image.medium,t=paintData(t,`<img class="js-show-img" src="${s}" alt="${shows[e].name}" />`),t=paintData(t,"</li>")}showsList.innerHTML=t}else{console.log("holi");const t=document.querySelector(".js--input").value;showsList.innerHTML=`No existe ningun resultado con el nombre "${t}"`}}getLocalStorage(),btn.addEventListener("click",getFetch);