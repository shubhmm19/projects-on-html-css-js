const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");


const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1");

    data = await response.json()
    
    for (let i= 0; i<1500;i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }
}

getEmoji();


btnEl.addEventListener("click", ()=>{
    const randomNu = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNu].emojiName;
    emojiNameEl.innerText = emoji[randomNu].emojiCode;

})



"https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1"