function handleSearchBoxAndBrowseOnClick(triggerElement) {
    if (triggerElement.offsetWidth == 0 && window.innerWidth <= 766) {
        triggerElement.style.width = (window.innerWidth / 766) * 178 + "px";
    }
    else if (triggerElement.offsetWidth == 0 && window.innerWidth <= 1070) {
        triggerElement.style.width = "178px";
    }
    else if (triggerElement.offsetWidth != 0 && window.innerWidth <= 1070 && triggerElement.value.trim() == "") {
        triggerElement.style.width = "0px";
    }
    // else{
    //     triggerElement.style.width = "240px";
    // }
}
function handleSideBarOnClick(triggerElement) {
    if (getComputedStyle(triggerElement).display == 'none') {
        triggerElement.style.display = 'block';
        menuLogo.src = "assests/close.svg";
    }
    else {
        triggerElement.style.display = 'none';
        menuLogo.src = "assests/menu.svg";
    }
}
function handleSearchBoxAndBrowseOnResize(triggerElement) {
    if (window.innerWidth <= 1070 && triggerElement.value.trim() == "" && !searchBoxClosed) {
        triggerElement.style.width = "0px";
        searchBoxClosed = true;
    }
    else if (window.innerWidth <= 766 && triggerElement.offsetWidth != 0) {
        triggerElement.style.width = (window.innerWidth / 766) * 178 + "px";
    }
    else if (window.innerWidth <= 1070 && triggerElement.offsetWidth != 0) {
        triggerElement.style.width = "178px";
    }
    else if (window.innerWidth > 1070) {
        triggerElement.style.width = "240px";
        searchBoxClosed = false;
    }
}
function handleLinkMove(e) {
    if (e.matches) {
        const liPremiumLink = document.createElement("li");
        const liSupportLink = document.createElement("li");
        const liDownloadLink = document.createElement("li");
        liPremiumLink.setAttribute("id", "li-premium-link");
        liSupportLink.setAttribute("id", "li-support-link");
        liDownloadLink.setAttribute("id", "li-download-link");
        premiumLink.insertAdjacentHTML("beforeend", '<img src="assests/link.svg" alt="" class="link-svg">')
        supportLink.insertAdjacentHTML("beforeend", '<img src="assests/link.svg" alt="" class="link-svg">')
        downloadLink.insertAdjacentHTML("beforeend", '<img src="assests/link.svg" alt="" class="link-svg">')
        liPremiumLink.appendChild(premiumLink);
        liSupportLink.appendChild(supportLink);
        liDownloadLink.appendChild(downloadLink);
        sideBar.insertAdjacentElement("beforeend", liPremiumLink);
        sideBar.insertAdjacentElement("beforeend", liSupportLink);
        sideBar.insertAdjacentElement("beforeend", liDownloadLink);
    } else {
        const liPremiumLink = document.getElementById("li-premium-link");
        const liSupportLink = document.getElementById("li-support-link");
        const liDownloadLink = document.getElementById("li-download-link");
        navRight.insertAdjacentElement("afterbegin", downloadLink);
        navRight.insertAdjacentElement("afterbegin", supportLink);
        navRight.insertAdjacentElement("afterbegin", premiumLink);
        document.querySelectorAll(".link-svg").forEach(img => img.remove());;
        if (liPremiumLink && liSupportLink && liDownloadLink) {
            liPremiumLink.remove();
            liSupportLink.remove();
            liDownloadLink.remove();
        }
    }
}
function handleSearchResults(){
    searchBox.addEventListener('input', ()=>{
        const query = searchBox.value.toLowerCase();
        const allAlbums = document.querySelectorAll(".card");
        allAlbums.forEach(item => {
        const text = item.querySelector(".title").textContent.toLowerCase();
        if(text && text.includes(query)){
            item.style.display = "flex";
        }
        else{
            item.style.display = "none";
        }
  });
    });
}
function handleInstallAppMove(e) {
    if (e.matches) {
        const liInstallApp = document.createElement("li");
        liInstallApp.appendChild(installApp);
        sideBar.insertAdjacentElement("beforeend", liInstallApp);
    }
    else {
        signLogButtons.insertAdjacentElement("beforebegin", installApp);
        const emptyList = sideBar.querySelectorAll("li:empty");
        emptyList.forEach(li => li.remove());
    }
}
function handleHomeButtonMove(e) {
    if (e.matches) {
        const liHomeButton = document.createElement("li");
        liHomeButton.appendChild(homeButton);
        liHomeButton.setAttribute("id", "li-home-button");
        homeButton.insertAdjacentHTML("beforeend", '<span id="span-home-button">Home</span>');
        sideBar.insertAdjacentElement("afterbegin", liHomeButton);
    }
    else {
        spotifyLogo.insertAdjacentElement("afterend", homeButton);
        const liHomeButton = document.getElementById("li-home-button");
        if (liHomeButton) {
            document.querySelector("#span-home-button").remove();
            liHomeButton.remove();
        }
    }
}
function handleHomeSignAndLogMove(e) {
    if (e.matches) {
        const liSignLog = document.createElement("li");
        liSignLog.appendChild(signLogButtons);
        sideBar.insertAdjacentElement("beforeend", liSignLog);
    }
    else {
        menuButton.insertAdjacentElement("beforebegin", signLogButtons);
        const emptyList = sideBar.querySelectorAll("li:empty");
        emptyList.forEach(li => li.remove());
    }
}
function handleAudioBarOnResize(e) {
    if (e.matches) {
        audioControl.insertAdjacentElement('afterbegin', songDetails);
        audioControl.insertAdjacentElement('beforeend', audioRight);
        audioRight.insertAdjacentElement('afterbegin', nextButton);
        audioRight.insertAdjacentElement('afterbegin', playButton);
        audioRight.insertAdjacentElement('afterbegin', beforeButton);
    }
    else {
        audioPlayerContainer.insertAdjacentElement('afterbegin', songDetails);
        audioPlayerContainer.insertAdjacentElement('beforeend', audioRight);
        audioControl.insertAdjacentElement('afterbegin', nextButton);
        audioControl.insertAdjacentElement('afterbegin', playButton);
        audioControl.insertAdjacentElement('afterbegin', beforeButton);
    }
}
function handleSideBarOnResize() {
    if (window.innerWidth >= 1010 && (getComputedStyle(sideBarContainer).display == 'block')) {
        sideBarContainer.style.display = 'none';
    }
}
function handleLeftArrowButton() {
    if (window.innerWidth > 1210 && getComputedStyle(mainBar).display != 'none') {
        leftBar.style.display = "none";
        mainBar.style.width = "100%";
        mainButtonText.style.display = "inline";
    }
    else if (window.innerWidth > 1210) {
        mainBar.style.display = "flex";
        leftBar.style.width = "25%";
        mainBar.style.width = "75%";
        leftBarButtonText.style.display = "none";
    }
    else if (window.innerWidth <= 1210) {
        leftBar.style.display = "none";
        mainBar.style.display = "flex";
        mainBar.style.width = "100%";
        mainButtonText.style.display = "inline";
        leftBarButtonText.style.display = "none";
    }
}
function handleRightArrowButton() {
    if (window.innerWidth > 1210 && getComputedStyle(leftBar).display != 'none') {
        mainBar.style.display = "none";
        leftBar.style.width = "100%";
        leftBarButtonText.style.display = "inline";
    }
    else if (window.innerWidth > 1210) {
        leftBar.style.display = "flex";
        leftBar.style.width = "25%";
        mainBar.style.width = "75%";
        mainButtonText.style.display = "none";
    }
    else if (window.innerWidth <= 1210) {
        mainBar.style.display = "none";
        leftBar.style.display = "flex";
        leftBar.style.width = "100%";
        leftBarButtonText.style.display = "inline";
        mainButtonText.style.display = "none";
    }
}
function handleLeftAndMainOnResize() {
    if (window.innerWidth <= 1210 && getComputedStyle(leftBar).display != 'none' && getComputedStyle(mainBar).display != 'none') {
        leftBar.style.display = "none";
        mainBar.style.width = "100%";
        mainButtonText.style.display = "inline";
    }
}

