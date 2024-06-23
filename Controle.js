import Globais from "./Globais";

function Controle(){
    const jogar = (resposta) => {
        document.getElementById('visor1').value = `${Globais.programa}->${Globais.num}:${resposta}`

        if (resposta == Globais.gabarito[Globais.num-1]) { //resposta certa
            document.getElementById('visor1').style.border = 'green 3px solid'
            
            if(Globais.tentativa == 1)
                Globais.pontos += 3
            else if(Globais.tentativa == 2)
                Globais.pontos += 2
            else 
                Globais.pontos += 1
            Globais.num++
            Globais.tentativa = 1
        }
        else{ //caso a resposta esteja errada
            document.getElementById('visor1').style.border = 'red 3px solid'

            Globais.tentativa++

            if(Globais.tentativa > 3){
                Globais.num++
                Globais.tentativa = 1
            }
        }
        
        document.getElementById('visor1').value = `${Globais.programa}->${Globais.num}:`
        document.getElementById('visor2').value = `Tentativa ${Globais.tentativa}->3:`

        if(Globais.num > 30) {
            document.getElementById('visor1').value = '***FIM***'
            document.getElementById('visor2').value = `Pontuação: ${Globais.pontos}`
        }
    }



return(
        <p>
        <input type="button" id="botaoA" value="A" onClick={() => jogar('A')} />
        <input type="button" id="botaoB" value="B" onClick={() => jogar('B')} />
        <input type="button" id="botaoC" value="C" onClick={() => jogar('C')} />
        <input type="button" id="botaoD" value="D" onClick={() => jogar('D')} />
        </p>
)

}

export default Controle















