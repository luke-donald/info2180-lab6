
window.onload = function() {
    
    var searchButton = document.getElementById("button");
    
    searchButton.onclick = printDefn;
    
};


function printDefn(){
    
    var httpRequest = new XMLHttpRequest();
    var url = "https://info2180-lab6-lukedonald.c9users.io/request.php?q=definition";
    
    httpRequest.onreadystatechange = function(){
        
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                alert(response);
                
            } else {
                alert('There was a problem with the request.');
            }
        }
        
    };
    
    httpRequest.open('GET', url, true);
    httpRequest.send();
    
}