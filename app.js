const age = parseInt(prompt("how old are you?"));

if(isNaN(age)){
    console.log("No Number")
}else if(age <= 19){
    console.log("No")
}else if(age >= 19){
    console.log("Yes")
}