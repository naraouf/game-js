class View  {
    constructor(side) {
        this.side = side;
        this.encours= undefined; 
    } 
      
    
    attack1(){
        let _this = this;
        let perso = document.querySelector("#combatant_" + this.side);
        let block = document.querySelector("#block" + this.side);
        perso.src="img/pers"+ this.side +"/mp.gif";  
        perso.style.paddingLeft="0px";
        block.style.zIndex="2";                 
        _this.encours= 1; 
        if(_this.side == "D"){
            var time = 250;
        }else{
            time = 500;
        };    
        setTimeout(function() {
            perso.src="img/pers"+ _this.side +"/stance.gif";
            block.style.zIndex="1";
            if(_this.side == "D"){
                perso.style.paddingLeft="90px";                        
            }
            
            _this.encours= undefined;
        }, time);
    }  
    
    


    attack2(){
        let perso = document.querySelector("#combatant_" + this.side);
        let block = document.querySelector("#block" + this.side);      
        perso.src="img/pers"+ this.side +"/lk.gif"; 
        perso.style.paddingLeft="0px";
        block.style.zIndex="2";           
        let _this = this;        
        _this.encours= 1;
        if(_this.side == "D"){
            var time1 = 250;
        }else{
            time1 = 390;
        };      
        setTimeout(function() {
            perso.src="img/pers"+ _this.side +"/stance.gif";
            if(_this.side == "D"){
                perso.style.paddingLeft="90px";                        
            }
            block.style.zIndex="1";
            _this.encours= undefined;
        }, time1);
    } 

    reaction(){
        let _this = this;
        console.log(_this.side);
        
        if( _this.side=="G"){
            console.log("ok");
            var inverse = "D"
        }else if (_this.side == "D"){
            console.log("not ok");
            var inverse = "G";
            
        }
        console.log(inverse);
        let perso = document.querySelector("#combatant_" + inverse);
        let block = document.querySelector("#block" + inverse);      
        perso.src="img/pers"+ inverse +"/standing.gif"; 
        if(_this.side == "G"){
        perso.style.paddingLeft="0px";
        console.log("ehoiehoeho");
        }
        if(_this.side == "D"){
            
            console.log("side D");
            }
        //block.style.zIndex="2";           
                
        _this.encours= 1;
        if(inverse == "D"){
            var time1 = 420; //temps de crouching du joueur D
        }else{
            var time1 = 390; // temps de crouching du joueur G
        };      
        setTimeout(function() {
            perso.src="img/pers"+ inverse +"/stance.gif";
            if(_this.side == "G"){
                perso.style.paddingLeft="90px";                        
            }
            block.style.zIndex="1";
            _this.encours= undefined;
        }, time1);




    }

    




    marcher(distance){

        let elemt = document.getElementById("block" + this.side);
        let pos = elemt.style.left;  //
        pos = pos.substring(0, pos.length - 2); // pour recuperer la position actuelle dans le dom
        let z = Number(pos) +Number(distance);        
        let myInterval = setInterval(function() {
            if (pos == z) {                
                clearInterval(myInterval);
            } else if (distance < 0) {
                pos-=1; 
                //console.log(pos);
               // console.log(z);
            } else if (distance > 0) {
                pos++;
            }
            //console.log(distance);
           elemt.style.left = pos+"px";
           

           
        }, 0);// vitesse du deplacement par nombre de frame crees
    // console.log("block" + this.side+"pos du view"+pos);
}

startgame(){
let select= document.querySelector("#body1");
select.style.transition="all 2s linear" ;
select.style.display="none";
let select2= document.querySelector("#body2");
select2.style.transition="all 2s linear" ;
select2.style.display="block";
}

 
            
            
            
            
            }

            // function  ajoute() {
            //     document.querySelector("#sec").value=parseInt(document.querySelector("#sec").value)-1;
            //     setTimeout('ajoute()',1000);
            //     };
            //     ajoute();