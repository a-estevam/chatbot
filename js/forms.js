const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const file = document.getElementById('file').files[0];
  if (!file) {
    alert('Selecione uma foto');
    return;
  }

  const reader = new FileReader();

  reader.onload = async () => {
    const base64 = reader.result.split(',')[1];

    const params = new URLSearchParams({
      action: 'FormCadastro',
      NomeVisitante: form.NomeVisitante.value,
      Email: form.Email.value,
      Nascimento: form.Nascimento.value,
      file: base64,
      filename: file.name,
      type: file.type
    });

    const SCRIPT_URL =
      'https://script.google.com/macros/s/AKfycbx_JC8wWehF2hZ6laBWcGOy4nbpUp3rn9czgh5PP-mOjY400qVLbsbzo5juKLPFoRjtxQ/exec';

    try {
      const response = await fetch(`${SCRIPT_URL}?${params.toString()}`);
      const result = await response.json();

      if (result.status === 'ok') {
        alert('Cadastro enviado com sucesso!');
        form.reset();
      } else {
        alert('Erro no cadastro');
      }

    } catch (err) {
      console.error(err);
      alert('Erro ao enviar dados');
    }
  };

  reader.readAsDataURL(file);
});
