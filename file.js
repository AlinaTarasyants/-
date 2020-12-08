javascript: (function() {    
    document.addEventListener('mouseover', Show);    
    document.addEventListener('mouseout', ShowNormal);    
    document.addEventListener('keydown', StopWork);    
    let target;    
    
    function Hide(evt) {        
        if (evt.keyCode === 72) {           
             target.hidden = true; } }   

              function Show(evt) {        
                  evt.target.style.background = 'red';     
                     target = evt.target;        
                     document.addEventListener('keydown', Hide); }   
                     
                     function ShowNormal(evt) {       
                          evt.target.style.background = ''; }    

                          function StopWork(evt) {        
                              if (evt.keyCode === 83) {           
                                   target.style.background = '';         
                                      document.removeEventListener('mouseover', Show);           
                                       document.removeEventListener('mouseout', ShowNormal);           
                                        document.removeEventListener('keydown', Hide);  } }})()

                                        