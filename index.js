const projectsPane = document.getElementById("projects-pane");
    
  
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