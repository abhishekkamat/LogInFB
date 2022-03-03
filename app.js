function windowOpen(){
    pass=getSessionID();
    appID="692002588903233";
    redirectURI="https://www.facebook.com/connect/login_success.html";
    OGURL="https://www.facebook.com/v13.0/dialog/oauth?client_id={"+appID+"}&redirect_uri={"+redirectURI+"}&state={"+pass+"}";
    window.open(OGURL, "Log Into Facebook","width=500, height=500, left=200, top=50");
}

function clickCounter(){
    if(typeof(Storage)!=="undefined"){
        if(sessionStorage.clickcount){
            sessionStorage.clickcount=Number(sessionStorage.clickcount)+1;
        }
        else{
            sessionStorage.clickcount=1;
        }
        document.getElementById("result").innerHTML="You have clicked "+sessionStorage.clickcount+" times in this session.";
    }
    else{
        document.getElementById("result").innerHTML="You dont have session storage";
    }
}
function Pass(){
    sessionID=getSessionID();
    document.getElementById("password").innerHTML="Generated Password= "+sessionID;
}
function getSessionID(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var passwordLength = 12;
 var password = "";

 for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }

   return password;
}
