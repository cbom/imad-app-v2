//Counter code
var button = document.getElementById('counter');

button.onclick = function () {
    
    //Create the request object 
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function()
    {
        if (request.readyState === XMLHttpRequest.DONE)
        {
            //Take the action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
            span.innerHTML = counter.toString();
          }
        }
        //Not done yet
      };
      //Make the request
      request.open('GET', 'http://cbom.imad.hasura-app.io/counter');
      request.send(null);
    };
