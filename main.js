var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
var preloader=document.getElementById("overlay");
var tBody=document.getElementsByTagName('tbody')[0];
var detailBox=document.getElementById("info-content");






var userDivision=document.createElement('div');
    var user=document.createElement('b');
    var userText=document.createTextNode("User selected:");
    user.appendChild(userText);
    var userName=document.createTextNode("Melissa Ingham");
    userDivision.appendChild(user);
    userDivision.appendChild(userName);
    detailBox.appendChild(userDivision);
    
var descriptionDiv=document.createElement('div'); 
    
    var descriptionTag=document.createElement('b');
    var descriptionText=document.createTextNode("Description:");
    descriptionTag.appendChild(descriptionText);
    descriptionDiv.appendChild(descriptionTag);
    
    var textAreaTag=document.createElement("textarea");
    textAreaTag.setAttribute('cols',50);
    textAreaTag.setAttribute('rows', 5);
    textAreaTag.readOnly=true;
    var textAreaText=document.createTextNode("placerat porta fringilla ipsum nec sed non suspendisse convallis sollicitudin fringilla sed vitae velit lectus libero massa curabitur vel mattis libero porta elit ipsum magna placerat suspendisse porta lacus odio vel at");
    textAreaTag.appendChild(textAreaText);
    descriptionDiv.appendChild(textAreaTag);
    detailBox.appendChild(descriptionDiv);
    
    
 
    var addressDiv=document.createElement('div');
    var userAddress=document.createElement('b');
    var addressText=document.createTextNode("Address: ");
    userAddress.appendChild(addressText);
    var adressrequired=document.createTextNode(" 6381 Placerat Ave");
    addressDiv.appendChild(userAddress);
    addressDiv.appendChild(adressrequired);
    detailBox.appendChild(addressDiv);
    
    
    var cityDiv=document.createElement('div');
    var cityAddress=document.createElement('b');
    var cityText=document.createTextNode("City: ");
    cityAddress.appendChild(cityText);
    var cityrequired=document.createTextNode("Baltimore");
    cityDiv.appendChild(cityAddress);
    cityDiv.appendChild(cityrequired);
    detailBox.appendChild(cityDiv);
    
    
    var stateDiv=document.createElement('div');
    var stateAddress=document.createElement('b');
    var stateText=document.createTextNode("State: ");
    stateAddress.appendChild(stateText);
    var staterequired=document.createTextNode("SC");
    stateDiv.appendChild(stateAddress);
    stateDiv.appendChild(staterequired);
    detailBox.appendChild(stateDiv);
    
    
    var zipDiv=document.createElement('div');
    var zipAddress=document.createElement('b');
    var zipText=document.createTextNode("Zip: ");
    zipAddress.appendChild(zipText);
    var ziprequired=document.createTextNode(" 83892");
    zipDiv.appendChild(zipAddress);
    zipDiv.appendChild(ziprequired);
    detailBox.appendChild(zipDiv);
    console.log(detailBox);
 

