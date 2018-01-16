


 
           const formulaire = document.querySelector('#formulaire');
           let player01 = "";
           let player02 = new Personnage ("pc");
           localStorage.setItem('player02',JSON.stringify(player02));

           formulaire.addEventListener('submit', function(event){
               event.preventDefault();
           
               let name = document.querySelector('#name').value;
               
                player01 = new Personnage(name);

                localStorage.setItem('player01',JSON.stringify(player01));

                player02 = new Personnage (name);   
                
                console.log(player01);
                localStorage.setItem('player02',JSON.stringify(player02));

                
                let NiveauG1 = document.querySelector("#niveauG1");
                NiveauG1.style.backgroundColor="red";
                NiveauG1.style.width=`100%`;

                let cachercommande = document.querySelector("#control");
                cachercommande.style.display="flex";
                let bouton = document.querySelector("#sub");
                bouton.style.backgroundColor="";


           });

          

           let gauche = document.querySelector('#gauche');
           let droite = document.querySelector('#droite');
           
           gauche.addEventListener("click", function (event) {
            // let p1= JSON.parse( localStorage.getItem('player01'));
            // let p2= JSON.parse( localStorage.getItem('player02'));
            // console.log(player01);

            attackG();
           


});
droite.addEventListener("click", function (event) {
    // let p1= JSON.parse( localStorage.getItem('player01'));
    // let p2= JSON.parse( localStorage.getItem('player02'));
    // console.log(player01);
if(JSON.parse( localStorage.getItem('player02'))){
    attackD();
}
   
   


});

           function attackG(){

            let p2= JSON.parse( localStorage.getItem('player02'));
            p2.sante-=5;
            localStorage.setItem('player02',JSON.stringify(p2));
            console.log(p2);
            let p1= JSON.parse( localStorage.getItem('player01'));            
                        p1.force-=5;
                        localStorage.setItem('player01',JSON.stringify(p1));
                        console.log(p1);
           }

           function attackD(){
                        
                        let p1= JSON.parse( localStorage.getItem('player01'));
            
                        p1.sante-=5;
                        localStorage.setItem('player01',JSON.stringify(p1));
                        console.log(p1.sante);

                        let p2= JSON.parse( localStorage.getItem('player02'));
                        
                        p2.force-=5;
                        localStorage.setItem('player02',JSON.stringify(p2));
                                    console.log(p2);


                                
                                    var powerG = p1.sante ;
                                    let NiveauG1 = document.querySelector("#niveauG1");
                                    NiveauG1.style.backgroundColor="red";
                                    NiveauG1.style.width=`${powerG}%`;
                                    if(powerG==0){
                                        alert('GAME OVER');
                                        let cachercommande = document.querySelector("#control");
                                        cachercommande.style.display="none";
                                        let bouton = document.querySelector("#sub");
                                        bouton.style.backgroundColor="green";     
                                        

                                        storage.clear();
                                        p2.force= 100;
                                        localStorage.setItem('player01',JSON.stringify(player01));
                                        localStorage.setItem('player02',JSON.stringify(p2));
                                        
                                        
                                    }       


                         }


                        

                       var action1 = document.querySelector("#droite");                     
                    //    var niveauG1 = document.querySelector("#niveauG1");
                       action1.addEventListener( 'click', function() {
                        
                        let block_D = document.querySelector("#blockD");
                        block_D.style.width="0px";                        
                        block_D.style.top="475px";
                       // block_D.style.backgroundColor="red";
                        block_D.style.paddingLeft = "90px";
                        
                        let combatant_D = document.querySelector("#combatant_D").src="img/kim-hover.gif";

                        console.log('ok');

                        // let NiveauG1 = document.querySelector("#niveauG1");
                        // NiveauG1.style.backgroundColor="red";
                        // NiveauG1.style.width=powerG;


                        setTimeout(function(){
                            let block_D = document.querySelector("#blockD");
                            block_D.style.width="0px";
                            block_D.style.top="480px";
                            block_D.style.paddingLeft = "200px";
                        let combatant_D = document.querySelector("#combatant_D").src="img/Kim_sprite.gif";
                        console.log("ont ok"); }, 1000);

                           
                           
                       }              
                    );



                    var action2 = document.querySelector("#attaqueD2");
                    action2.addEventListener( 'click', function() {
                        let block_D = document.querySelector("#blockD");
                        block_D.style.width="0px";                        
                        block_D.style.top="475px";
                       // block_D.style.backgroundColor="red";
                        block_D.style.paddingLeft = "90px";
                        
                        let combatant_D = document.querySelector("#combatant_D").src="img/kim-hover2.gif";

                        console.log('ok');

                        setTimeout(function(){
                            let block_D = document.querySelector("#blockD");
                            block_D.style.width="0px";
                            block_D.style.top="480px";
                            block_D.style.paddingLeft = "200px";
                            
                           // block_D.style.paddingLeft = "90px";
                        let combatant_D = document.querySelector("#combatant_D").src="img/Kim_sprite.gif";
                        console.log("ont ok"); }, 1000);
                        attackD();
                           
                           
                       }              
                    );



                                            if(x){
                                               console.log("definit")
                                            }else{
                                            var x = 1300;  //
                                            var z = 1315;} //
                                            
                                           


                    var action2 = document.querySelector("#avancerD");
                    action2.addEventListener( 'click', function() {
                        var elem = document.getElementById("blockD");   
                        var pos = x;  //
                        var id = setInterval(frame, 10);
                        function frame() {
                          if (pos == z) {
                           // clearInterval(id);
                          } else {
                            pos--; 
                            //elem.style.top = pos + 'px'; 
                            elem.style.left = pos+"px"; 
                            x=pos;
                            console.log(`avancer pos ${pos}`);
                          }
                        }
                        z=z-25;
                        let block_D = document.querySelector("#blockD");
                        block_D.style.width="0px";
                        block_D.style.top="475px"; 
                        block_D.style.paddingLeft = "90px"                                    
                          
                        let combatant_D = document.querySelector("#combatant_D").src="img/ezgif.com-gif-maker(1).gif";
                        console.log('ok');

                        setTimeout(function(){
                            let block_D = document.querySelector("#blockD");
                            block_D.style.width="0px";
                            block_D.style.top="480px";
                            block_D.style.paddingLeft = "200px";

                            
                            
                            
                        let combatant_D = document.querySelector("#combatant_D").src="img/Kim_sprite.gif";
                        console.log("ont ok"); }, 500);
                        
                           
                           
                       }              
                    );















                      var y= z
                      function myreward() {
                        var elem = document.getElementById("blockD");   
                        var pos = x;  //
                        var id = setInterval(frame, 10);
                        function frame() {
                          if (pos == y) {
                           // clearInterval(id);
                          } else {
                            pos--; 
                            //elem.style.top = pos + 'px'; 
                            elem.style.marginRight = pos + 'px'; 
                            x=pos;
                            console.log(`retour pos ${pos}`);
                          }
                        }
                        y=y-25;
                      }












                    //    function gameloop(){
                    //         setTimeout(function(){
                    //             attackG();
                    //             gameloop();
                    //         }, 5000);
                            
                    //    }

                    //    gameloop();

                           
