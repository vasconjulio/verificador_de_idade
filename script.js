function verificar() {
  var data = new Date()
  var ano = data.getUTCFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || fano.value > ano) {
      window.alert(`[ERRO] Verifique os dados e tente novamente!`)
  } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ``
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
        genero = `Homem`
        if (idade >= 0 && idade < 3) {
          //Bebê
          img.setAttribute('src', 'bb-menino.png')
        } else if (idade < 21) {
          //Jovem
          img.setAttribute('src', 'menino.png')
        } else if (idade < 50) {
          //Adulto
          img.setAttribute('src', 'homem-jovem.png')
        } else {
          //Idoso
          img.setAttribute('src', 'homem-velho.png')
        }
      } else if (fsex[1].checked) {
        genero = `Mulher`
        if (idade >= 0 && idade < 3) {
          //Bebê
          img.setAttribute('src', 'bb-menina.png')
        } else if (idade < 21) {
          //Jovem
          img.setAttribute('src', 'menina.png')
        } else if (idade < 50) {
          //Adulto
          img.setAttribute('src', 'mulher-jovem.png')
        } else {
          //Idoso
          img.setAttribute('src', 'mulher-velha.png')
        }}
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
  } 
}

function createUser (name, email) {
  let re = /^([\W-]+(?:\.[\W]+)*)@((?:[\W]+\.)*\.)*\W[\W-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  let isEmailValid = re.test(email);
  if(isEmailValid){
  creatUserInDabase(name, email)
  }
  }