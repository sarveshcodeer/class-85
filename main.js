canvas= document.getElementById("myCanvas") ; 
ctx = canvas.getContext("2d") ; 

rw = 100 ;
rh = 70 ; 

roverx = 20 ; 
rovery = 20;

bimg = "mars.jpg" ; 
rimg = "rover.png" ; 

function add(){

bi = new Image() ; 
bi.onload = uploadbgc ; 
bi.src = bimg ; 
ri = new Image() ; 
ri.onload = uploadir ; 
ri.src = rimg ; 

}

function uploadbgc(){

ctx.drawImage(bi , 0 , 0 , 800 , 400 ) ; 

}


function uploadir(){

ctx.drawImage(ri , roverx , rovery , rw , rh ) ; 
    
    }
    window.addEventListener("keydown" , my_keydown);

    function my_keydown(e) {

    kp = e.keyCode;

    if (kp=="37") {

left();
    }

    if(kp=="38"){

        up();
    }
    
    if(kp=="39")
{

    right();
}

if(kp=="40")

{
    down();
}

    }

function left() {

        if(roverx>0){
roverx = roverx-10;
uploadbgc();
uploadir();
     } }

        function right() {

            if(roverx<700){
    roverx = roverx+10;
    uploadbgc();
    uploadir();
         } }

            function up() {

                if(rovery>0){
        rovery = rovery-10;
        uploadbgc();
        uploadir();
             } }

                function down() {

                    if(rovery<330){
            rovery = rovery+10;
            uploadbgc();
            uploadir();
                 } }



    