//-------------------------------cote gauche----------------------------------------------------------------------



var actiongl = document.querySelector("#gauche");                     
//    var niveauG1 = document.querySelector("#niveauG1");
   actiongl.addEventListener( 'click', function() {
    
    let block_G = document.querySelector("#blockG");
    block_G.style.width="0px";                        
    block_G.style.top="480";
   // block_D.style.backgroundColor="red";
    //block_D.style.paddingLeft = "90px";
    
    let combatant_D = document.querySelector("#combatant_G").src="img/persR/mp.gif";

    console.log('ok');

    // let NiveauG1 = document.querySelector("#niveauG1");
    // NiveauG1.style.backgroundColor="red";
    // NiveauG1.style.width=powerG;


    setTimeout(function(){
        let block_G = document.querySelector("#blockG");
        block_G.style.width="0px";
        block_G.style.top="480px";
        //block_G.style.paddingLeft = "200px";
    let combatant_G = document.querySelector("#combatant_G").src="img/persR/stance.gif";
    console.log("ont ok"); }, 500);      
       
   }              
);
let encours=false;


var actiongl2 = document.querySelector("#attaqueG2");
actiongl2.addEventListener( 'click', function() {
    if(encours=false){
    let block_G = document.querySelector("#blockG");
    block_G.style.width="0px";                        
    block_G.style.top="480px";
    block_G.style.zIndex="2";

    
   // block_D.style.backgroundColor="red";
    //block_G.style.paddingLeft = "90px";
    
    let combatant_G = document.querySelector("#combatant_G").src="img/persR/lk.gif";

    console.log('ok')
    let encours= true;}
        console.log(encours);
    setTimeout(function(){
        let block_G = document.querySelector("#blockG");
        block_G.style.width="0px";
        block_G.style.top="480px";
        block_G.style.zIndex="1";
        encours= false;
        //block_G.style.paddingLeft = "200px";
        
       // block_D.style.paddingLeft = "90px";
    let combatant_G = document.querySelector("#combatant_G").src="img/persR/stance.gif";
    console.log("ont ok"); }, 400);
    attackG();
       
       
   }              
);
console.log(encours);
var jumpG = document.querySelector("#jumpG");
jumpG.addEventListener( 'click', function() {
    let block_G = document.querySelector("#blockG");
    block_G.style.width="0px";                        
    block_G.style.top="480px";
   // block_D.style.backgroundColor="red";
    //block_G.style.paddingLeft = "90px";
    
    let combatant_G = document.querySelector("#combatant_G").src="img/persR/jump.gif";
    combatant_G.style.blockSize="500px";


    console.log('ok');

    setTimeout(function(){
        let block_G = document.querySelector("#blockG");
        block_G.style.width="0px";
        block_G.style.top="480px";
        //block_G.style.paddingLeft = "200px";
        
       // block_D.style.paddingLeft = "90px";
    let combatant_G = document.querySelector("#combatant_G").src="img/persR/stance.gif";
    console.log("ont ok"); }, 99400);
    attackG();
       
       
   }              
);








if(s){
    console.log("definit")
 }else{
 var s = 145;  //
 var r = 150;} //



var action4 = document.querySelector("#avancerG");
action4.addEventListener( 'click', function() {
    console.log('ok');
    var elemt = document.getElementById("blockG");   
    var tos = s;  //
    var id = setInterval(frame, 5);
    function frame() {
      if (tos == r) {
       // clearInterval(id);
      } else {
        tos++; 
        //elem.style.top = pos + 'px'; 
        elemt.style.left = tos+"px"; 
        s=tos;
        console.log(`avancer pos ${tos}`);
      }
    }
    r=r+90;
    let block_G = document.querySelector("#blockG");
    
     
                                        
      
    let combatant_G = document.querySelector("#combatant_G").src="img/persR/wlakf.gif";
    console.log('ok');

    setTimeout(function(){
        let block_G = document.querySelector("#blockG");
        
        
        

        
        
        
    let combatant_G = document.querySelector("#combatant_G").src="img/persR/stance.gif";
    console.log("ont ok"); },500);
    
       
       
   }              
);



                       



                
       