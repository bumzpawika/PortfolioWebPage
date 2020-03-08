// window.onload = getText;
// function getText(){
//     var text1 = document.getElementById("text1").value;
//     //alert(text1)
// }
var count=1;
function postFunction(){
    var text1 = document.getElementById("text1").value;
    if(count==1){
        document.getElementById("post1").innerHTML = text1;
    }
    else if(count==2){
        document.getElementById("reply1").innerHTML = text1;
    }
    else if(count==3){
        document.getElementById("reply2").innerHTML = text1;
    }
    if(text1){
        count++;
    }
    
    document.getElementById("text1").value= null;
    
    
}
function clearFunction(){
    document.getElementById("post1").innerHTML = null;
    document.getElementById("reply1").innerHTML = null;
    document.getElementById("reply2").innerHTML = null;
    document.getElementById("text1").innerHTML= null;
    count=1;
}
// window.onload = plusnumber;
// function plusnumber(){
//     var plus=document.getElementById("result1");
//     plus.innerHTML="55"+66;
// }
