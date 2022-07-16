// Audio sources:
let inTheEnd = "https://songszilla.net/siteuploads/files/sfd3/1461/In%20The%20End%20Best%20Song%20Download(SongsZilla.Net).mp3";


const defaultMusic = inTheEnd;
// Getting the DOMs:
let projectsPane = document.getElementById("projects-pane");
let audioChannel = document.getElementById("audio-channel");
audioChannel.setAttribute("src", defaultMusic);
let audioButton = document.getElementById("audio-toggle-button");
       
















function toggleMainMusic() {
    console.log(audioChannel.volume)
    if (audioChannel.volume == 1) {
        audioChannel.volume = 0 ;
        audioButton.style.border = "3px solid red";
    } else if (audioChannel.volume == 0) {
        audioChannel.volume = 1;
        audioButton.style.border = "3px solid green";
    }
}



    // Event listeners:

    audioButton.addEventListener("click", event => {
        toggleMainMusic();
    })
  
  
  
      document.getElementById("projects-button")
          .addEventListener("click", ev => {
              projectsPane.style.visibility = "visible";
          })
  
          document.getElementById("rc-projects-rc-button")
          .addEventListener("click", ev => {
              window.location.assign("https://randomcraft.org");
          })
  
  
          document.getElementById("projects-pane-close-button")
          .addEventListener("click", ev => {
              const closeButton = document.getElementById("projects-pane-close-button")
              projectsPane.style.visibility = "hidden";
          })
  
  