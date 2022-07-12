// Write your JavaScript code here.
// Remember to pay attention to page loading!
// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    takeoffButton = document.getElementById("takeoff");
            let flightstatus = document.getElementById("flightStatus");
            let shuttleflightscreen = document.getElementById("shuttleBackground");
            let shuttleheight = document.getElementById("spaceShuttleHeight");
            takeoffButton.addEventListener('click', function (event) {
                if(confirm("Confirm that the shuttle is ready for takeoff.")) {
                    flightstatus.innerHTML = "Shuttle in flight.";
                    shuttleflightscreen.style.backgroundColor = "blue";
                    shuttleheight.innerHTML = '10000';
                }
            });
                landButton = document.getElementById("landing");
                landButton.addEventListener('click', () => {
                    if(confirm("The shuttle is landing. Landing gear engaged.")) {
                    flightstatus.innerHTML = "The shuttle has landed.";
                    shuttleflightscreen.style.backgroundColor = "green";
                    shuttleheight.innerHTML = '0';
                    }
                })
                abortButton = document.getElementById("missionAbort");
                abortButton.addEventListener('click', () => {
                    if(confirm("Confirm that you want to abort the mission.")) {
                    flightstatus.innerHTML = "Mission aborted.";
                    shuttleflightscreen.style.backgroundColor = "green";
                    shuttleheight.innerHTML = '0';
                    }
                })
                upButton = document.getElementById("up");
                leftButton = document.getElementById("left");
                rightButton = document.getElementById("right");
                downButton = document.getElementById("down");
                rocketIcon = document.getElementById("rocket");
                rocketIcon.style.left = "0px";
                rocketIcon.style.top = "0px";
                rocketIcon.style.position = "relative";
                let move = 10;
                upButton.addEventListener('click', () => {
                 rocketIcon.style.top =  parseInt(rocketIcon.style.top) - move + "px";
                 shuttleheight.innerHTML = parseInt(shuttleheight.innerHTML) + 10000;
                 //console.log("going up");
                })
                leftButton.addEventListener('click', () => {
                    rocketIcon.style.left =  parseInt(rocketIcon.style.left) - move + "px";
                   })
                   rightButton.addEventListener('click', () => {
                    rocketIcon.style.left =  parseInt(rocketIcon.style.left) + move + "px";
                   })
                   downButton.addEventListener('click', () => {
                    rocketIcon.style.top =  parseInt(rocketIcon.style.top) + move + "px";
                    shuttleheight.innerHTML = parseInt(shuttleheight.innerHTML) - 10000;
                   })
            
        }
        window.addEventListener("load", init);
