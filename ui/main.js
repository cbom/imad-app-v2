//Counter code
var button = document.getElementById('counter');

//button.onclick = function () {
    
    //Create the request object 
    //var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    //request.onreadystatechange = function()
    //{
      //  if (request.readyState === XMLHttpRequest.DONE)
        //{
            //Take the action
          //  if(request.status === 200){
            //    var counter = request.responseText;
              //  var span = document.getElementById('count');
            //span.innerHTML = counter.toString();
          //}
        //}
        //Not done yet
      //};
      //Make the request
     // request.open('GET', 'http://cbom.imad.hasura-app.io/counter');
      //request.send(null);
    //};


//submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Make a request to the server and send the name
    
      //Create the request object 
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function()
    {
        if (request.readyState === XMLHttpRequest.DONE)
        {
            //Take the action
            if(request.status === 200){
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0;i< names.length; i++){
                    list += '<li>' + name[i] + '</li>';
                }
                var ui = document.getElementById('namelist');
                ui.innerHTML = list;
        }
    }
        //Not done yet
      };
      //Make the request
      var nameInput = document.getElementById('name');
var name = nameInput.value;
      request.open('GET', 'http://cbom.imad.hasura-app.io/submit-name?name=' + name, true);
      request.send(null);
};