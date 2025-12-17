<?php
// cadastro.php

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Recebe os dados do formulário
    $nome  = $_POST["nome"] ?? "";
    $senha = $_POST["senha"] ?? "";

    // Segurança básica (evita problemas com HTML)
    $nome  = htmlspecialchars($nome);
    $senha = htmlspecialchars($senha);

    echo "<!DOCTYPE html>";
    echo "<html lang='pt-BR'>";
    echo "<head>";
    echo "<meta charset='UTF-8'>";
    echo "<title>Cadastro realizado</title>";
    echo "<style>
            body {
              font-family: Arial, sans-serif;
              background: #e6f3ff;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
            .box {
              background: white;
              padding: 30px;
              border-radius: 15px;
              box-shadow: 0 10px 20px rgba(0,0,0,0.1);
              text-align: center;
            }
            h1 { color: #1e90ff; }
          </style>";
    echo "</head>";
    echo "<body>";
    echo "<div class='box'>";
    echo "<h1>Cadastro realizado!</h1>";
    echo "<p><strong>Nome:</strong> $nome</p>";
    echo "<p><strong>Senha:</strong> $senha</p>";
    echo "<p>(Exemplo simples, dados não salvos)</p>";
    echo "</div>";
    echo "</body>";
    echo "</html>";

} else {
    echo "Acesso inválido.";
}
?>
