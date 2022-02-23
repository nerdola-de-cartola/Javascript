document.getElementById('input_button').addEventListener('click', addNumber)
document.getElementById('calculate_button').addEventListener('click', calculate)
var input_field = document.getElementById('input_number')
var list = document.querySelector('select#num_list')
var results = document.getElementById('results')
var values = []



function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, values) {
    if (values.indexOf(n) != -1) {
        return false
    } else {
        return true
    }
}

function addNumber() {
    var input_number = Number(document.getElementById('input_number').value)
    console.log(values);

    if (isNumber(input_number) && inList(input_number, values)) {
        console.log('Número válido');
        values.push(input_number)
        values.sort(function (a, b) { 
            return a - b
        })//Faz a função sort() colocar os elementos em ordem crescente 
        console.log(values);
        list.style.width = 'auto'
        var number_in_list = document.createElement('option')
        number_in_list.innerHTML = `Valor ${input_number} adicionado`
        list.appendChild(number_in_list)
        input_field.value = ''
        input_field.focus()
        results.innerHTML = ''
    } else {
        results.innerHTML = 'Insira um número válido'
        console.log('Insira um número válido');
    }
}

function calculate() {
    var total_elements = values.length
    var max = Math.max(...values)
    var min = Math.min(...values)
    var sum = values.reduce(function (sum, n) {
        return sum + n
    }, 0)
    var average = sum / total_elements

    if (total_elements == 0) {
        results.innerHTML = 'Insira um valor antes de finalizar'
    } else {
        results.innerHTML =
        `
            <p>Ao todo, temos ${total_elements} números cadastrados</p>
            <p>O maior número cadastrado foi ${max}</P
            <p>O menor número cadastrado foi ${min}</P
            <p>A soma de todos os valores é igual à ${sum}</P
            <p>A média de todos os valores é igual à ${average}</P
        `
    }
    
    
}

   