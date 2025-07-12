  const container = document.getElementById("tabuada-container");

    function gerarTabuada(num) {
      const div = document.createElement("div");
      div.className = "card";

      const titulo = document.createElement("h2");
      titulo.textContent = `Tabuada do ${num}`;
      div.appendChild(titulo);

      for (let i = 1; i <= 10; i++) {
        const linha = document.createElement("p");
        linha.textContent = `${num} x ${i} = ${num * i}`;
        div.appendChild(linha);
      }

      return div;
    }

    function mostrarTodasTabuadas() {
      container.innerHTML = "";
      for (let i = 1; i <= 200; i++) {
        container.appendChild(gerarTabuada(i));
      }
    }

    function filtrarTabuada() {
      const valor = parseInt(document.getElementById("pesquisa").value);
      container.innerHTML = "";

      if (valor >= 1 && valor <= 200) {
        container.appendChild(gerarTabuada(valor));
      } else {
        mostrarTodasTabuadas();
      }
    }

    mostrarTodasTabuadas();