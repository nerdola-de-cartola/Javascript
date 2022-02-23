document.getElementById('data').style.textAlign = 'center'
document.getElementById('results').style.textAlign = 'center'

function verify() {
    //VARIÁVEIS
    var birthday_year = Number(document.getElementById('birthday').value)
    var actual_year = new Date().getFullYear()
    var age = actual_year - birthday_year
    var gen = document.getElementsByName('fsex')
    var results = document.getElementById('results')
    var person_image = document.createElement('img')
    person_image.setAttribute('id', 'person_image')
    var image_source;
    

    //VERIFICAÇÃO

    if (gen[0].checked) {
        //HOMEM
        var sex = 'um homem'
        if (0 <= age && age < 18) {
            //window.alert('jovem')
            image_source = '../imagens/homem-jovem.jpg'
        } else if (18 <= age && age <60 ) {
            //window.alert('adulto')
            image_source = '../imagens/homem-adulto.jpg'
        } else if (age >= 60) {
            //window.alert('idoso')
            image_source = '../imagens/homem-idoso.jpg'
        }
    } else if (gen[1].checked) {
        //MULHER
        var sex = 'uma mulher'
        if (0 <= age && age < 18) {
            //window.alert('jovem mulher')
            image_source = '../imagens/mulher-jovem.jpg'
        } else if (18 <= age && age <60 ) {
            //window.alert('adulta')
            image_source = '../imagens/mulher-adulta.jpg'
        } else if (age >= 60) {
            //window.alert('idosa')
            image_source = '../imagens/mulher-idosa.jpg'
        }
    }
    if (birthday_year > actual_year || birthday_year <= 0) {
        results.innerHTML = (`Preencha a idade corretamente`)
    } else if (sex == undefined ) {
        results.innerHTML = (`Selecione o gênero`)
    } else {
        results.innerHTML = (`  Você é um ${sex} com ${age} anos.<br>`)
        person_image.setAttribute('src', image_source)
        results.appendChild(person_image)
    }

    
    

    //TESTES
    //window.alert(`Nasceu: ${birthday_year} Hoje: ${actual_year}`)
    //window.alert(`${sex}`)
    //window.alert(`${age}`)
    //window.alert(`Você é um ${sex} com ${age} anos.`)
    //window.alert(`${gen}`)
}