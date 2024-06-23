import Globais from './Globais'

function Start() {
    const iniciar = () => {
        document.getElementById('visor1').style.border = '0'
        Globais.programa = prompt("Digite o número do programa(051 a 056):", "")

        if(Globais.programa == "051")
            Globais.gabarito = Globais.gabarito051
        else if(Globais.programa == "056")
            Globais.gabarito = Globais.gabarito056
        else {
            alert("Número de programa inválido!\nDigite um número entre 051 e 056")
            iniciar()
        }

        Globais.pontos = 0
        Globais.num = 1
        Globais.tentativa = 1

        document.getElementById('visor1').value = `${Globais.programa}->${Globais.num}:`
        document.getElementById('visor2').value = `Tentativa ${Globais.tentativa} de 3`
    }


    return(
            <input type="button" id="botaoStart" value="Start/Reset Jogo" onClick={iniciar} />
    )
}

export default Start