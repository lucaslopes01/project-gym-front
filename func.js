let data = {
  'dias_semana':6
}
fetch('http:127.0.0.1:8000/planilha', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {"Content-type": "application/json;charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(error => console.log(error));