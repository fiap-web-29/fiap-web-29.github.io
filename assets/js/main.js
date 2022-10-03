

console.log(nome, "chamando variável com var");

var nome = "Fiap";

escreve("Exemplo de função nominal");

// funcao nominal - udf
function escreve(titulo){
    alert(titulo);
}
// 7 tipos diferentes de erros em JavaScript - 3 são os mais comuns
// 1 SyntaxError - escreveu algo errado
// 2 ReferenceError - chamou quem nao existe ou nao está acessível
// 3 TypeError - violou alguma regra do javascript 
// 4 RangeError - estourou o limite de aninhamento ou faixa de valores.
// 5 EvalError - existe um comando perigoso no javascript chamado eval
// 6 InternalError - memória, processamento, crash no chrome ou v8
// 7 URIError - erros que acontecem ao consumir dados externos, com urls inválidas

// existem 4 formas de criar uma função em JS:

// função nominal: sofre hoisting (se começar com function direto). o var e o function é içado pra cima do escopo

function mudaTitulo(novoTitulo){
    document.querySelector("h1").innerHTML = novoTitulo;
}

// escopo, orientação a objetos

mudaTitulo("Vai Corinthians");
// expressão de função -  function expression
// função anônima
const mudaTitulo2 = function(novoTitulo){
    document.querySelector("h2").innerHTML = novoTitulo;
}
mudaTitulo2("Trocando o subtítulo");
// arrow function - é uma função criada no ES6 ou ES2015
// nao existe o this dentro de uma arrow function
// nao existe um método construtor.
// sintaxe mais simples


const relogio = () => {
    const date = new Date();
    mudaTitulo2(date.toLocaleTimeString());
};
setInterval(relogio, 1000);
//uma funcao que é armazenada numa variável é chamada de expressão de função
//uma função q n tem nome, mas tem a palavra function é uma função anônima
// a função anonima precisa de um contexto

const frases = ["A vida é bela", "A vida é curta", "A vida é uma dádiva"];
const mudaFrase = (elem, frases, i) => {
    let total = 0;
    setInterval(() => {
      document.querySelector(elem).innerHTML =
        frases[total >= frases.length - 1 ? (total = 0) : (total += 1)];
      console.log(total);
    }, i * 1000);
  };
mudaFrase("h1", frases, 4);