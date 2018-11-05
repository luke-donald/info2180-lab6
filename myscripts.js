
window.onload = function() {
    
    var searchButton = document.getElementById("button");
    
    searchButton.onclick = printDefn;
    
};


function printDefn(){
    
    var searchWord = document.getElementById("textbox").value;
    var httpRequest = new XMLHttpRequest();
    var url = "https://info2180-lab6-lukedonald.c9users.io/request.php?q=" + searchWord;
    
    httpRequest.onreadystatechange = function(){
        
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                document.getElementById("test").innerHTML = "hello testing output";
                document.getElementById("result").innerHTML = response;
                //alert(response);
                
            } else {
                alert('There was a problem with the request.');
            }
        }
        
    };
    
    httpRequest.open('GET', url, true);
    httpRequest.send();
    
}