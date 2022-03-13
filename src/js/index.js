/* OBJETIVOS
Quando clicar no pokemon listagem, temos que esconder o cartao pokemon aberto e mostrar o cartao correspondente ao selecionado.

para isso devemos trabalhar com dois elementos:
1- listagem
2- cartao do pokemon

para isso precisamos criar duas variaveis na JS para trabalhar com os elementos de tela

vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokemons

- remover a classe aberto do cartao aberto
- ao clicar em um pokemon da listagem pegamos o id para saber qual cartao mostrar
- na listagem dos pokemons remover a classe ativo que marca o pokemon selecionado 
- adicionar a classe atvo no item da lista selecionado
*/
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        // remove a classe aberto do pokemon aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        // adidiona aberto ao pokemon clicado
        const idPokemonSelecionado = pokemon.attributes.id.value
        // concatenando cartao- + bulbasaur = cartao-bulbasaur
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        console.log(idDoCartaoPokemonParaAbrir)
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')
        
        // remover a classe ativo do pokemon anterior
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // adicionar o elento ativo ao pokemon selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})