var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, true);
xhttp.send();
xhttp.onreadystatechange = function () { 
  if(xhttp.readyState<4){
    preloader.style.display="block";
  }
  else if (xhttp.readyState === 4) {
   preloader.style.display="none";
     var res = JSON.parse(xhttp.responseText); 
     var i=0;
     for (var i = 0; i < res.length; i++) {
         var resData=res[i];
          
            var createdRowCard=createRowCard(resData);
            var inputsearch=document.getElementById("search-box");
            tBody.appendChild(createdRowCard);
          };
           
            inputsearch.addEventListener('keyup',function(){
              for(let i=0;i<res.length;i++){
                var m=res[i];
                
              var filter=inputsearch.value.toUpperCase();
              
             var output= m.firstName.toUpperCase();
           
            var row=document.getElementsByClassName("data-row");
         
                  if(output.indexOf(filter)>-1){
                 row[i].style.display="";
               }
                  else{
                      row[i].style.display="none";
                  }
              }
              
          
          });
            




}
}



  function createRowCard(resData){
   var rowDiv=document.createElement('tr');
   rowDiv.classList.add("data-row");

  rowDiv.id=resData.id;
   var dataId=document.createElement('td');
   dataId.classList.add('column1');
   var idText=document.createTextNode(resData.id);
   dataId.appendChild(idText);
   rowDiv.appendChild(dataId);

   var firstName=document.createElement('td');
   firstName.classList.add('column2');
   var nameText=document.createTextNode(resData.firstName);
   firstName.appendChild(nameText);
   rowDiv.appendChild(firstName);


   var lastName=document.createElement('td');
   lastName.classList.add('column3');
   var lastnameText=document.createTextNode(resData.lastName);
   lastName.appendChild(lastnameText);
   rowDiv.appendChild(lastName);

   var email=document.createElement('td');
   email.classList.add('column4');
   var emailText=document.createTextNode(resData.email);
   email.appendChild(emailText);
   rowDiv.appendChild(email);

   var contact=document.createElement('td');
   contact.classList.add('column5');
   var contactText=document.createTextNode(resData.phone);
   contact.appendChild(contactText);
   

   rowDiv.appendChild(contact);
    rowDiv.addEventListener('click',function(){
      console.log(rowDiv);
      var abc=document.getElementsByClassName("data-row");
      for (var i = 0; i < abc.length; i++) {
         var current = document.getElementsByClassName("active");
         if (current.length > 0) { 
           current[0].className = current[0].className.replace(" active", "");
         }
         this.className += " active";
       }


             var addressObject={
     "streetAddress": resData.address.streetAddress,
     "city": resData.address.city,
     "state": resData.address.state,
     "zip": resData.address.zip
   }


  
   userDivision.innerHTML="";
   var user=document.createElement('b');
   var userText=document.createTextNode("User selected: ");
   user.appendChild(userText);
   var userName=document.createTextNode(resData.firstName+" "+resData.lastName);
   userDivision.appendChild(user);
   userDivision.appendChild(userName);


 descriptionDiv.innerHTML="";
    
    var descriptionTag=document.createElement('b');
    var descriptionText=document.createTextNode("Description: ");
    descriptionTag.appendChild(descriptionText);
    descriptionDiv.appendChild(descriptionTag);
    
    var textAreaTag=document.createElement("textarea");
    textAreaTag.setAttribute('cols',50);
    textAreaTag.setAttribute('rows', 5);
    textAreaTag.readOnly=true;
    var textAreaText=document.createTextNode(resData.description);
    textAreaTag.appendChild(textAreaText);
    descriptionDiv.appendChild(textAreaTag);


 addressDiv.innerHTML="";

    var userAddress=document.createElement('b');
    var addressText=document.createTextNode("Address: ");
    userAddress.appendChild(addressText);
    var adressrequired=document.createTextNode(addressObject.streetAddress);
    addressDiv.appendChild(userAddress);
    addressDiv.appendChild(adressrequired);



    cityDiv.innerHTML="";
    var cityAddress=document.createElement('b');
    var cityText=document.createTextNode("City: ");
    cityAddress.appendChild(cityText);
    var cityrequired=document.createTextNode(addressObject.city);
    cityDiv.appendChild(cityAddress);
    cityDiv.appendChild(cityrequired);


    
    stateDiv.innerHTML="";
    var stateAddress=document.createElement('b');
    var stateText=document.createTextNode("State: ");
    stateAddress.appendChild(stateText);
    var staterequired=document.createTextNode(addressObject.state);
    stateDiv.appendChild(stateAddress);
    stateDiv.appendChild(staterequired);
    

    
   zipDiv.innerHTML="";
    var zipAddress=document.createElement('b');
    var zipText=document.createTextNode("Zip: ");
    zipAddress.appendChild(zipText);
    var ziprequired=document.createTextNode(addressObject.zip);
    zipDiv.appendChild(zipAddress);
    zipDiv.appendChild(ziprequired);
    console.log(zipDiv);
   })
    return rowDiv;
    }

 
   
  

