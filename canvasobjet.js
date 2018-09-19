window.onload = function()

{

    var canvas = document.getElementById('mon_canvas');

        if(!canvas)

        {

            alert("Impossible de récupérer le canvas");

            return;

        }


    var context = canvas.getContext('2d');

        if(!context)

        {

            alert("Impossible de récupérer le context du canvas");

            return;

        }



    //C'est ici que l'on placera tout le code servant à nos dessins.
    
    context.strokeStyle = 'blue';
    
    canvas.addEventListener("mousedown", pointerDown, false);
    canvas.addEventListener("mouseup", pointerUp, false);
    
    canvas.addEventListener("touchstart", fingerDown, false);
    canvas.addEventListener("touchend", fingerUp, false);
   
    
    
         function pointerDown(evt) {
            context.beginPath();
            context.moveTo(evt.offsetX, evt.offsetY);
            canvas.addEventListener("mousemove", paint, false);
        }

        function pointerUp(evt) {
            canvas.removeEventListener("mousemove", paint);
            paint(evt);
        }

        function paint(evt) {
            context.lineTo(evt.offsetX, evt.offsetY);
            context.stroke();
        }
    
    function fingerDown(evt) {
            evt.preventDefault();
            context.beginPath();
            
            posX = evt.touches[0].pageX - evt.touches[0].target.offsetLeft;
            posY = evt.touches[0].pageY -  evt.touches[0].target.offsetTop;
            
            context.moveTo(posX, posY);
            canvas.addEventListener("touchmove", paintTouch, false);
            
        }

        function fingerUp(evt) {
            evt.preventDefault();
            canvas.removeEventListener("touchmove", paintTouch);
            paintTouch(evt);
            
        }

        function paintTouch(evt) {
           evt.preventDefault();
            
            posX = evt.touches[0].pageX - evt.touches[0].target.offsetLeft;
            posY = evt.touches[0].pageY -  evt.touches[0].target.offsetTop;
            
            context.lineTo(posX, posY);
            context.stroke();
        } 

}
 
    canvasCouleur = document.getElementById('mon_canvas');
    canvasCouleur.style.backgroundColor = "#bbc3ce";
    canvasCouleur.style.marginLeft = "100px";  
