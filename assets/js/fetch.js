const cep = document.querySelector("#cep");

const showData = (result) => {
    for (const campo in result) {
      if (document.querySelector("#" + campo)) {
        document.querySelector("#" + campo).value = result[campo];
      }
    }
  };

cep.addEventListener("blur", async (e) => {
    let search = cep.value.replace("-", ""); //tirar traço
    if(search.length < 8 || Number(search.value) === NaN) { // Not a Number (NaN)
        alert("CEP inválido");
        cep.focus();
        return;
    }
    const options = {
        method: "GET", 
        mode: "cors",// acessar vários domínios ao msm tmp
        cache: "default",

    };
    //recurso assíncrono, retorna uma promise pq eu nao sei se vai funcionar.
    // promise é um recurso que não temos certeza se deu certo ou não, é uma intenção. 
    // se der certo, ele vai retornar o resolve, se der errado ele vai retornar o reject
    // resolver quer dizer, funcionou, aí usamos a função then, se der errado, usamos o catch.


    // axios - biblioteca js que usa fetch e XHR.
    try{
        const resultado = await fetch(
            `https://viacepddd.com.br/ws/${search}/json`,
            options
        );
        const json = await resultado.json();
        console.log(json);
    }   catch (error) {
        console.log("Temos um problema", error.message);
    }
    
});
//eu só posso pegar o que a pessoa digitou, depois de um evento
// onde tiver await, o async tem q estar