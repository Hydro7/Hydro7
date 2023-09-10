
// Default music

// Music player variables
let playing = false;
let played = false;
let playToggleButton = document.getElementById("playtoggle-button");



// Music links (variables)

let musicMap = new Map();
musicMap.set("Royalty", "https://www.lordsent.com.ng/wp-content/uploads/2023/08/Egzod_Maestro_Chives_ft_Neoni_-_Royalty_Lordsent.Com.NG.mp3");
musicMap.set("DANCE - CLMD & Tungevaag", "https://e.top4top.io/m_27916tc1q1.mp3")

// Engine initlization & auto playing
let audio = new Audio();






// Music events
 
  // Play & Pause
playToggleButton.addEventListener("click", (event) => {
    
    if (playing) {
        audio.pause();
        playing = false;
        console.log("Paused...")

        // EDIT BUTTON BACKGROUND TO RED (PAUSED):
        playToggleButton.style.backgroundColor = "rgba(255, 0, 0, .4)";

    } else {
        if (played == false){
            playMusicByName("Royalty")
            playing = true;
            played = true;
        // EDIT BUTTON BACKGROUND TO GREEN (PLAYING)
        playToggleButton.style.backgroundColor = "rgba(0, 255, 0, .4)";
        } else {
            audio.play();
            playing = true;
        // EDIT BUTTON BACKGROUND TO GREEN (PLAYING)
        playToggleButton.style.backgroundColor = "rgba(0, 255, 0, .4)";

        
        }
    }
});





// Functions:

function playMusicByName(musicName) {
    audio = new Audio(musicMap.get(musicName));
    audio.play();
}
































