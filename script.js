    // 1. EVENTOS DO MOUSE
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

    const areaMouse = document.getElementById("areaMouse");
    const resultadoMouse = document.getElementById("resultadoMouse");

    areaMouse.addEventListener("dblclick", function () {
      resultadoMouse.textContent = "Evento dblclick acionado! Você deu um clique duplo.";
    });

    areaMouse.addEventListener("mouseover", function () {
      resultadoMouse.textContent = "Evento mouseover acionado! O mouse entrou na área.";
    });

    areaMouse.addEventListener("mouseout", function () {
      resultadoMouse.textContent = "Evento mouseout acionado! O mouse saiu da área.";
    });

    areaMouse.addEventListener("mousemove", function (evento) {
      document.getElementById("posicaoMouse").textContent =
        "Evento mousemove: posição (" + evento.offsetX + ", " + evento.offsetY + ").";
    });

    // 2. EVENTOS DO TECLADO
    const campoTeclado = document.getElementById("campoTeclado");
    const resultadoTeclado = document.getElementById("resultadoTeclado");

    campoTeclado.addEventListener("keydown", function (evento) {
      resultadoTeclado.textContent = "Evento keydown acionado! Tecla pressionada: " + evento.key + ".";
    });

    campoTeclado.addEventListener("keyup", function (evento) {
      resultadoTeclado.textContent = "Evento keyup acionado! Tecla liberada: " + evento.key + ".";
    });

    // 3. EVENTOS DE FORMULÁRIOS E CAMPOS
    const campoNome = document.getElementById("campoNome");

    campoNome.addEventListener("input", function (evento) {
      const nome = evento.target.value.trim();
      document.getElementById("saudacao").textContent = nome
        ? "Olá, " + nome + "! Você acionou o evento input."
        : "Digite seu nome para ver a saudação.";
    });

    campoNome.addEventListener("focus", function () {
      document.getElementById("resultadoCampo").textContent = "Evento focus acionado! O campo recebeu foco.";
    });

    campoNome.addEventListener("blur", function () {
      document.getElementById("resultadoCampo").textContent = "Evento blur acionado! O campo perdeu o foco.";
    });

    document.getElementById("opcaoEvento").addEventListener("change", function (evento) {
      document.getElementById("resultadoCampo").textContent =
        "Evento change acionado! Opção selecionada: " + (evento.target.value || "nenhuma") + ".";
    });

    document.getElementById("formularioEventos").addEventListener("submit", function (evento) {
      evento.preventDefault();
      const nome = campoNome.value.trim();
      document.getElementById("resultadoFormulario").textContent = nome
        ? "Evento submit acionado! Formulário enviado por " + nome + "."
        : "Evento submit acionado! Formulário enviado sem nome.";
    });

    // 4. EVENTOS DE CARREGAMENTO E ROLAGEM
    window.addEventListener("load", function () {
      document.getElementById("resultadoLoad").textContent = "Evento load acionado! A página foi carregada.";
    });

    // 5. SELECIONAR E MODIFICAR O DOM
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

    // 6. CRIAR ELEMENTOS HTML
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

    // 7. MANIPULAÇÃO DA JANELA (WINDOW)
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

    // 8. DIMENSÕES DA JANELA
    function atualizarDimensoesJanela() {
      document.getElementById("larguraExterna").textContent = window.outerWidth + " px";
      document.getElementById("alturaExterna").textContent = window.outerHeight + " px";
    }

    document.getElementById("botaoDimensoes").addEventListener("click", atualizarDimensoesJanela);
    window.addEventListener("resize", atualizarDimensoesJanela);
    atualizarDimensoesJanela();

    // 9. CONTROLE DA ROLAGEM (TAMBÉM ATUALIZA O EVENTO DO CARD 4)
    function atualizarPosicaoRolagem() {
      document.getElementById("posicaoX").textContent = window.scrollX + " px";
      document.getElementById("posicaoY").textContent = window.scrollY + " px";
      document.getElementById("resultadoScroll").textContent =
        "Evento scroll acionado! Posição vertical: " + window.scrollY + " px.";
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

    // 10. TEMPORIZADORES E CONTAGEM REGRESSIVA
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

    // 11. SELETORES DE ELEMENTOS
    const amostrasSeletores = document.getElementById("amostrasSeletores");

    document.getElementById("botaoSelecionarClasse").addEventListener("click", function () {
      const elementos = amostrasSeletores.getElementsByClassName("alvoClasse");
      document.getElementById("resultadoSeletores").textContent =
        "getElementsByClassName() encontrou " + elementos.length + " elementos com a classe alvoClasse.";
    });

    document.getElementById("botaoSelecionarTag").addEventListener("click", function () {
      const elementos = amostrasSeletores.getElementsByTagName("p");
      document.getElementById("resultadoSeletores").textContent =
        "getElementsByTagName() encontrou " + elementos.length + " elementos <p> na amostra.";
    });

    document.getElementById("botaoSelecionarPrimeiro").addEventListener("click", function () {
      const elemento = amostrasSeletores.querySelector(".alvoClasse");
      document.getElementById("resultadoSeletores").textContent =
        "querySelector() encontrou o primeiro elemento — classe: " + elemento.classList[0] + ".";
    });

    // 12. ALTERAÇÃO DE CONTEÚDO
    const amostraConteudo = document.getElementById("amostraConteudo");

    document.getElementById("botaoInnerHTML").addEventListener("click", function () {
      amostraConteudo.innerHTML = "<strong>HTML inserido!</strong> O texto em negrito foi criado com innerHTML.";
      document.getElementById("resultadoConteudo").textContent =
        "O navegador interpretou a marcação HTML inserida.";
    });

    document.getElementById("botaoInnerText").addEventListener("click", function () {
      amostraConteudo.innerText = "Conteúdo substituído como texto renderizado usando innerText.";
      document.getElementById("resultadoConteudo").textContent =
        "O conteúdo foi substituído por texto, sem interpretar marcação HTML.";
    });

    // 13. CLASSES CSS
    const amostraClasses = document.getElementById("amostraClasses");
    const resultadoClasses = document.getElementById("resultadoClasses");

    document.getElementById("botaoAdicionarClasse").addEventListener("click", function () {
      amostraClasses.classList.add("destaque");
      resultadoClasses.textContent = "classList.add() adicionou a classe destaque.";
    });

    document.getElementById("botaoRemoverClasse").addEventListener("click", function () {
      amostraClasses.classList.remove("destaque");
      resultadoClasses.textContent = "classList.remove() removeu a classe destaque.";
    });

    document.getElementById("botaoAlternarClasse").addEventListener("click", function () {
      const destaqueAtivado = amostraClasses.classList.toggle("destaque");
      resultadoClasses.textContent = destaqueAtivado
        ? "classList.toggle() adicionou a classe destaque."
        : "classList.toggle() removeu a classe destaque.";
    });

    // 14. ATRIBUTOS HTML
    const linkAtributo = document.getElementById("linkAtributo");
    const resultadoAtributo = document.getElementById("resultadoAtributo");

    document.getElementById("botaoDefinirAtributo").addEventListener("click", function () {
      linkAtributo.setAttribute(
        "style",
        "display: inline-block; padding: 8px; background-color: #fff2c5; color: #102d63; border-radius: 6px;"
      );
      resultadoAtributo.textContent = "O atributo style foi definido e o visual do link foi alterado.";
    });

    document.getElementById("botaoConsultarAtributo").addEventListener("click", function () {
      const estilo = linkAtributo.getAttribute("style");
      resultadoAtributo.textContent = estilo
        ? "getAttribute() retornou: " + estilo
        : "O atributo style ainda não foi definido.";
    });

    document.getElementById("botaoRemoverAtributo").addEventListener("click", function () {
      linkAtributo.removeAttribute("style");
      resultadoAtributo.textContent = "removeAttribute() removeu o atributo style.";
    });