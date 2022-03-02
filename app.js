function statusCheck(){
    FB.getLoginStatus(function(response) {
       console.log(response);
        });
}