console.log("Create-Web-To-Lead-Form");
function beforesubmit(){
    let outputdate=document.querySelector(".outputdate");
    let inpputdate=document.querySelector(".inputdate");
    console.log(inpputdate.value);//string--> date(en_IN)
    console.log(outputdate.value);
    let formatedate=new Date(inpputdate.value).toLocaleDateString("en-IN");
    outputdate.value=formatedate;
}