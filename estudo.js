let tabuada = 2;
let nome = "tamires";

function escrever(){
document.write(tabuada +" x 1 ="+(tabuada*1)+"<br>");
document.write(tabuada +" x 2 ="+(tabuada*2)+"<br>");
document.write(tabuada +" x 3  ="+(tabuada*3)+"<br>");
document.write(tabuada +" x 4  ="+(tabuada*4)+"<br>");
document.write(tabuada +" x 5="+(tabuada*5)+"<br>");
document.write(tabuada +" x 6 ="+(tabuada*6)+"<br>");
document.write(tabuada +" x 7 ="+(tabuada*7)+"<br>");
document.write(tabuada +" x 8 ="+(tabuada*8)+"<br>");
document.write(tabuada +" x 9 ="+(tabuada*9)+"<br>");
document.write(tabuada +" x 10 ="+(tabuada*10)+"<br><br>");
document.write("feito por " + nome)



function minhaTabuada(){
for(let i = 1; i <= 9; i++){
document.write(" tabuada do " +i + " <br> ");
    for(let j = 1; j <=10; j++){
document.write(i + " x " + " = "(j*j)+ " <br> ");
 }
document.write("<br>")
}


 function quadrado(){
     for(let i = 16; i <= 20; i++){
         document.write(" 0 quadrado de " + i + " é " + (i*i)+ "<br>")
     }




}
