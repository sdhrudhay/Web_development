function handleSearchBoxAndBrowseOnClick(triggerElement){
    if (triggerElement.offsetWidth==0 && window.innerWidth<=766){
        triggerElement.style.width = (window.innerWidth/766)*178 + "px";
    }
    else if(triggerElement.offsetWidth==0 && window.innerWidth<=1070){
        triggerElement.style.width = "178px";
    } 
    else if(triggerElement.offsetWidth!=0 && window.innerWidth<=1070 && triggerElement.value.trim()==""){
        triggerElement.style.width = "0px";
    }
    // else{
    //     triggerElement.style.width = "240px";
    // }
}
function handleSideBarOnClick(triggerElement){
    if (getComputedStyle(triggerElement).display=='none'){
        triggerElement.style.display='block';
    }
    else{
        triggerElement.style.display='none';
    }
}
function handleSearchBoxAndBrowseOnResize(triggerElement){
    if(window.innerWidth<=1070 && triggerElement.value.trim()=="" && !searchBoxClosed){
        triggerElement.style.width = "0px";
        searchBoxClosed = true;
    }
    else if(window.innerWidth<=766 && triggerElement.offsetWidth!=0){
        triggerElement.style.width = (window.innerWidth/766)*178 + "px";
    }
    else if(window.innerWidth<=1070 && triggerElement.offsetWidth!=0){
        triggerElement.style.width = "178px";
    }
    else if(window.innerWidth>1070){
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
        premiumLink.insertAdjacentHTML("beforeend",'<img src="link.svg" alt="" class="link-svg">')
        supportLink.insertAdjacentHTML("beforeend",'<img src="link.svg" alt="" class="link-svg">')
        downloadLink.insertAdjacentHTML("beforeend",'<img src="link.svg" alt="" class="link-svg">')
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
        if(liPremiumLink && liSupportLink && liDownloadLink){
            liPremiumLink.remove();
            liSupportLink.remove();
            liDownloadLink.remove();
        }
    }
}
function handleInstallAppMove(e){
    if(e.matches){
        const liInstallApp = document.createElement("li");
        liInstallApp.appendChild(installApp);
        sideBar.insertAdjacentElement("beforeend", liInstallApp);
    }
    else{
        signLogButtons.insertAdjacentElement("beforebegin", installApp);
        const emptyList = sideBar.querySelectorAll("li:empty");
        emptyList.forEach(li => li.remove());
    }
}
function handleHomeButtonMove(e){
    if(e.matches){
        const liHomeButton = document.createElement("li");
        liHomeButton.appendChild(homeButton);
        liHomeButton.setAttribute("id","li-home-button");
        homeButton.insertAdjacentHTML("beforeend",'<span id="span-home-button">Home</span>');
        sideBar.insertAdjacentElement("afterbegin", liHomeButton);
    }
    else{
        spotifyLogo.insertAdjacentElement("afterend", homeButton);
        const liHomeButton = document.getElementById("li-home-button");
        if (liHomeButton){
            document.querySelector("#span-home-button").remove();
            liHomeButton.remove();
        }
    }
}
function handleHomeSignAndLogMove(e){
    if(e.matches){
        const liSignLog = document.createElement("li");
        liSignLog.appendChild(signLogButtons);
        sideBar.insertAdjacentElement("beforeend", liSignLog);
    }
    else{
        menuButton.insertAdjacentElement("beforebegin", signLogButtons);
        const emptyList = sideBar.querySelectorAll("li:empty");
        emptyList.forEach(li => li.remove());
    }
}
function handleSideBarOnResize(){
    if(window.innerWidth>=1010 && (getComputedStyle(sideBarContainer).display=='block')){
        sideBarContainer.style.display = 'none';
    }
}
function handleLeftArrowButton(){
    if(window.innerWidth>766 && getComputedStyle(mainBar).display!='none'){
        leftBar.style.display="none";
        mainBar.style.width = "100%";
        mainButtonText.style.display = "inline";
    }
    else if(window.innerWidth>766){
        mainBar.style.display="flex";
        leftBar.style.width = "25%";
        mainBar.style.width = "75%";
        leftBarButtonText.style.display = "none";
    }
    else if(window.innerWidth<=766){
        leftBar.style.display = "none";
        mainBar.style.display = "flex";
        mainBar.style.width = "100%";
        mainButtonText.style.display = "inline";
        leftBarButtonText.style.display = "none";
    }
}
function handleRightArrowButton(){
    if(window.innerWidth>766 && getComputedStyle(leftBar).display!='none'){
        mainBar.style.display="none";
        leftBar.style.width = "100%";
        leftBarButtonText.style.display = "inline";
    }
    else if(window.innerWidth>766){
        leftBar.style.display="flex";
        leftBar.style.width = "25%";
        mainBar.style.width = "75%";
        mainButtonText.style.display = "none";
    }
    else if(window.innerWidth<=766){
        mainBar.style.display = "none";
        leftBar.style.display = "flex";
        leftBar.style.width = "100%";
        leftBarButtonText.style.display = "inline";
        mainButtonText.style.display = "none";
    }
}
function handleLeftAndMainOnResize(){
    if(window.innerWidth<=766 && getComputedStyle(leftBar).display!='none' && getComputedStyle(mainBar).display!='none'){
        leftBar.style.display = "none";
        mainBar.style.width = "100%";
        mainButtonText.style.display = "inline";
    }
}

function clickSearchBar(listenerElement, triggerElement){
    listenerElement.addEventListener('click', () =>  handleSearchBoxAndBrowseOnClick(triggerElement));
}
function clickMenuButton(listenerElement, triggerElement){
    listenerElement.addEventListener('click', () =>  handleSideBarOnClick(triggerElement));
}
function clickArrowButton(){
    leftArrowButton.addEventListener('click', handleLeftArrowButton);
    rightArrowButton.addEventListener('click', handleRightArrowButton);
    trendingLeftArrow.addEventListener("click", () => {
        trendingCards.scrollBy({ left: -(trendingCards.clientWidth/2), behavior: "smooth" });
    });
    trendingRightArrow.addEventListener("click", () => {
        trendingCards.scrollBy({ left: (trendingCards.clientWidth/2), behavior: "smooth" });
    });
}
function closeSideMenuBar(){
    window.addEventListener('resize', handleSideBarOnResize);
}
function resizeSearchBar(triggerElement){
    window.addEventListener('resize', () =>  handleSearchBoxAndBrowseOnResize(triggerElement));
}
function changeLocation(){
    mq1010.addEventListener("change", handleLinkMove);
    mq766.addEventListener("change", handleInstallAppMove);
    mq591.addEventListener("change", handleHomeButtonMove);
    mq512.addEventListener("change", handleHomeSignAndLogMove);
}
function resizeLeftAndMain(){
    window.addEventListener("resize", handleLeftAndMainOnResize);
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

const mq1010 = window.matchMedia("(max-width: 1010px)");
const mq766 = window.matchMedia("(max-width: 766px)");
const mq591 = window.matchMedia("(max-width: 591px)");
const mq512 = window.matchMedia("(max-width: 512px)");

let searchBoxClosed = false;

handleLinkMove(mq1010);
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