function formulario(){
    const form = document.querySelector('.dados');
    const resul = document.querySelector('.resultados');

    const pessoa = [];
    function gravarDados(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        pessoa.push(
            {
                nome: nome.value,
                sobrenome: sobrenome.value,
                idade: idade.value
            }
        )
        // console.log(pessoa)
        resul.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${idade.value} </p>`;
    }
    form.addEventListener('submit', gravarDados)
    // alert(pessoa);
    // resul.innerHTML += `<p> ${pessoa} </p>`;
    console.log(pessoa);
}
formulario();
// const pessoas = [];
// pessoas.push(formulario());
// console.log(pessoas);
