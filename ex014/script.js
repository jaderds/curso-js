function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    if(hora >= 0 && hora < 12){
        img.src = 'https://github.com/jaderds/curso-js/blob/main/ex014/img/manha.png?raw=true'
        document.body.style.background = '#FFC26C'
        msg.innerHTML = `Agora são ${hora} horas. <br>Bom dia!`
    
    }else if(hora >= 12 && hora <= 18){
        img.src = 'https://github.com/jaderds/curso-js/blob/main/ex014/img/tarde.png?raw=true'
        document.body.style.background = '#C0D8D8'
        msg.innerHTML = `Agora são ${hora} horas. <br>Boa tarde!`
    
    }else{
        img.src = 'https://github.com/jaderds/curso-js/blob/main/ex014/img/noite.png?raw=true'
        document.body.style.background = '#203F54'
        msg.innerHTML = `Agora são ${hora} horas. <br>Boa noite!`
    }

}