async function buscaEndereco(cep) {

    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';

    try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP inválido!')
        }

        let endereco = document.getElementById('endereco');
        let bairro = document.getElementById('bairro'); 
        let cidade = document.getElementById('cidade');
        let estado = document.getElementById('estado');

        endereco.value = consultaCEPConvertida.logradouro
        bairro.value = consultaCEPConvertida.bairro
        cidade.value = consultaCEPConvertida.localidade
        estado.value = consultaCEPConvertida.uf

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;

    } catch (erro) {
        mensagemErro.innerHTML = '<p>CEP inválido</p>';
        console.log(erro)
    }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));

