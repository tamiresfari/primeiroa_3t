function calcula(){
    let c = document.getElementById("valor").Value;
    let j = document.getElementById("juros").Value;
    let r = c * (1+ (j/200));
document.write("Resultado: " + r);
}
