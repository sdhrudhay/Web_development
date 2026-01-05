function calculateViews(views){
    const annotation = ["","K","M","B"];
    let count = 0;
    while(views/1000>=1 && count<annotation.length-1){
        views /= 1000;
        count++;
    }
    return `${views}${annotation[count]}`;
}
function createCard(title, channelName, views, months, duration, thumbnailImageLink){
    let container = document.getElementsByClassName("container")[0];
    let cardHtml = 
    `<div class="card">
            <div id="videonumber">
                1
            </div>
            <div class="thumbnail">
                            <img src="${thumbnailImageLink}" alt="Error">
                            <span>${duration}</span>
            </div>
            <div class="videodetails">
                <h2>
                    ${title}
                </h2>
                <div>${channelName} • ${calculateViews(views)} views • ${months} months ago</div>
            </div>
    </div>`;
    container.insertAdjacentHTML('beforeend',cardHtml)
}
createCard("Introduction to Code with Harry || Sigma Web Development #2", "Code with Harry", 560000, 7, "31:22", "https://i.ytimg.com/vi/CYlon2tvywA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC-nO19Cs93sgjQX1fm1II-Cscjxw")
createCard("🧑🏽‍💻 What REALLY Happens When You Type Localhost?","Code with Harry",268000, 7, "9:29", "https://i.ytimg.com/vi/wTl4vEednkQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCeAPX5tti0HNakfW9r3o3_gSV36w")
createCard("🧑🏽‍💻 What REALLY Happens When You Type Localhost?","Code with Harry", 268000, 7, "9:29", "https://i.ytimg.com/vi/wTl4vEednkQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCeAPX5tti0HNakfW9r3o3_gSV36w")