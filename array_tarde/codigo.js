const preenche = (atleta) => {
    const container = document.createElement('div');
    const titulo = document.createElement('h3');
    const imagem = document.createElement('img');
    const descricao = document.createElement('p');
 
    
    titulo.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    descricao.innerHTML = atleta.descricao;

    container.appendChild(titulo);
    container.appendChild(imagem);
    container.appendChild(descricao);

    document.body.appendChild(container);
}
/*
atletas.forEach((atleta) => {preenche(atleta)});

preenche(atletas[0]);

preenche(atletas[1]);
*/
/*
let cont_1 = 0

while (cont_1 < atletas.length){
    preenche(atletas[cont_1]);
    console.log(cont_1, atletas[cont_1].nome);
    cont_1 ++;
}
*/

for (let indice =  ;indece < atletas.length ;indice -- ){
    preenche(atletas[indice])
    console.log(indice,'loop for');
}

