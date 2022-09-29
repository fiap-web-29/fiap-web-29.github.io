// diferenças entre arrow function e funções nominais ou expressões de função

const resultado = document.querySelector("#resultado");

let myFunc1 = {
    showArguments(){
        resultado.innerHTML = arguments;
        console.log(arguments);

    },
};

//chamando a função
myFunc1.showArguments(
    "Vai Corinthias",
    "Full-Stack Developer",
    "React",
    "NodeJs",
    "TypeScript"
);

let myFunc2 = {
    showArguments(){
        resultado.innerHTML = arguments;
        console.log(arguments);

    },
};
myFunc2.showArguments(
    "Vai Corinthias",
    "Full-Stack Developer",
    "React",
    "NodeJs",
    "TypeScript"
);
