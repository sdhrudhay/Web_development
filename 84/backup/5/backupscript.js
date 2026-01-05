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
    }
    else {
        triggerElement.style.display = 'none';
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
async function showTrendingSongs() {
    for (const item of trendingSongs) {
        trendingCards.insertAdjacentHTML("beforeend", `
            <div class="card">
                    <div class="song-image">
                        <img src="images/${item['image']}" alt="">
                        <button type="button" class="play-button play" data-audio="${item['song']}" data-index="${item['index']}"><img src="assests/play.svg" alt="" class="play-logo"></button>
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
        <div class="library-card" data-index="${librarySong['index']}">
                    <div class="library-song-details">
                        <img src="images/${librarySong['image']}" alt="" class="library-song-image">
                        <div class="library-song-title-description">
                            <div class="library-song-title">${librarySong['title']}</div>
                            <div class="library-song-description">${librarySong['description']}</div>
                        </div>
                    </div>
                    <div class="library-control">
                        <button class="library-play-button play" data-audio="${librarySong['song']}" data-index="${librarySong['index']}"><img src="assests/play.svg" alt="" class="library-play-image"></button>
                        <button class="library-song-remove" data-index="${librarySong['index']}"><img src="assests/remove.svg" alt="" class="library-remove-image"></button>
                    </div>
        </div>`)
}
function clickPlayButton() {
    let src = null;
    document.addEventListener("click", (e) => {
        const btn = e.target.closest(".play");
        if (!btn) return;
        src = btn.dataset.audio;
        currentIndex = parseInt(btn.dataset.index);
        if (!src) return;
        if (!audioPlayer.paused) {
            audioPlayer.pause();
        }
        handleSongsLoadAndAddOrRemoveButton(e)
        if (currentSrc === src) {
            audioPlayer.currentTime = 0;
        } else {
            currentSrc = src;
            audioPlayer.src = "songs/" + src;
            audioBarSongImage.src = "images/" + songs[currentIndex]["image"];
            audioBarSongTitle.textContent = songs[currentIndex]["title"];
            audioBarSongDescription.textContent = songs[currentIndex]["description"];
        }
        if (window.innerWidth <= 952) {
            audioPlayerContainer.style.display = "flex";
        }
        else {
            audioPlayerContainer.style.display = "grid";
        }
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
        playPauseImage.src = "assests/pause.svg"
    });
    nextButton.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= songs.length) {
            currentIndex = 0;
        }
        audioPlayer.src = "songs/" + songs[currentIndex]['song'];
        audioBarSongImage.src = "images/" + songs[currentIndex]["image"];
        audioBarSongTitle.textContent = songs[currentIndex]["title"];
        audioBarSongDescription.textContent = songs[currentIndex]["description"];
        audioPlayer.play();
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
        }
        else if (getComputedStyle(audioPlayerContainer).display != 'none') {
            audioPlayerContainer.style.display = 'grid';
        }
    });
    addOrRemoveLibraryButton.addEventListener('click', () => {
        if(!audioBarSongTitle.textContent || !audioBarSongDescription.textContent || !audioBarSongImage.src || !audioPlayer.src)
            return;
        const addSong = {
            "index": librarySongs.length,
            "title": audioBarSongTitle.textContent,
            "description": audioBarSongDescription.textContent,
            "image": audioBarSongImage.src.split("/").pop(),
            "song": audioPlayer.src.split("/").pop()
        }
        librarySongs.push(addSong);
        showLibrarySong(addSong);
    })
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
function handleSongsLoadAndAddOrRemoveButton(e){
    const cardSet = e.target.closest(".card-set");
    if(!cardSet) return;
    const queueId = cardSet.dataset.queue;
    if (queueId !== currentQueueId) {
        if(queueId == 'trending-songs')
        {
            songs = trendingSongs;
            addOrRemoveImage.src = 'assests/add.svg';
        }
        else{
            songs = librarySongs;
            addOrRemoveImage.src = 'assests/remove-audio-bar.svg';
        }
        currentQueueId = queueId;
    }
}
function handleLibrarySongBar(){
    document.addEventListener('click', (e) => {
        const btn = e.target.closest(".library-song-remove");
        console.log(btn);
        if(!btn) return;
        const deleteIndex = btn.dataset.index;
        console.log(deleteIndex);
        const deleteLibrarySong = document.querySelector(`.library-card[data-index="${deleteIndex}"`);
        console.log(deleteLibrarySong);
        if(deleteLibrarySong) deleteLibrarySong.remove();
    })
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
const menuButton = document.getElementById("menu-button");
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
let lastVolume = volumeLevel.value;

volumeLevel.style.setProperty("--percent", `${volumeLevel.value * 100}%`);
progressBar.style.setProperty("--seek", `0%`);

handleLinkMove(mq1010);
handleAudioBarOnResize(mq952);
handleInstallAppMove(mq766);
handleHomeButtonMove(mq591);
handleHomeSignAndLogMove(mq512);
handleSearchBoxAndBrowseOnResize(searchBox);
handleLeftAndMainOnResize();
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