function clickSearchBar(listenerElement, triggerElement) {
    listenerElement.addEventListener('click', () => handleSearchBoxAndBrowseOnClick(triggerElement));
}
function clickMenuButton(listenerElement, triggerElement) {
    listenerElement.addEventListener('click', () => handleSideBarOnClick(triggerElement));
}
function clickArrowButton() {
    leftArrowButton.addEventListener('click', handleLeftArrowButton);
    rightArrowButton.addEventListener('click', handleRightArrowButton);
    trendingLeftArrow.addEventListener("click", () => {
        trendingCards.scrollBy({ left: -(trendingCards.clientWidth / 2), behavior: "smooth" });
    });
    trendingRightArrow.addEventListener("click", () => {
        trendingCards.scrollBy({ left: (trendingCards.clientWidth / 2), behavior: "smooth" });
    });
    albumLeftArrow.addEventListener("click", () => {
        albumCards.scrollBy({ left: -(albumCards.clientWidth / 2), behavior: "smooth" });
    });
    albumRightArrow.addEventListener("click", () => {
        albumCards.scrollBy({ left: (albumCards.clientWidth / 2), behavior: "smooth" });
    });
}
function closeSideMenuBar() {
    window.addEventListener('resize', handleSideBarOnResize);
}
function resizeSearchBar(triggerElement) {
    window.addEventListener('resize', () => handleSearchBoxAndBrowseOnResize(triggerElement));
}
function changeLocation() {
    mq1010.addEventListener("change", handleLinkMove);
    mq952.addEventListener('change', handleAudioBarOnResize);
    mq766.addEventListener("change", handleInstallAppMove);
    mq591.addEventListener("change", handleHomeButtonMove);
    mq512.addEventListener("change", handleHomeSignAndLogMove);
}
function resizeLeftAndMain() {
    window.addEventListener("resize", handleLeftAndMainOnResize);
}
async function loadJson(path) {
    const response = await fetch(path);
    const responseData = await response.json();
    return responseData;
}
async function loadTrendingJson() {
    trendingSongs = await loadJson('./data/trending.json');
    await showTrendingSongs();
}
async function loadAlbumJson(){
    albums = await loadJson('./data/albums.json');
    await showAlbums();
}
async function showTrendingSongs() {
    for (const item of trendingSongs) {
        trendingCards.insertAdjacentHTML("beforeend", `
            <div class="card">
                    <div class="song-image">
                        <img src="images/${item['image']}" alt="">
                        <button type="button" class="play-button play" data-audio="${item['song']}"><img src="assests/play.svg" alt="" class="play-logo"></button>
                </div>
                <h4 class="title">${item['title']}</h4>
                <p class="description">${item['description']}</p>
            </div>`);
    }
}
async function showAlbums() {
    for (const item of albums) {
        albumCards.insertAdjacentHTML("beforeend", `
                <div class="card album" data-audio="${item['album']}">
                    <div class="song-image">
                        <img src="images/${item['image']}" alt="">
                        <button type="button" class="play-button play" data-audio="${item['album']}"><img src="assests/play.svg" alt="" class="play-logo"></button>
                    </div>
                    <h4 class="title">${item['title']}</h4>
                    <p class="description">${item['description']}</p>
                </div>`);
    }
}
async function showLibrarySongs(){
    for(const item of librarySongs){
        await showLibrarySong(item);
    }
}
async function showLibrarySong(librarySong) {
    libraryCards.insertAdjacentHTML("beforeend", `
        <div class="library-card" data-audio="${librarySong['song']}">
                    <div class="library-song-details">
                        <img src="images/${librarySong['image']}" alt="" class="library-song-image">
                        <div class="library-song-title-description">
                            <div class="library-song-title">${librarySong['title']}</div>
                            <div class="library-song-description">${librarySong['description']}</div>
                        </div>
                    </div>
                    <div class="library-control">
                        <button class="library-play-button play" data-audio="${librarySong['song']}"><img src="assests/play.svg" alt="" class="library-play-image"></button>
                        <button class="library-song-remove" data-audio="${librarySong['song']}"><img src="assests/remove.svg" alt="" class="library-remove-image"></button>
                    </div>
        </div>`);
}
function clickPlayButton() {
    let src = null;
    document.addEventListener("click", async (e) => {
        const btn = e.target.closest(".play");
        if (!btn) return;
        e.stopImmediatePropagation();
        src = btn.dataset.audio;
        if (!src) return;
        currentIndex = await handleSongsLoadAndAddOrRemoveButton(e,src);
        if (!audioPlayer.paused) {
            audioPlayer.pause();
        }
        if (currentSrc === src) {
            audioPlayer.currentTime = 0;
        } else {
            currentSrc = src;
            audioPlayer.src = "songs/" + songs[currentIndex]["song"];
            audioBarSongImage.src = "images/" + songs[currentIndex]["image"];
            audioBarSongTitle.textContent = songs[currentIndex]["title"];
            audioBarSongDescription.textContent = songs[currentIndex]["description"];
        }
        if (window.innerWidth <= 952 && getComputedStyle(audioPlayerContainer).display=='none') {
            audioPlayerContainer.style.display = "flex";
            requestAnimationFrame(() => {
                updateAudioBarOffset();
            });
        }
        else if (getComputedStyle(audioPlayerContainer).display=='none') {
            audioPlayerContainer.style.display = "grid";
            requestAnimationFrame(() => {
                updateAudioBarOffset();
            });
        }
        playPauseImage.src = "assests/pause.svg";
        audioPlayer.play();
    });
}
function handleAudioBar() {
    audioPlayer.addEventListener("ended", () => {
        if (songs.length === 0) return;
        currentIndex++;
        if (currentIndex >= songs.length) {
            currentIndex = 0;
        }
        audioPlayer.src = "songs/" + songs[currentIndex]['song'];
        audioBarSongImage.src = "images/" + songs[currentIndex]["image"];
        audioBarSongTitle.textContent = songs[currentIndex]["title"];
        audioBarSongDescription.textContent = songs[currentIndex]["description"];
        audioPlayer.play();
    });
    playButton.addEventListener("click", () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseImage.src = "assests/pause.svg";
        }
        else {
            audioPlayer.pause();
            playPauseImage.src = "assests/play.svg";
        }
    });
    beforeButton.addEventListener("click", () => {
        if (songs.length === 0) return;
        if (currentIndex == 0) {
            currentIndex = songs.length - 1;
        }
        else {
            currentIndex--;
        }
        audioPlayer.src = "songs/" + songs[currentIndex]['song'];
        audioBarSongImage.src = "images/" + songs[currentIndex]["image"];
        audioBarSongTitle.textContent = songs[currentIndex]["title"];
        audioBarSongDescription.textContent = songs[currentIndex]["description"];
        audioPlayer.play();
        currentSrc = songs[currentIndex]['song'];
        playPauseImage.src = "assests/pause.svg"
    });
    nextButton.addEventListener("click", () => {
        if (songs.length === 0) return;
        currentIndex++;
        if (currentIndex >= songs.length) {
            currentIndex = 0;
        }
        audioPlayer.src = "songs/" + songs[currentIndex]['song'];
        audioBarSongImage.src = "images/" + songs[currentIndex]["image"];
        audioBarSongTitle.textContent = songs[currentIndex]["title"];
        audioBarSongDescription.textContent = songs[currentIndex]["description"];
        audioPlayer.play();
        currentSrc = songs[currentIndex]['song'];
        playPauseImage.src = "assests/pause.svg"
    });
    audioPlayer.addEventListener("timeupdate", () => {
        progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
        progressBar.style.setProperty("--seek", `${progressBar.value}%`);
        currentSongTime.textContent = formatTime(audioPlayer.currentTime);
        songDuration.textContent = formatTime(audioPlayer.duration);
    });
    progressBar.addEventListener("input", () => {
        audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
    });
    volumeLevel.addEventListener("input", () => {
        audioPlayer.volume = volumeLevel.value;
        if (volumeLevel.value > 0) {
            audioPlayer.muted = false;
            lastVolume = volumeLevel.value;
            volumeImage.src = "assests/volume.svg";
        }
        else if (volumeLevel.value == 0) {
            audioPlayer.muted = true;
            volumeImage.src = "assests/mute.svg";
        }
        volumeLevel.style.setProperty("--percent", `${volumeLevel.value * 100}%`);
    });
    window.addEventListener('resize', () => {
        if (getComputedStyle(audioPlayerContainer).display != 'none' && window.innerWidth <= 952) {
            audioPlayerContainer.style.display = 'flex';
            updateAudioBarOffset();
        }
        else if (getComputedStyle(audioPlayerContainer).display != 'none') {
            audioPlayerContainer.style.display = 'grid';
            updateAudioBarOffset();
        }
    });
    addOrRemoveLibraryButton.addEventListener('click', () => {
        addOrRemove();
    });
}
function formatTime(time) {
    if (isNaN(time)) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
}
function handleMuteOrUnmute() {
    volumeButton.addEventListener('click', () => {
        if (audioPlayer.muted || audioPlayer.volume === 0) {
            audioPlayer.muted = false;
            volumeImage.src = "assests/volume.svg";
            volumeLevel.value = lastVolume;
            audioPlayer.volume = volumeLevel.value;
        }
        else {
            audioPlayer.muted = true;
            volumeImage.src = "assests/mute.svg";
            volumeLevel.value = 0;
        }
        volumeLevel.style.setProperty("--percent", `${volumeLevel.value * 100}%`);
    });
}
async function handleSongsLoadAndAddOrRemoveButton(e, src){
    const cardSet = e.target.closest(".card-set");
    if(!cardSet) return;
    const queueId = cardSet.dataset.queue;
    if (queueId !== currentQueueId) {
        if(queueId == 'trending-songs')
        {
            songs = trendingSongs;
            addOrRemoveImage.src = 'assests/add.svg';
            addOrRemove = addLibrarySong;
        }
        else if(queueId == 'library-songs'){
            songs = librarySongs;
            addOrRemoveImage.src = 'assests/remove-audio-bar.svg';
            addOrRemove = removeLibrarySong;
        }
        currentQueueId = queueId;
    }
    if(queueId == 'single-album-songs'){
        songs = singleAlbumSongs;
        addOrRemoveImage.src = 'assests/add.svg';
        addOrRemove = addLibrarySong;
    }
    if(queueId == 'album-songs'){
        songs = await loadJson(`./data/${src}.json`);
        addOrRemoveImage.src = 'assests/add.svg';
        addOrRemove = addLibrarySong;
        return 0;
    }
    else{
        return songs.findIndex(item => item.song === src);
    }
}
function handleLibrarySongBar(){
    document.addEventListener('click', (e) => {
        const btn = e.target.closest(".library-song-remove");
        if(!btn) return;
        const deleteSong = btn.dataset.audio;
        const deleteIndex = librarySongs.findIndex(item => item.song === deleteSong);
        const deleteLibrarySong = document.querySelector(`.library-card[data-audio="${deleteSong}"`);
        if(deleteLibrarySong) 
        {
            deleteLibrarySong.remove();
            librarySongs.splice(deleteIndex,1);
            if(currentQueueId === "library-songs"){
                songs = librarySongs;
                if(currentIndex >= deleteIndex && currentIndex!=0){
                    currentIndex--;
                }
            }
        }
    });
}
function updateAudioBarOffset() {
    if (getComputedStyle(audioPlayerContainer).display === "none") {
        document.documentElement.style.setProperty("--audio-bar-height", "0px");
        return;
    }

    const height = audioPlayerContainer.offsetHeight;
    document.documentElement.style.setProperty(
        "--audio-bar-height",
        `${height}px`
    );
}
function loadAlbumOnClick(){
    document.addEventListener("click", async (e) =>{
        let btn = e.target.closest(".album");
        if(!btn) return;
        let ap_album = btn.dataset.audio;
        let ap_index = albums.findIndex(item => item.album === ap_album);
        singleAlbumSongs = await loadJson(`./data/${ap_album}.json`);
        mainContainer.innerHTML = 
        `<div id="single-album-container" class="card-set" data-queue="album-songs">
            <div id="single-album"> 
                <img id="single-album-image" src="images/${albums[ap_index]['image']}">
                <div id="album-details">
                    <p id="album-album-details">Album</p>
                    <h1 id="title-album-details">${albums[ap_index]['title']}</h1>
                    <h4 id="description-album-details">${albums[ap_index]['description']}</h4>
                </div>
            </div>
            <div id="album-controls">
                <button type="button" class="album-play-button play" data-audio="${ap_album}"><img src="assests/play.svg" alt="" class="play-logo"></button>
                <button id="album-add-button" data-audio="${ap_album}"><img src="assests/add.svg" alt="" id="album-add-image"></button>
            </div>
            <table id="single-album-songs-table">
                <thead class="single-album-table-header">
                    <tr class="single-album-table-header-row">
                        <td class="table-header-first">#</td>
                        <td>Title</td>
                        <td class="table-header-last"><img src="./assests/duration.svg"</td>
                    </tr>
                </thead>
                <tbody id="single-album-songs-table-body" class="card-set" data-queue="single-album-songs">
                </tbody>
            </table>
        </div>`;
        albumAddButton = document.getElementById("album-add-button");
        handleSingleAlbumControls();
        const singleAlbumSongsTableBody = document.getElementById("single-album-songs-table-body");
        for(let i=0; i<singleAlbumSongs.length; i++){
            const durationSeconds = await getSongDuration(`./songs/${singleAlbumSongs[i]['song']}`);
            const duration = formatTime(durationSeconds);
            singleAlbumSongsTableBody.insertAdjacentHTML("beforeend",
                `<tr class="album-single-song play" data-audio="${singleAlbumSongs[i]['song']}">
                    <td class="album-song-no">${i+1}</td>
                    <td>
                        <div class="album-song-title-and-description">
                            <p class="album-song-title">${singleAlbumSongs[i]['title']}</p>
                            <p class="album-song-description">${singleAlbumSongs[i]['description']}</p>
                        </div>
                    </td>
                    <td class="album-song-duration">${duration}</td>
                </tr>`);
        }
    });
}
function handleSingleAlbumControls(){
    albumAddButton.addEventListener('click', () => {
        for(item of singleAlbumSongs){
            librarySongs.push(item);
            showLibrarySong(item);
        }
    });
}
function getSongDuration(url) {
  return new Promise((resolve, reject) => {
    const audio = new Audio();
    audio.preload = "metadata";
    audio.src = url;

    audio.onloadedmetadata = () => {
      resolve(audio.duration);
    };

    audio.onerror = reject;
  });
}
const spotifyLogo = document.getElementById("spotify-logo");
const searchButton = document.getElementById("search-button");
const searchBox = document.getElementById("search-box");
const premiumLink = document.getElementById("premium-link");
const supportLink = document.getElementById("support-link");
const downloadLink = document.getElementById("download-link");
const navRight = document.getElementById("nav-right");
const navLeft = document.getElementById("nav-left");
const sideBar = document.getElementById("list-items-side-bar");
const installApp = document.getElementById("install-app-link");
const homeButton = document.getElementById("home-button");
const signLogButtons = document.getElementById("sign-log");
const sideBarContainer = document.getElementById("side-bar");
const container = document.getElementById("container");
const mainContainer = document.getElementById("maincontainer");
const menuButton = document.getElementById("menu-button");
const menuLogo = document.getElementById("menu-logo");
const leftArrowButton = document.getElementById("leftbar-button");
const rightArrowButton = document.getElementById("main-button");
const leftBar = document.getElementById("left");
const mainBar = document.getElementById("main");
const leftBarButtonText = document.getElementById("leftbar-button-text");
const mainButtonText = document.getElementById("main-button-text");
const trendingCards = document.getElementById("trending-cards");
const trendingLeftArrow = document.getElementById("trending-left-arrow");
const trendingRightArrow = document.getElementById("trending-right-arrow");
const alltrendingCards = document.querySelectorAll(".card");
const audioPlayerContainer = document.getElementById('audio-player-container');
const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play-pause-button");
const playPauseImage = document.getElementById("play-pause-image");
const beforeButton = document.getElementById("before-song-button");
const nextButton = document.getElementById("next-song-button");
const progressBar = document.getElementById("progress-bar");
const currentSongTime = document.getElementById("currentTime");
const songDuration = document.getElementById("duration");
const volumeLevel = document.getElementById("volume-bar");
const audioBarSongImage = document.getElementById("song-details-image");
const audioBarSongTitle = document.getElementById("song-details-title");
const audioBarSongDescription = document.getElementById("song-details-description");
const volumeButton = document.getElementById("volume-button");
const volumeImage = document.getElementById("volume-image");
const songDetails = document.getElementById("song-details");
const audioControl = document.getElementById("song-control");
const audioRight = document.getElementById("audio-right");
const addOrRemoveLibraryButton = document.getElementById("add-or-remove-library-button");
const libraryCards = document.getElementById('library-cards');
const libraryPlayButton = document.getElementById('library-play-button');
const addOrRemoveImage = document.getElementById('add-or-remove-image');
const albumLeftArrow = document.getElementById("album-left-arrow");
const albumRightArrow = document.getElementById("album-right-arrow");
const albumCards = document.getElementById("album-cards");
let albumAddButton;

