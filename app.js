pass=getSessionID();
appID="692002588903233";
redirectURI="https://abhishekkamat.github.io/LogInFB/redirect.html";
function windowOpen(){
    OGURL="https://www.facebook.com/v13.0/dialog/oauth?client_id="+appID+"&redirect_uri="+redirectURI+"&state="+pass+"&scope=email,public_profile";
    window.open(OGURL, "Log Into Facebook","width=500, height=500, left=200, top=50");
}

//This function needs to be in the server side code
function getAccessToken(){
    notCode=window.location.href;
    code=notCode.slice(59);
    secret="8475706848c91218749a358ea6344aa3";
    goTo="https://graph.facebook.com/v13.0/oauth/access_token?client_id="+appID+"&redirect_uri="+redirectURI+"&client_secret="+secret+"&code="+code;
    const token=new XMLHttpRequest();
    token.open("GET", goTo);
    token.send();

    token.onload=function(){
        if(token.status===200){
            AccessObj=JSON.parse(token.responseText);
            AccessToken=AccessObj["access_token"];
            sessionStorage.setItem("access_token",AccessToken);
            console.log(sessionStorage.getItem("access_token"));
        }
        else if(token.status===404){
            console.log("No Records Found");
        }
    }
    
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
