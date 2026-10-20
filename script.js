    // 1. EVENTOS HTML: click e input
    const botaoClique = document.getElementById("botaoClique");
    const resultadoEvento = document.getElementById("resultadoEvento");

    botaoClique.addEventListener("click", function () {
      resultadoEvento.textContent = "Evento click acionado! O botão foi clicado.";
    });

    document.getElementById("botaoLimparEvento").addEventListener("click", function () {
      resultadoEvento.textContent = "Aguardando um clique...";
      document.getElementById("campoNome").value = "";
      document.getElementById("saudacao").textContent = "Sua saudação aparecerá aqui.";
    });

    document.getElementById("campoNome").addEventListener("input", function (evento) {
      const nome = evento.target.value.trim();
      document.getElementById("saudacao").textContent = nome
        ? "Olá, " + nome + "! Você acionou o evento input."
        : "Digite seu nome para ver a saudação.";
    });

    // 2. MANIPULAÇÃO DO DOM: selecionar e modificar elementos
    const paragrafoDemo = document.getElementById("paragrafoDemo");

    document.getElementById("botaoTexto").addEventListener("click", function () {
      paragrafoDemo.textContent = "O texto foi alterado usando textContent e getElementById().";
      document.getElementById("resultadoDom").textContent = "Texto do parágrafo atualizado com sucesso.";
    });

    document.getElementById("botaoCor").addEventListener("click", function () {
      paragrafoDemo.style.color = paragrafoDemo.style.color === "blue" ? "#1d2939" : "blue";
      document.getElementById("resultadoDom").textContent = "A propriedade style.color foi modificada.";
    });

    let paragrafoOculto = false;
    document.getElementById("botaoVisibilidade").addEventListener("click", function () {
      paragrafoOculto = !paragrafoOculto;
      paragrafoDemo.style.visibility = paragrafoOculto ? "hidden" : "visible";
      this.textContent = paragrafoOculto ? "Mostrar parágrafo" : "Ocultar parágrafo";
    });

    document.getElementById("botaoContar").addEventListener("click", function () {
      // querySelectorAll seleciona todos os parágrafos dentro dos cards.
      const paragrafos = document.querySelectorAll(".card p");
      document.getElementById("resultadoDom").textContent =
        "Foram encontrados " + paragrafos.length + " parágrafos dentro dos cartões.";
    });

    // 3. CRIAÇÃO DE ELEMENTOS HTML
    document.getElementById("botaoAdicionar").addEventListener("click", function () {
      const campo = document.getElementById("campoItem");
      const texto = campo.value.trim();
      if (!texto) {
        campo.focus();
        document.getElementById("resultadoDom").textContent = "Digite um texto antes de adicionar um item.";
        return;
      }
      const novoItem = document.createElement("li");
      novoItem.textContent = texto;
      document.getElementById("listaItens").appendChild(novoItem);
      campo.value = "";
      campo.focus();
    });

    document.getElementById("botaoLimparLista").addEventListener("click", function () {
      document.getElementById("listaItens").replaceChildren();
    });

    // 4. MANIPULAÇÃO DA JANELA: propriedades e funções de window
    function atualizarInformacoesJanela() {
      document.getElementById("largura").textContent = window.innerWidth + " px";
      document.getElementById("altura").textContent = window.innerHeight + " px";
      document.getElementById("endereco").textContent = window.location.href;
      document.getElementById("idioma").textContent = window.navigator.language;
    }

    document.getElementById("botaoInformacoes").addEventListener("click", atualizarInformacoesJanela);
    window.addEventListener("resize", atualizarInformacoesJanela);
    atualizarInformacoesJanela();

    document.getElementById("botaoAlerta").addEventListener("click", function () {
      window.alert("Este aviso foi aberto usando window.alert().");
      document.getElementById("resultadoJanela").textContent = "Você testou a função window.alert().";
    });

    document.getElementById("botaoConfirmar").addEventListener("click", function () {
      const resposta = window.confirm("Você está gostando de aprender JavaScript?");
      document.getElementById("resultadoJanela").textContent = resposta
        ? "Você clicou em OK na caixa de confirmação."
        : "Você clicou em Cancelar na caixa de confirmação.";
    });