    var imgs=[];
    var slider;
    var imgAtual;
    var maxImg;
    var tmp;
    var tempoTroca;
   



    function preCarregamento(){
         var s=1;
        for(var i=0;i<4;i++){   
         imgs[i]=new Image();
         imgs[i].src="assents/img/s"+s+".png";
         s++;
         }
    }
     function carregarImg(img){
         slider.style.backgroundImage="url('"+imgs[img].src+"')";
         
     }
     function inicia(){
        preCarregamento();
        imgAtual=0;
        maxImg=imgs.length-1;
        slider=document.getElementById("img");
        carregarImg(imgAtual);
        troca();
        tempoTroca=setInterval(troca,3000) ;
    }

    function troca(){
        imgAtual++;
        if(imgAtual>maxImg){
            imgAtual=0;
        }else if(imgAtual<0){
            imgAtual=maxImg;
        }
         carregarImg(imgAtual);
    }
           

    window.addEventListener("load",inicia);
            