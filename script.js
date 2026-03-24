function revelarOraculo() {
    // 1. INPUT: Capturar a data de nascimento do usuário
    const inputData = document.getElementById('data-nascimento').value;

    if (!inputData) {
        alert('Por favor, eleve seu cosmo e insira uma data válida!');
        return;
    }

    // Dividir a string da data para evitar problemas de fuso horário brasileiro
    const partesData = inputData.split('-');
    const mes = parseInt(partesData[1], 10);
    const dia = parseInt(partesData[2], 10);

    let cavaleiro = "";
    let poder = "";
    let simbolo = "";
    let imagemUrl = "";
    let status = ""; 

    // 2. LÓGICA: Calcular o signo e atribuir o Cavaleiro e Imagem correspondentes
    // ATENÇÃO: Os nomes de arquivo como 'image_10.png' correspondem às imagens fornecidas no upload.
    
    // Áries
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        cavaleiro = "Mu de Áries";
        poder = "Muralha de Cristal e Revolução Estelar. O mestre na restauração de armaduras.";
        simbolo = "♈";
        imagemUrl = src="./img/mu_de_aries.jpg";
        status = "Vivo";
    } 
    // Touro
    else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        cavaleiro = "Aldebaran de Touro";
        poder = "Grande Chifre. Possui uma força física inigualável e uma postura de ataque e defesa perfeitas.";
        simbolo = "♉";
        imagemUrl = src="./img/alderaban_de_touro.wepb";
        status = "Vivo";
    } 
    // Gêmeos
    else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        cavaleiro = "Saga de Gêmeos";
        poder = "Explosão Galáctica e Outra Dimensão. O poder capaz de esmagar as estrelas.";
        simbolo = "♊";
        imagemUrl = src="./img/Saga_de_Gemeos_(Ouro).webp";
        status = "Vivo";
    } 
    // Câncer
    else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        cavaleiro = "Máscara da Morte de Câncer";
        poder = "Ondas do Inferno. Capaz de enviar a alma de seus oponentes diretamente para o Yomotsu Hirasaka.";
        simbolo = "♋";
        imagemUrl = src="./img/mascara_da_morte.webp";
        status = "Morto";
    } 
    // Leão
    else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        cavaleiro = "Aiolia de Leão";
        poder = "Relâmpago de Plasma. Desfere milhões de golpes à velocidade da luz em um único segundo.";
        simbolo = "♌";
        imagemUrl = src="./img/Aiolia_de_Leão.webp";
        status = "Vivo";
    } 
    // Virgem
    else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        cavaleiro = "Shaka de Virgem";
        poder = "Tesouro do Céu. O homem mais próximo de Deus, capaz de remover os cinco sentidos do oponente.";
        simbolo = "♍";
        imagemUrl = src="./img/Shaka_de_Virgem.webp";
        status = "Vivo";
    } 
    // Libra
    else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        cavaleiro = "Dohko de Libra";
        poder = "Cólera dos Cem Dragões. O sábio Mestre Ancião, cuja armadura guarda as 12 armas do Zodíaco.";
        simbolo = "♎";
        imagemUrl = src="./img/Dohko_perfil.webp";
        status = "Vivo";
    } 
    // Escorpião
    else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        cavaleiro = "Milo de Escorpião";
        poder = "Agulha Escarlate. Dispara 15 golpes precisos que testam a sanidade e a vida do inimigo antes da morte.";
        simbolo = "♏";
        imagemUrl = src="./img/milo_de_escorpiao.webp";
        status = "Morto";
    } 
    // Sagitário
    else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        cavaleiro = "Aiolos de Sagitário";
        poder = "Trovão Atômico e a Flecha da Justiça. O herói lendário de lealdade inabalável a Athena.";
        simbolo = "♐";
        imagemUrl = src="./img/aiolos.jpg";
        status = "Morto";
    } 
    // Capricórnio
    else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        cavaleiro = "Shura de Capricórnio";
        poder = "Excalibur. Seus braços e pernas são afiados como a espada sagrada capaz de cortar qualquer coisa.";
        simbolo = "♑";
        imagemUrl = src="./img/20230507-shura_de_capricornio_espectro_02.webp";
        status = "Morto";
    } 
    // Aquário
    else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        cavaleiro = "Camus de Aquário";
        poder = "Execução Aurora. O mestre do gelo, capaz de atingir o zero absoluto e congelar armaduras de ouro.";
        simbolo = "♒";
        imagemUrl = src="./img/20230508-camus-aquario.webp";
        status = "Morto";
    } 
    // Peixes
    else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        cavaleiro = "Afrodite de Peixes";
        poder = "Rosas Diabólicas Reais. O guerreiro cuja beleza letal tira os sentidos e a vida com o veneno de suas rosas.";
        simbolo = "♓";
        imagemUrl = src="./img/images.jpg";
        status = "Vivo";
    }

    // 3. OUTPUT: Atualizar a interface com os dados do cavaleiro
    document.getElementById('simbolo-cavaleiro').innerHTML = simbolo;
    document.getElementById('nome-cavaleiro').innerHTML = cavaleiro;
    document.getElementById('poder-cavaleiro').innerHTML = poder;
    document.getElementById('status-cavaleiro').innerHTML = "Status: " + status;
    
    // Atualizar imagem e alt text para acessibilidade
    const imgElement = document.getElementById('imagem-cavaleiro');
    imgElement.src = imagemUrl;
    imgElement.alt = `Imagem de ${cavaleiro}`;

    // Mostrar resultado com animação
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.remove('resultado-oculto');
    resultadoDiv.classList.add('resultado-visivel');
}