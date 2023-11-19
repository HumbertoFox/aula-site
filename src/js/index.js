const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        const nomePersonagem = document.getElementById('nome-personagem');
        const idPersonagem = personagem.attributes.id.value;
        
        personagem.classList.add('selecionado');

        if (window.innerWidth < 450) {
            windows.scrollto({ top: 0, behavior: 'amooth' });
        };

        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

        personagem.addEventListener('mouseout', () => {
            personagem.classList.remove('selecionado');
            imagemPersonagemGrande.src = `./src/imagens/logo.svg`;
            document.getElementById('nome-personagem').innerText = "Nome do Personagem";
            document.getElementById('descricao-personagem').innerText = "Descrição do Personagem"
        });
    });
});