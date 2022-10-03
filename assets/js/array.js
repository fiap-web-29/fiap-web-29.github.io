
const carrosDOM = document.querySelector("#carros")

const veiculos = ["Chevrolet", "Ford", "Fiat", "Honda", "Toyota", "Vw", "Hyndai"]

//adicione ao final do array
veiculos.push("BMW");

// adicione no início do array
veiculos.unshift("Audi");

//removendo do início do array
const primeiro = veiculos.shift();
console.log("Removendo o primeiro elemento do array", primeiro);

//removendo do final do array
const ultimo = veiculos.pop();
console.log("Removendo o último elemento do array", ultimo);

// removendo um elemento do array
const posicao = 2;
const removido = veiculos.splice(posicao, 1);

//removendo mais de um elemento do array
const removidos = veiculos.splice(1,2);

//removendo e adicionando elementos
const removidos2 = veiculos.splice(1, 2, "Ferrari", "Lamborghini");

veiculos.forEach((value, key) => {
    carrosDOM.innerHTML += `<option value="${key}">${value}</option`;
});

//forEach - para cada. Laço de iteração p/ array (passa item por item)

//////////////////////////////////////////
// splice - remove e adiciona elementos

const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];
// slice - retorna um novo array, o primeiro parâmetro é opcional, e começa em zero.
// o ultimo parametro determina até onde deve ser filtrado, porém excluindo este último elemento.

const newNba = nbaTeams.slice(3, 5);

console.log(nbaTeams.slice(3, 5));
console.log(nbaTeams);



//imutabilidade - dados n mudam, eles evoluem.
//split quebra texto em array

const name = "Maysa Gonçalves Nascimento dos Anjos"
const nameArray = name.split(" ");
const nameComplete = [nameArray[0], nameArray.slice(-1)].join(" ");
console.log(nameComplete);

const procuraCeltic = (nomeTime) => {
    return nomeTime == "Celtics" || nomeTime == "Raptors";
};

const celticsMap = nbaTeams.map(procuraCeltic); // retorna um novo array, mapeando e buscando no array anterior
const celticsFilter = nbaTeams.filter(procuraCeltic); //retorna um novo array, procura do comeco ao fim do array anterior, quem retornou true para a funcao usada.
const celticsFind = nbaTeams.find(procuraCeltic); // retorna a primeira ocorrencia de uma busca com o parametro que a funcao determinou.

console.log(celticsMap, "map");
console.log(celticsFilter, "filter");
console.log(celticsFind, "Find");

