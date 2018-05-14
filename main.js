let boxTop = 200;
let boxLeft = 200;
let pacmanDirection = ""

        'use strict';
        document.addEventListener('keydown', (event) => {
            let keyName = event.key;
            console.log('keydown event\n\n' + 'key: ' + keyName);



            //moves box down 
            if (keyName === "ArrowDown"){
                    boxTop +=10
                    console.log(boxTop) 
                    pacmanDirection = "rotate(90deg)"
            }
            
            //moves box up
            if(keyName === "ArrowUp"){
                boxTop -=10
                pacmanDirection = "rotate(-90deg)"
            }
        
            //moves box right
            if(keyName === "ArrowRight"){
                boxLeft +=10;
                pacmanDirection = "rotate(0)"
            }

            if(keyName === "ArrowLeft"){
                boxLeft -=10;
                pacmanDirection = "rotate(180deg)"
            }





            document.getElementById("box").style.top = boxTop + "px";
            document.getElementById("box").style.left = boxLeft + "px";
            document.getElementById("box").style.transform = pacmanDirection
        });

       

            
        