console.log("Create-Web-To-Lead-Form");
function beforesubmit(){
    let outputdate=document.querySelector(".outputdate");
    let inpputdate=document.querySelector(".inputdate");
    console.log(inpputdate.value);//string--> date(en_IN)
    console.log(outputdate.value);
    let formatedate=new Date(inpputdate.value).toLocaleDateString("en-IN");
    outputdate.value=formatedate;
}

function timestamp() {
     var response = document.getElementById("g-recaptcha-response");
      if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
     } 
    }
 setInterval(timestamp, 500);