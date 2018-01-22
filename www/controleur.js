class Controler {
    constructor(){
        this.player1 = new Personnage("ryu", 90, 145); 
        this.player2 = new Personnage("ken", -120, 1100);
        this.viewG = new View("G");
        this.viewD = new View("D"); 

        let _this = this;

        let start = document.querySelector("#start-game");
        start.addEventListener("click",starte);
        function starte(){
        _this.startgame(_this.player1, _this.player2, _this.viewD);
        }



        let elemt = document.getElementById("blockG");
        let posG = elemt.style.left;  //
        posG = posG.substring(0, posG.length - 2); //recuperer la position du Dom du joueur gauche
        let elem = document.getElementById("blockD");
        let posD = elem.style.left;  //
        posD = posD.substring(0, posD.length - 2);  // recuperer la position du Dom du joueur droit
        
        let action1 = document.querySelector("#gauche");
        window.addEventListener( 'keydown',checkKeyPressG1,false);                    
        action1.addEventListener( 'click', clickG1);            
            function checkKeyPressG1(key1){
                if ((key1.keyCode == "90")) {
                    console.log("ok");       //code buton Z    
                    if(typeof _this.viewG.encours=='undefined'  ){                               
                        let block_G = document.querySelector("#blockG");
                        block_G.style.width="0px";                        
                        block_G.style.top="480";
                    // block_G.style.zIndex="2";       
                        _this.attack1(_this.player1, _this.player2, _this.viewG);
                        if(_this.player2.position<100+_this.player1.position){
                        _this.player1.attack(_this.player2);
                    setTimeout(function(){_this.reaction(_this.player1, _this.player2, _this.viewG);},250);//time avant reaction apres declenchement de l'action attack
                 
                        console.log("ici la sante du Dkkkkkk"+_this.player2.sante);
                        let nivD= document.querySelector("#niveauD1");
                        nivD.style.width=`${_this.player2.sante}%`;
                        
                        }
                    }
                }
            };
            function clickG1(){
                if(typeof _this.viewG.encours=='undefined'  ){                               
                    let block_G = document.querySelector("#blockG");
                    block_G.style.width="0px";                        
                    block_G.style.top="480";
                   // block_G.style.zIndex="2";       
                    _this.attack1(_this.player1, _this.player2, _this.viewG);
                    
                    
                    if(_this.player2.position<100+_this.player1.position){
                    _this.player1.attack(_this.player2);
                    setTimeout(function(){_this.reaction(_this.player1, _this.player2, _this.viewG);},250);//time avant reaction apres declenchement de l'action attack
                    
                    console.log("ici la sante du Dkkkkkk"+_this.player2.sante);
                    let nivD= document.querySelector("#niveauD1");
                    nivD.style.width=`${_this.player2.sante}%`;

                    
                    }
                }

            };/////////


        let action2 = document.querySelector("#attaqueG2");                    
        window.addEventListener( 'keydown',checkKeyPressG2,false);                           
        action2.addEventListener( 'click', clickG2);
            function clickG2(){
                console.log("The 'a' letter key has been pressed.");
                
                 if(typeof _this.viewG.encours=='undefined'){
                     let block_G = document.querySelector("#blockG");
                     block_G.style.width="0px";                        
                     block_G.style.top="480";                           
                     _this.attack2(_this.player1, _this.player2, _this.viewG);
                     
                     console.log("ici la sante du D"+_this.player2.sante);
                     if(_this.player2.position<100+_this.player1.position){
                         _this.player1.attack(_this.player2);
                         console.log("ici la sante du D"+_this.player2.sante);
                         let nivD= document.querySelector("#niveauD1");
                         nivD.style.width=`${_this.player2.sante}%`;                        

                     }
                 }
            };
            function checkKeyPressG2(key) {                
                if ((key.keyCode == "83")) {       //code buton S                 
                console.log("The 'a' letter key has been pressed.");                   
                    if(typeof _this.viewG.encours=='undefined'){
                        let block_G = document.querySelector("#blockG");
                        block_G.style.width="0px";                        
                        block_G.style.top="480";                           
                        _this.attack2(_this.player1, _this.player2, _this.viewG);
                        console.log("ici la sante du D"+_this.player2.sante);
                        if(_this.player2.position<100+_this.player1.position){
                            _this.player1.attack(_this.player2);
                            console.log("ici la sante du D"+_this.player2.sante);
                            let nivD= document.querySelector("#niveauD1");
                            nivD.style.width=`${_this.player2.sante}%`;                        
                        }
                    }
                }                
            };               ////

        var action3 = document.querySelector("#avancerG");
        window.addEventListener( 'keydown',butavancerG1,false); 
            action3.addEventListener( 'click', clickG3);
            function butavancerG1(key){
                if ((key.keyCode == "68")) {       //code buton D                 
                    console.log("The 'a' letter key has been pressed."); 
                    console.log("ici ici position D"+_this.player2.position);
                    console.log("ici ici position G"+_this.player1.position);
                    if(_this.player2.position>90+_this.player1.position){
                        if(typeof _this.viewG.encours=='undefined'){
                        _this.player1.position += _this.player1.vitesse;
                        console.log("ici ici"+_this.player1.position);               
                        _this.viewG.marcher(_this.player1.vitesse);
                        let block_G = document.querySelector("#blockG");  
                        let combatant_G = document.querySelector("#combatant_G").src="img/persG/walkf.gif";
                        _this.viewG.encours=1;
                        setTimeout(function(){
                            _this.viewG.encours=undefined;  
                            let combatant_G = document.querySelector("#combatant_G").src="img/persG/stance.gif";
                                },450); 
                        }
                    }
                }
            };





                function clickG3(event){
                console.log("ici ici position D"+_this.player2.position);
                console.log("ici ici position G"+_this.player1.position);
                if(_this.player2.position>90+_this.player1.position){
                    if(typeof _this.viewG.encours=='undefined'){
                    _this.player1.position += _this.player1.vitesse;
                    console.log("ici ici"+_this.player1.position);               
                    _this.viewG.marcher(_this.player1.vitesse);
                    let block_G = document.querySelector("#blockG");  
                    let combatant_G = document.querySelector("#combatant_G").src="img/persG/walkf.gif";
                    _this.viewG.encours=1;
                    setTimeout(function(){
                        _this.viewG.encours=undefined;  
                        let combatant_G = document.querySelector("#combatant_G").src="img/persG/stance.gif";
                            },450); 
                    }
                }
            };
        
            var action4 = document.querySelector("#reculerG");
            window.addEventListener( 'keydown',butreculerG1,false); 
                action4.addEventListener( 'click', clickG4);
                function butreculerG1(key){
                    if ((key.keyCode == "81")) {       //code buton Q                 
                        console.log("The 'a' letter key has been pressed."); 
                        console.log("ici ici position D"+_this.player2.position);
                        console.log("ici ici position G"+_this.player1.position);
                        if(_this.player1.position>90){
                            if(typeof _this.viewG.encours=='undefined'){
                                _this.player1.position -= _this.player1.vitesse;
                                console.log("ici ici"+_this.player1.position);
                                _this.viewG.marcher(-_this.player1.vitesse);//en ajoutant ici le -  il transforme le 90 en -90
                                let block_G = document.querySelector("#blockG");  
                                let combatant_G = document.querySelector("#combatant_G").src="img/persG/walkf.gif";
                                _this.viewG.encours=1;
                                setTimeout(function(){
                                    _this.viewG.encours=undefined;  
                                    let combatant_G = document.querySelector("#combatant_G").src="img/persG/stance.gif";
                                },450); 
                            
                            }
                        }
                    }
                };

                function clickG4(){
                    console.log("ici ici position D"+_this.player2.position);
                    console.log("ici ici position G"+_this.player1.position);
                    if(_this.player1.position>90){
                        if(typeof _this.viewG.encours=='undefined'){
                            _this.player1.position -= _this.player1.vitesse;
                            console.log("ici ici"+_this.player1.position);
                            _this.viewG.marcher(-_this.player1.vitesse);//en ajoutant ici le -  il transforme le 90 en -90
                            let block_G = document.querySelector("#blockG");  
                            let combatant_G = document.querySelector("#combatant_G").src="img/persG/walkf.gif";
                            _this.viewG.encours=1;
                            setTimeout(function(){
                                _this.viewG.encours=undefined;  
                                let combatant_G = document.querySelector("#combatant_G").src="img/persG/stance.gif";
                            },450); 
                        
                        }
                    }

                }

            







//-----------------------------------cote droit------------------------------------------------





        let actionN1 = document.querySelector("#droite");                    
        actionN1.addEventListener( 'click', function(event) {
            if(typeof _this.viewD.encours=='undefined'  ){
                _this.attack1(_this.player2, _this.player1, _this.viewD);
                if(_this.player2.position<100+_this.player1.position){
                    _this.player2.attack(_this.player1);
                    setTimeout(function(){_this.reaction(_this.player1, _this.player2, _this.viewD);},250);//time avant reaction apres declenchement de l'action attack
                 
                    console.log("ici la sante"+_this.player1.sante);
                    let nivD= document.querySelector("#niveauG1");
                    nivD.style.width=`${_this.player1.sante}%`;
                    
                }
            }
        });

        let actionN2 = document.querySelector("#attaqueD2");                    
        actionN2.addEventListener( 'click', function(event) {
            if(typeof _this.viewD.encours=='undefined'  ){
                _this.viewD.attack2(_this.player2, _this.player1, _this.viewD);
                if(_this.player2.position<100+_this.player1.position){
                    _this.player2.attack(_this.player1);
                    console.log("ici la sante"+_this.player1.sante);
                    let nivD= document.querySelector("#niveauG1");
                    nivD.style.width=`${_this.player1.sante}%`;
                    
                }
            }
        });




        var actionN3 = document.querySelector("#avancerD");
        window.addEventListener( 'keydown',butavancerD1,false);
        actionN3.addEventListener( 'click', clickD3);
        function butavancerD1(key){  
            if ((key.keyCode == "37")) {       //code button fleche gauche            
                
                console.log("ici ici position D"+_this.player2.position);
                console.log("ici ici position G"+_this.player1.position);
                if(_this.player2.position>90+_this.player1.position){
                    if(typeof _this.viewD.encours=='undefined'){
                        _this.viewD.marcher(_this.player2.vitesse);
                        _this.player2.position += _this.player2.vitesse;
                        let block_D = document.querySelector("#blockD");  
                        let combatant_D = document.querySelector("#combatant_D").src="img/persD/walkf.gif";
                        _this.viewD.encours=1;
                        setTimeout(function(){
                            _this.viewD.encours=undefined;  
                            let combatant_D = document.querySelector("#combatant_D").src="img/persD/stance.gif";
                        },850);
                    } 
                }
            }
        };
            function clickD3(event){
                console.log("ici ici position D"+_this.player2.position);
                console.log("ici ici position G"+_this.player1.position);
                if(_this.player2.position>90+_this.player1.position){
                    if(typeof _this.viewD.encours=='undefined'){
                        _this.viewD.marcher(_this.player2.vitesse);
                        _this.player2.position += _this.player2.vitesse;
                        let block_D = document.querySelector("#blockD");  
                        let combatant_D = document.querySelector("#combatant_D").src="img/persD/walkf.gif";
                        _this.viewD.encours=1;
                        setTimeout(function(){
                            _this.viewD.encours=undefined;  
                            let combatant_D = document.querySelector("#combatant_D").src="img/persD/stance.gif";
                        },850);
                    } 
                }




            }




        var actionN4 = document.querySelector("#reculerD");        
            actionN4.addEventListener( 'click', function(event) {
                
                console.log("ici ici position D"+_this.player2.position);
                console.log("ici ici position G"+_this.player1.position);
                if(_this.player2.position<1390){
                    if(typeof _this.viewD.encours=='undefined'){
                        _this.player2.position -= _this.player2.vitesse;
                        _this.viewD.marcher(-_this.player2.vitesse);
                        let block_D = document.querySelector("#blockD");  
                        let combatant_D = document.querySelector("#combatant_D").src="img/persD/walkb.gif";
                        _this.viewD.encours=1;
                        setTimeout(function(){
                            _this.viewD.encours=undefined;  
                            let combatant_D = document.querySelector("#combatant_D").src="img/persD/stance.gif";
                        },450);
                
                    }   
                } 
            });





    }
        attack1(player1, player2, view){
        //player1.attack(player2);
        view.attack1();    
        }

        reaction(player1, player2, view){
        view.reaction();
            if(player1.sante<= 0){
                console.log("mort"); //ici lancer l'alert de fin game over 
            }
            if(player2.sante<= 0){
                console.log("mort"); //ici lancer l'alert de fin game over 
            }
           
        
        }

        attack2(player1, player2,view) {
        //player1.attack(player2);
        view.attack2();
        }

        startgame(player1, player2, view){
            view.startgame();
        }

}