const mq1010 = window.matchMedia("(max-width: 1010px)");
const mq952 = window.matchMedia("(max-width: 952px)");
const mq766 = window.matchMedia("(max-width: 766px)");
const mq591 = window.matchMedia("(max-width: 591px)");
const mq512 = window.matchMedia("(max-width: 512px)");

let searchBoxClosed = false;
let currentSrc = null;
let currentIndex = -1;
let currentQueueId = null;
let songs = [];
let librarySongs = [];
let trendingSongs = [];
let albums = [];
let singleAlbumSongs = [];
let lastVolume = volumeLevel.value;
let addOrRemove = null;

volumeLevel.style.setProperty("--percent", `${volumeLevel.value * 100}%`);
progressBar.style.setProperty("--seek", `0%`);

const addLibrarySong = () => {
    if(!audioBarSongTitle.textContent || !audioBarSongDescription.textContent || !audioBarSongImage.src || !audioPlayer.src)
        return;
    const addSong = {
        "title": audioBarSongTitle.textContent,
        "description": audioBarSongDescription.textContent,
        "image": audioBarSongImage.src.split("/").pop(),
        "song": audioPlayer.src.split("/").pop()
    }
    if(librarySongs.findIndex(item => item.song == audioPlayer.src.split("/").pop()) !== -1) 
        return;
    librarySongs.push(addSong);
    showLibrarySong(addSong);
}

