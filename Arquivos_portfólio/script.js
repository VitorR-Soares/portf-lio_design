const constroles = document.querySelectorAll('.controle');
let itemAtual = 0;
const itens = document.querySelectorAll('.img-carrossel');
const maxItens = itens.length;

constroles.forEach(constroles => {
    constroles.addEventListener('click', () => {
        const esquerdo = constroles.classList.contains('botao-esquerdo');

        if (esquerdo) {
            itemAtual += 1;
        } else {
            itemAtual -= 1;
        }
        if (itemAtual >= maxItens) {
            itemAtual = 0;
        }
        if (itemAtual < 0) {
            itemAtual = maxItens - 1;
        }

        itens.forEach(itens => itens.classList.remove('item-atual'));
        itens[itemAtual].scrollIntoView({
            inline: 'center',
            behavior: "smooth",
            block: "nearest"

        })
        itens[itemAtual].classList.add('item-atual')
        console.log('control clicked', esquerdo, itemAtual, maxItens);
    })
})