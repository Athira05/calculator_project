function add()
{
    let a = Number(document.getElementById("firstnum").value);
    let b = Number(document.getElementById("secondnum").value);
    document.getElementById("result").innerText=a+b;
}


function subtract()
{
    let a = Number(document.getElementById("firstnum").value);
    let b = Number(document.getElementById("secondnum").value);
    document.getElementById("result").innerText=a-b;
}

function multiply()
{
    let a = Number(document.getElementById("firstnum").value);
    let b = Number(document.getElementById("secondnum").value);
    document.getElementById("result").innerText=a*b;
}

function divide()
{
    let a = Number(document.getElementById("firstnum").value);
    let b = Number(document.getElementById("secondnum").value);

    if(b==0)
    {
        document.getElementById("result").innerText="Not divisible by 0"
    }
    else
    {
       document.getElementById("result").innerText=a/b; 
    }
    
}

function sqaure()
{
    let a = Number(document.getElementById("firstnum").value);
    document.getElementById("result").innerText=a*a;
}

function cube()
{
    let a = Number(document.getElementById("firstnum").value);
    document.getElementById("result").innerText=a*a*a;
}