let playlist = [];
let container = document.getElementsByClassName("container")[0];
function calculateViews(views){
    const annotation = ["","K","M","B"];
    let count = 0;
    while(views/1000>=1 && count<annotation.length-1){
        views /= 1000;
        count++;
    }
    return `${views}${annotation[count]}`;
}
function addCard(container, playlist){
    playlist.forEach((video, index) => {
        let cardHtml = 
    `<div class="card">
            <div id="videonumber">
                ${index}
            </div>
            <div class="thumbnail">
                            <img src="${video['thumbnailImageLink']}" alt="Error">
                            <span>${video['duration']}</span>
            </div>
            <div class="videodetails">
                <h2>
                    ${video['title']}
                </h2>
                <div>${video['channelName']} • ${video['views']} views • ${video['months']} months ago</div>
            </div>
    </div>`;
    container.insertAdjacentHTML('beforeend',cardHtml)
    });
}
function createCard(title, channelName, views, months, duration, thumbnailImageLink){
    playlist.push({
        "title" : title,
        "channelName": channelName,
        "views": calculateViews(views),
        "months": months,
        "duration": duration,
        "thumbnailImageLink": thumbnailImageLink
    })
}
createCard("Introduction to Code with Harry || Sigma Web Development #2", "Code with Harry", 560000, 8, "31:22", "https://i.ytimg.com/vi/NvAW-vIHuu0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD8VRdFuyzK5WtgB7UsabxqZM3Bgw")
createCard("🧑🏽‍💻 What REALLY Happens When You Type Localhost?", "Code with Harry", 268000, 7, "9:29", "https://i.ytimg.com/vi/wTl4vEednkQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCeAPX5tti0HNakfW9r3o3_gSV36w")
addCard(container, playlist)