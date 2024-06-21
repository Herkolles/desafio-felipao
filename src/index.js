var nomeDoHeroi = "Herculles";
var XP = 8.000;

if(XP < 1.000 ) {
    console.log("O Herói de nome: " + nomeDoHeroi + " Está no nível de : " + "Ferro ");
}else if(XP >= 1.001 || XP <= 2.000){
    console.log("O Herói de nome: " + nomeDoHeroi + " Está no nível de : " + "Bronze ");
}else if(XP >= 2.001 || XP <= 5.000){
    console.log("O Herói de nome: " + nomeDoHeroi + " Está no nível de : " + "Prata ");
}else if(XP >= 6.001 || XP <= 7.000){
    console.log("O Herói de nome: " + nomeDoHeroi + " Está no nível de : " + "Ouro ");
}else if(XP >= 7.001 || XP <= 8.000){
    console.log("O Herói de nome: " + nomeDoHeroi + " Está no nível de : " + "Platina ");
}else if(XP >= 8.001 || XP <= 9.000){
    console.log("O Herói de nome: " + nomeDoHeroi + " Está no nível de : " + "Ascendente ");
}else if(XP >= 9.001 || XP <= 10.000){
    console.log("O Herói de nome: " + nomeDoHeroi + " Está no nível de : " + "Imortal ");
}else if(XP >= 10.001){
    console.log("O Herói de nome: " + nomeDoHeroi + " Está no nível de : " + "Radiante ");
}else("O Herói de nome: " + nomeDoHeroi + "Não tem um nímel relevante");

