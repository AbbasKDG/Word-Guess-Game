
		              
		                  //INITIALIZATION BLOCK
		                  //////////////////////////////////////////////////////////////////////
		                  
		                  var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		                  var Wins=0;
		                  var start=false;
		                  //accepted words in guess
		                  //rejected words in ruledout
                          var guess=[];
                          var positionEmpty=0;
                          var ruledout=[];
                          
		                  
                          var chance=9;
                          
		                  document.getElementById("win").innerHTML=Wins
		                  document.getElementById("chances").innerHTML=chance;
		  
		                  var wordlib=["red","blue","green", "violet", "indigo", "yellow"]
		  
		                  
		                  //Press any key to get started - key listening event to kick off 
		                  
		  
		                 
		                      
		                      
		                      
		                              //Initialization function
		                              function initialize(){
		                                  start=true;
		                                  word=wordlib[Math.floor(Math.random()*(wordlib.length))];
                                          positionEmpty=word.length;
                                          var chance=9;
                                          var chance=9;
                                          ruledout.length = 0
                                          document.getElementById("rulout").innerHTML=ruledout;
                                          
                                          document.getElementById("chances").innerHTML=chance;
                                          
                                          
                                      console.log(word);
                                      console.log("positions empty= "+positionEmpty);
		                              //print blanks
		                              
		                              wordblanks=[]
		                              wordblanks.length=word.length;
		                              //document.getElementById("guess").innerHTML=[word.length,wordblanks.length];
		                               //wordblank - array of blanks of .length
		                              for (var i=0;i<wordblanks.length;i++){
		                              wordblanks[i]="_";
		                              document.getElementById("guess").innerHTML=wordblanks
		                              };
		                              
		                              }
		                              
		                               
		  
		                         
		                         
		                            //MAIN function
		                            function key(letter){
		                                incr=0;
		                                
		                                
		                                
		                              for (var a=0;a<26;a++){ //alphabet check
		                                  
		                                  if(alphabet[a]===letter){
		                                      console.log(letter+" is an alphabet") //alphabet confirmed
		                                      console.log(word); 
		                                      //validate(letter, word, wordblanks);
		                                      for(var r=0; r<26; r++){ 
		                                          if(letter==word[r]){
                                                     wordblanks[r]=letter;
                                                     
                                                     positionEmpty--
                                                     console.log("positions empty= "+positionEmpty);
		                                             // add increment so that win condition reached when its equal to word.length
		                                             
                                                     document.getElementById("guess").innerHTML=wordblanks; 
                                                     if (positionEmpty==0){
                                                           Wins++
                                                           round= Wins+1
                                                           document.getElementById("win").innerHTML=Wins
                                                           alert("YOU WON")
                                                           alert("The ANSWER was "+ word)
                                                           alert("Round " + round)
                                                           
                                                           initialize();
                                                           

                                                           
                                                        }
		                                             //WIn condition that doesnt work - trouble passing variables
		                                             if (word==wordblanks){  
                                                        console.log("blanks "+wordblanks+" words "+word);
                                                        
		                                                  Wins=Wins+1;
		                                                  document.getElementById("win").innerHTML=Wins;
                                                      }  
                                                      /////////////////////////////////////////////////////////////
		                                              
		                                              
		                                                        //USE UP GUESSES TILL LOSS CONDITION IS MET
		                                          }else if (letter !== word[r]){ //ruleout letter 
		                                                     incr++ 
		                                                          if (incr==26){   //ruleout all letters
		                                                              chance--
		                                                              document.getElementById("chances").innerHTML=chance
                                                                      document.getElementById("rulout").innerHTML=ruledout;
                                                                      ruledout.push(letter);
		                                                                  if (chance<1){
                                                                              alert("YOU LOST THIS ONE") 
                                                                              alert("The ANSWER was "+ word)
                                                                              alert("START FROM SCRATCH")
                                                                              location.reload();     // RELOAD GAME

		                                                                  }

		                                                              
		  
		                                                              
		                                                          }
		                                                              
		                                                             ///   
		  
		                                          }
		                                                  
		                                             
		  
		  
		                                          } 
		                                      }
		  
		                                      
		  
		                                      
		                                      
		                                  } 
		                                  
		                              }
		  
		                            
		  
		  
		                           
		                              
		                            
		                               
		                           
		  
		  
		  
		                           document.onkeyup = function START (event) {
		                               console.log("keypress")
		                           if (!start){
		                              initialize();
		                           } else  {
		                               
		                               key(event.key);
		                              
		                           }
		                          }
		                              
		                           
		  
		                              
		                    
		  
		                      
		  
		                      
		  
		                      
		  
		                      
		                     
		                  
		                     
		  
		  
		                  // END INTITIALIZATION BLOCK
		                  //////////////////////////////////////////////////////////////////////
		                  
		                  
		                  //KEYSTROKE VALIDATION
		                  //////////////////////////////////////////////////////////////////////
		                      
		                  /* 
		                  guess function(){
		                    takes the keystroke - if its a letter- and compares it to all the letters in the word.
		                    if accepted than - word[i] = wordblanks[i]  (and an increment) - print 
		                    if loop completes without update -letter repeated or not?-  (and no increment) - 1 chance lost - letter assigned to ruledout - 
		                  }
		  
		                  */
		  
		  
		                  
		  
		                  /*Input function(){
		                      keystroke initializes the program
		                      if program has begun it is used to guess
		                      
		                  } */
		  
		  
		                      
		                  
		                      
		                      
		   
		  
		                   
		                   
		                      
		                           
		  
		  
		  
		  
