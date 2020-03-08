
window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var pass=document.forms["myForm"]["password"];
    var repass=document.forms["myForm"]["repassword"];

    if (document.getElementById("male").checked==false &&
    document.getElementById("female").checked==false &&
    document.getElementById("other").checked==false){
        var checkpass = document.getElementById("errormsg");
        checkpass.innerHTML = "Please fillout your gender";
        return false;
    }

    if(pass.value!=repass.value){
        var checkpass = document.getElementById("errormsg");
        checkpass.innerHTML = "Incorrect Retype Password";
        
        return false;
    }
    else{
        return true;
    }

}

