
function paresDecrecente(numero) {
    let i = numero;
    while(i >= 0) {
        if(i % 2 == 0)
            console.log(i);
        i--;
    }
}

paresDecrecente(10);