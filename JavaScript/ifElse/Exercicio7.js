const readLine = require('prompt-sync')();

function Mes(mes) {
    if (mes <= 0 || mes > 12)
        throw new Error("Mês inválido");
        
    let nomeMes = "";
    if (mes == 1)
        nomeMes = "Janeiro";
    else if (mes == 2)
        nomeMes = "Fevereiro";
    else if (mes == 3)
        nomeMes = "Março";
    else if (mes == 4)
        nomeMes = "Abril";
    else if (mes == 5)
        nomeMes = "Maio";
    else if (mes == 6)
        nomeMes = "Junho";
    else if (mes == 7)
        nomeMes = "Julho";
    else if (mes == 8)
        nomeMes = "Agosto";
    else if (mes == 9)
        nomeMes = "Setembro";
    else if (mes == 10)
        nomeMes = "Outubro";
    else if (mes == 11)
        nomeMes = "Novembro";
    else if (mes == 12)
        nomeMes = "Dezembro";

    return nomeMes;
}


function main() {
    try{
        console.log('Informe um mês (Em formato numérico de 1 à 12)')
        let a = Number(readLine());

        let b = Mes(a);
        console.log(b);
    }catch(err){
        console.log(err.message);
    }
}

main();