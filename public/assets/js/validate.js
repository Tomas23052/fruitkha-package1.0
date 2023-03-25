function pass(){
    var password;
        var pass="123";
        password= prompt('Mete a tua senha', '');
        if(password == pass)
        alert('Senha correta, clica no OK para entrar.');
        else{
            alert('Senha incorreta, tenta outra vez.');
            window.location="https://topcasasapostas.pt/"
        }	
}

pass();