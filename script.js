
document.getElementById("formsubmit").addEventListener("submit",checkdata);

function checkdata(f){
    const fname = document.getElementById("fname").value;
    const nameexpre = /^[a-zA-Z ]*$/;
    if(nameexpre.test(fname)==false||fname==""){
        f.preventDefault();
        document.getElementById("errfn").innerHTML="*Enter Valid Name.."
    }
    else{
        document.getElementById("errfn").innerHTML=""

    }

    const email = document.getElementById("email").value;
    const emailexpre = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(emailexpre.test(email))
    if(emailexpre.test(email)==false||email==""){
        f.preventDefault();
        document.getElementById("erre").innerHTML="*Enter Valid Email.."
    }
    else{
        document.getElementById("erre").innerHTML=""

    }

    const password = document.getElementById("password").value;
    const passwordexpre = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/;
    if(passwordexpre.test(password)==false){
        f.preventDefault();
        document.getElementById("errp").innerHTML="*Password Must Contain alphabet digit and one special char.."
    }
    else{
        document.getElementById("errp").innerHTML=""

    }


    const numberr = document.getElementById("number").value;
    const numberrexpre = /^[6-9]\d{9}$/;
    if(numberrexpre.test(numberr)==false){
        f.preventDefault();
        document.getElementById("errc").innerHTML="*Enter Valid Contact.."
    }
    else{
        document.getElementById("errc").innerHTML=""

    }

    const checkbox = document.getElementById("checkbox");
    if(!checkbox.checked){
        f.preventDefault();
        document.getElementById("errch").innerHTML="*Tick on Checkbox.."
    }
    else{
        document.getElementById("errch").innerHTML=""

    }



}




