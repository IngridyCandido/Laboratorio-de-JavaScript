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

    // 5. DIMENSÕES DA JANELA
    function atualizarDimensoesJanela() {
      document.getElementById("larguraExterna").textContent = window.outerWidth + " px";
      document.getElementById("alturaExterna").textContent = window.outerHeight + " px";
    }

    document.getElementById("botaoDimensoes").addEventListener("click", atualizarDimensoesJanela);
    window.addEventListener("resize", atualizarDimensoesJanela);
    atualizarDimensoesJanela();

    // 6. CONTROLE DA ROLAGEM
    function atualizarPosicaoRolagem() {
      document.getElementById("posicaoX").textContent = window.scrollX + " px";
      document.getElementById("posicaoY").textContent = window.scrollY + " px";
    }

    window.addEventListener("scroll", atualizarPosicaoRolagem, { passive: true });
    atualizarPosicaoRolagem();

    document.getElementById("botaoScrollTo").addEventListener("click", function () {
      const x = Number(document.getElementById("destinoX").value);
      const y = Number(document.getElementById("destinoY").value);
      window.scrollTo({ left: x, top: y, behavior: "smooth" });
      document.getElementById("resultadoRolagem").textContent =
        "Rolagem movida para a posição (" + x + ", " + y + ").";
    });

    document.getElementById("botaoScrollBy").addEventListener("click", function () {
      const deslocamentoY = Number(document.getElementById("deslocamentoY").value);
      window.scrollBy({ top: deslocamentoY, behavior: "smooth" });
      document.getElementById("resultadoRolagem").textContent =
        "Página deslocada " + deslocamentoY + " px na vertical.";
    });

    // 7. TEMPORIZADORES E CONTAGEM REGRESSIVA
    const duracaoTemporizador = document.getElementById("duracaoTemporizador");
    const resultadoTemporizador = document.getElementById("resultadoTemporizador");
    const resultadoAviso = document.getElementById("resultadoAviso");
    const resultadoContagem = document.getElementById("resultadoContagem");
    const botaoCancelarAviso = document.getElementById("botaoCancelarAviso");
    const botaoPararContagem = document.getElementById("botaoPararContagem");
    let avisoAgendado;
    let intervaloContagem;

    function obterDuracao() {
      const duracao = Number(duracaoTemporizador.value);
      if (!Number.isInteger(duracao) || duracao < 1) {
        resultadoTemporizador.textContent = "Informe uma duração em segundos maior ou igual a 1.";
        duracaoTemporizador.focus();
        return null;
      }
      return duracao;
    }

    document.getElementById("botaoAgendar").addEventListener("click", function () {
      const duracao = obterDuracao();
      if (duracao === null) return;

      if (avisoAgendado !== undefined) {
        window.clearTimeout(avisoAgendado);
      }
      resultadoAviso.textContent = "Aviso agendado para daqui a " + duracao + " segundos.";
      botaoCancelarAviso.disabled = false;
      avisoAgendado = window.setTimeout(function () {
        avisoAgendado = undefined;
        botaoCancelarAviso.disabled = true;
        resultadoAviso.textContent = "O aviso agendado com setTimeout() foi executado.";
      }, duracao * 1000);
    });

    botaoCancelarAviso.addEventListener("click", function () {
      if (avisoAgendado === undefined) return;
      window.clearTimeout(avisoAgendado);
      avisoAgendado = undefined;
      botaoCancelarAviso.disabled = true;
      resultadoAviso.textContent = "Aviso cancelado com clearTimeout().";
    });

    document.getElementById("botaoIniciarContagem").addEventListener("click", function () {
      const duracao = obterDuracao();
      if (duracao === null) return;

      if (intervaloContagem !== undefined) {
        window.clearInterval(intervaloContagem);
      }
      let restante = duracao;
      resultadoContagem.textContent = "Contagem regressiva: " + restante + " s";
      botaoPararContagem.disabled = false;
      intervaloContagem = window.setInterval(function () {
        restante -= 1;
        if (restante <= 0) {
          window.clearInterval(intervaloContagem);
          intervaloContagem = undefined;
          botaoPararContagem.disabled = true;
          resultadoContagem.textContent = "Contagem concluída com setInterval().";
          return;
        }
        resultadoContagem.textContent = "Contagem regressiva: " + restante + " s";
      }, 1000);
    });

    botaoPararContagem.addEventListener("click", function () {
      if (intervaloContagem === undefined) return;
      window.clearInterval(intervaloContagem);
      intervaloContagem = undefined;
      botaoPararContagem.disabled = true;
      resultadoContagem.textContent = "Contagem interrompida com clearInterval().";
    });