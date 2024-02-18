// Função para criptografar o texto
function criptografar(texto) {
  return texto.replace(/e/g, 'enter')
             .replace(/i/g, 'imes')
             .replace(/a/g, 'ai')
             .replace(/o/g, 'ober')
             .replace(/u/g, 'ufat');
}

// Função para descriptografar o texto
function descriptografar(texto) {
  return texto.replace(/enter/g, 'e')
             .replace(/imes/g, 'i')
             .replace(/ai/g, 'a')
             .replace(/ober/g, 'o')
             .replace(/ufat/g, 'u');
}

// Função para criptografar, alterar os estilos de alguns elementos e atualizar o resultado no HTML
function criptografarEAtualizar() {
  // Obtém o texto original do textarea
  const textoOriginal = document.getElementById('texto').value;
  
  // Criptografa o texto
  const textoCriptografado = criptografar(textoOriginal);
  
  // Atualiza o elemento HTML com o texto criptografado
  document.getElementById('resultado').textContent = textoCriptografado;
  
  // Oculta os elementos e altera os estilos da seção
  document.getElementById('menino-olhando').style.display = 'none';
  document.getElementById('alerta-sem-mensagem').style.display = 'none';
  document.getElementById('instrucao').style.display = 'none';
  document.getElementById('resultado').style.display = 'block';
  document.getElementById('copiar').style.display = 'block';
  document.getElementById('saida').style.justifyContent = 'space-between';
  document.getElementById('saida').style.alignItems = 'flex-start';
}

// Função para descriptografar, alterar os estilos de alguns elementos e atualizar o resultado no HTML
function descriptografarEAtualizar() {
  // Obtém o texto original do textarea
  const textoOriginal = document.getElementById('texto').value;
  
  // Criptografa o texto
  const textoDescriptografado = descriptografar(textoOriginal);
  
  // Atualiza o elemento HTML com o texto criptografado
  document.getElementById('resultado').textContent = textoDescriptografado;
  
  // Oculta os elementos e altera os estilos da seção
  document.getElementById('menino-olhando').style.display = 'none';
  document.getElementById('alerta-sem-mensagem').style.display = 'none';
  document.getElementById('instrucao').style.display = 'none';
  document.getElementById('resultado').style.display = 'block';
  document.getElementById('copiar').style.display = 'block';
  document.getElementById('saida').style.justifyContent = 'space-between';
  document.getElementById('saida').style.alignItems = 'flex-start';
}

// Função para copiar o texto
function copiarTexto() {
  let textoResultado = document.getElementById('resultado').innerText;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(textoResultado)
      .then(() => console.log('Texto copiado com sucesso!'))
      .catch(err => console.error('Erro ao copiar texto: ', err));
  }
}