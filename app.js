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

// Função para criptografar e atualizar o resultado no HTML
function criptografarEAtualizar() {
  // Obtém o texto original do textarea
  const textoOriginal = document.getElementById('texto').value;
  
  // Criptografa o texto
  const textoCriptografado = criptografar(textoOriginal);
  
  // Atualiza o elemento HTML com o texto criptografado
  document.getElementById('resultado').textContent = textoCriptografado;
}

function descriptografarEAtualizar() {
  // Obtém o texto original do textarea
  const textoOriginal = document.getElementById('texto').value;
  
  // Criptografa o texto
  const textoDescriptografado = descriptografar(textoOriginal);
  
  // Atualiza o elemento HTML com o texto criptografado
  document.getElementById('resultado').textContent = textoDescriptografado;
}

// Função para copiar o texto
function copiarTexto() {
  let texto = document.getElementById('resultado').innerText;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(texto)
      .then(() => console.log('Texto copiado com sucesso!'))
      .catch(err => console.error('Erro ao copiar texto: ', err));
  }
}