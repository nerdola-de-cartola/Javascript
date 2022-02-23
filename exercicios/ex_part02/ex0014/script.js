
function load() {
    var message = window.document.getElementById('message')
    var picture = window.document.getElementById('welcome_image')
    var hours = new Date().getHours()
    //var hours = 6

    if (hours<12  && hours>=3 ) {
        //BOM DIA!
        salutation = `Bom dia`
    } else if (hours<18  && hours>=12 ) {
        //BOA TARDE!
        salutation = `Boa tarde`
    } else {
        //BOA NOITE!
        salutation = `Boa noite`
    } 

    message.innerHTML = `${salutation}, agora são ${hours} horas.`

    if (hours<12  && hours>=3 ) {
        //BOM DIA!
        picture.src = '../imagens/manhã.jpg'
        window.document.body.style.backgroundColor = '#b69102'
    } else if (hours<18  && hours>=12 ) {
        //BOA TARDE!
        picture.src = '../imagens/tarde.jpg'
        window.document.body.style.backgroundColor = '#ce7259'
    } else {
        //BOA NOITE!
        picture.src = '../imagens/noite.jpg'
        window.document.body.style.backgroundColor = '#616767'
    }
}