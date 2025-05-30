const calc = document.getElementById("calculate");
const result = document.getElementById("result");
calc.addEventListener('click',()=>{
    const a = document.getElementById("number1").value;
    const b = document.getElementById("number2").value;
    let o = document.getElementById("operation").value;
    let chall = document.getElementById("challenge");
    try{
        const para = document.createElement("p");
        let n1 = Number(a);
        let n2 = Number(b);
        console.log(`hi ${n1}`);
        if(a=="" || b==""){
            result.textContent = "Inputs cannot be left blank";
        }
        else if (isNaN(n1) || isNaN(n2)) {
            throw new Error("Input is not a valid number.");
        }
        else if(o=="Addition"){
            let r = n1+n2;
            console.log("addition");
            result.textContent = `${n1} + ${n2} = ${r}`;
            para.textContent = `${n1} + ${n2} = ${r}`;
            chall.appendChild(para);
        }
        else if(o=="Subtraction"){
            let r = n1-n2;
            result.textContent = `${n1} - ${n2} = ${r}`;
            para.textContent = `${n1} - ${n2} = ${r}`;
            chall.appendChild(para);
        }
        else if(o=="Multiply"){
            let r = n1*n2;
            result.textContent = `${n1} * ${n2} = ${r}`;
            para.textContent = `${n1} * ${n2} = ${r}`;
            chall.appendChild(para);
        }
        else if(o=="Divide"){
            if(n2==0){
                result.textContent = "Division by zero is not allowed";
                
            }
            else{
                let r = n1/n2;
                result.textContent = `${n1} / ${n2} = ${r}`;
                para.textContent = `${n1} / ${n2} = ${r}`;
                chall.appendChild(para);
            }
        }
    }
    catch(error){
        result.textContent="Please enter valid numbers";
    }
});
let clr = document.getElementById("clear");
clr.addEventListener("click",()=>{
    let a = document.getElementById("number1");
    let b = document.getElementById("number2");
    a.value = "";
    b.value = "";
})