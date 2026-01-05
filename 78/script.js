let messages = ["Initializing Hacking", "Reading your Files", "Password files Detected", "Sending all passwords and personal files to server", "Cleaning up"];
let randomDelay = () => {
    return Math.floor(1000 + (Math.random() * (7000-1000)));
}
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const showMessage = async (messages) => {
    const body = document.body;
    while(true){
        for (let msg of messages){
            let containerElement = document.createElement("div");
            let msgElement = document.createElement("span");
            msgElement.innerHTML = msg;
            body.insertAdjacentElement('beforeend', containerElement);
            containerElement.insertAdjacentElement('beforeend', msgElement);
            // let dotInterval = blinkDots(msgElement);
            let dotElement = await blinkDots(msgElement);
            dotElement.innerHTML = "...";
        }
    }
}
const blinkDots = async (msgElement) => {
    const dots = ["",".","..","..."];
    index = 0;
    let dotElement = document.createElement("span");
    msgElement.insertAdjacentElement('afterend', dotElement);
    let dotInterval = setInterval(() => {
        dotElement.innerHTML = dots[index]
        index = (index+1) % dots.length;
    }, 500);
    await sleep(randomDelay());
    clearInterval(dotInterval);
    return dotElement
}
showMessage(messages)