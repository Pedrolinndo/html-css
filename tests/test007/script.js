
    const coresQueTenho = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 54, 55, 56, 58, 59, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 103, 104, 120, 121, 122, 123, 124, 125, 126, 131, 135, 137, 138, 141, 143, 144, 145, 146, 147, 152, 153, 154, 155, 164, 167, 169, 171, 172, 174, 175, 178, 179, 183, 196, 198, 357, 371, 373, 'GG1', 'BG3', 'BG5', 'BG7', 'BG9', 'CG0.5', 'CG1', 'CG2', 'CG4', 'CG6', 'CG7', 'CG8', 'CG9', 'WG0.5', 'WG1', 'WG2', 'WG4', 'WG5', 'WG6', 'WG7', 'WG8', 'WG9'
    ];

    const filtro = document.getElementById("filtro");
    const pesquisa = document.getElementById("pesquisa");
    const linhas = document.querySelectorAll("table tbody tr");

    filtro.addEventListener("change", aplicarFiltro);
    pesquisa.addEventListener("input", aplicarFiltro);

    function aplicarFiltro() {
        const tipo = filtro.value;
        const termo = pesquisa.value.toLowerCase();

        pesquisa.style.display = (tipo === 'have' || tipo === 'notHave') ? 'none' : 'inline';

        linhas.forEach(linha => {
            const nome = linha.cells[0].textContent.toLowerCase();
            const cor = linha.cells[1].style.backgroundColor.toLowerCase();
            const numero = linha.cells[2].textContent.trim();
            const numeroPadrao = isNaN(numero) ? numero : parseInt(numero);

            let mostrar = true;

            if (tipo === "have") {
                mostrar = coresQueTenho.includes(numeroPadrao);
            } else if (tipo === "notHave") {
                mostrar = !coresQueTenho.includes(numeroPadrao);
            } else if (tipo === "nome") {
                mostrar = nome.includes(termo);
            } else if (tipo === "cor") {
                mostrar = cor.includes(termo);
            } else if (tipo === "numero") {
                mostrar = numero.toLowerCase().includes(termo);
            }

            linha.style.display = mostrar ? "" : "none";
        });
    }

    aplicarFiltro(); // Aplicar filtro inicial

// Conta todos os <tr> dentro do <tbody>
const totalTr = document.querySelectorAll('tbody tr').length;
console.log('Total de <tr> no <tbody>:', totalTr);