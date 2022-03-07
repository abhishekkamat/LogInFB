pass=getSessionID();
appID="692002588903233";
redirectURI="https://abhishekkamat.github.io/LogInFB/redirect.html";
function windowOpen(){
    OGURL="https://www.facebook.com/v13.0/dialog/oauth?client_id="+appID+"&redirect_uri="+redirectURI+"&state="+pass;
    window.open(OGURL, "Log Into Facebook","width=500, height=500, left=200, top=50");
}

function getAccessToken(){
    notCode=window.location.href;
    code=notCode.slice(59);
    secret="8475706848c91218749a358ea6344aa3";
    goTo="https://graph.facebook.com/v13.0/oauth/access_token?client_id="+appID+"&redirect_uri="+redirectURI+"&client_secret="+secret+"&code="+code;
    const token=new XMLHttpRequest();
    console.log(goTo);
    token.open("GET", goTo);
    token.send();

    token.onload=function(){
        if(token.status===200){
            AccessToken=JSON.parse(token.responseText);
            sessionStorage.setItem("access_token",AccessToken);
            console.log(sessionStorage.getItem("access_token"));
        }
        else if(token.status===404){
            console.log("No Records Found");
        }
    }
    
}

function hashing(string) {
    //set variable hash as 0
    var hash = 0;
    // if the length of the string is 0, return 0
    if (string.length == 0) return hash;
    for (i = 0 ;i<string.length ; i++)
    {
    ch = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + ch;
    hash = hash & hash;
    }
    return hash;
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
