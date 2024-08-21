const botao = document.querySelector('#enviar')
botao.addEventListener('click',function(){
const data = document.querySelector('.dias_semana').value
chama_treino({'dias_semana':data})
})

function chama_treino(data)
  {fetch('http://127.0.0.1:8000/planilha', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = json.teste
  })
  .catch(err => console.log(err));
}