const removeLibrarySong = () => {
    libraryIndex = librarySongs.findIndex(item => item.title == audioBarSongTitle.textContent)
    if(libraryIndex !== -1){
        const deleteLibrarySong = document.querySelector(`.library-card[data-audio="${songs[libraryIndex]['song']}"]`);
        if(deleteLibrarySong) 
        {
            deleteLibrarySong.remove();
            librarySongs.splice(libraryIndex,1);
            if(currentQueueId == 'library-songs'){
                currentIndex--;
            }
        }
    }
}

handleLinkMove(mq1010);
handleAudioBarOnResize(mq952);
handleInstallAppMove(mq766);
handleHomeButtonMove(mq591);
handleHomeSignAndLogMove(mq512);
handleSearchBoxAndBrowseOnResize(searchBox);
handleLeftAndMainOnResize();
handleSearchResults();
clickSearchBar(searchButton, searchBox);
clickMenuButton(menuButton, sideBarContainer);
clickArrowButton();
resizeSearchBar(searchBox);
resizeLeftAndMain();
closeSideMenuBar();
changeLocation();
loadTrendingJson();
showLibrarySongs(librarySongs);
handleAudioBar();
handleMuteOrUnmute();
clickPlayButton();
handleLibrarySongBar();
loadAlbumJson();
loadAlbumOnClick();