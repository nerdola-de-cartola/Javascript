var multiplication_button = document.getElementById('multiplication_button') 
var multiplication_table = document.getElementById('multiplication_table')
multiplication_button.addEventListener('click', generateTable)

function generateTable() {
    
    var base_number = Number(document.getElementById('base_number').value)
    var max_number = Number(document.getElementById('max_number').value)
    var multiplication_table = document.getElementById('multiplication_table')
    multiplication_table.innerHTML = ''
    multiplication_table.setAttribute('size', 10)

    console.log(`NUmero:${base_number}`);
    console.log(`Máximo:${max_number}`);

    if (max_number >= 0) {

        for (multiple = 0; multiple <= max_number;  multiple ++) {
            var result = document.createElement('option')
            result.innerText = `${base_number} X ${multiple} = ${base_number*multiple}`
            multiplication_table.appendChild(result) 
        }

    } else {

        window.alert('Digite um número válido')
    
    }
    
    
}


