var count_button = document.getElementById('count_button')
count_button.addEventListener('click', startCount)
var results = document.getElementById('results')

function startCount() {

    var initial_number = Number(document.getElementById('begin').value)
    var stop_number = Number(document.getElementById('end').value)
    var step_number = Number(document.getElementById('step').value)
    results.innerHTML = '<p>Contamos:</p>'

    console.log(`${initial_number}, ${stop_number}, ${step_number}`); 

    if (initial_number < stop_number){
            //CONTAGEM CRESCENTE
            var count_type = 'Contagem crescente'       
    }    
         else if (initial_number > stop_number){
            //CONTAGEM DECRESCENTE
            var count_type = 'Contagem decrescente'
    }

    console.log(`${count_type}`);

    if (step_number == 0) {
        //PASSO ZERO
        console.log(`Preencha o tamanho do passo`);
        results.innerHTML = (`<p>Preencha o campo Passo</p>`)
        
    } else if (step_number > 0){
        //PASSO POSITIVO

        if (initial_number < stop_number) {
            //CRESCENTE
            
            for (initial_number; initial_number < stop_number; initial_number += step_number) {
            
            console.log(`Contamos ${initial_number} `);   
            results.innerHTML += `${initial_number} \u{1F449} `
            
            }

        } else if (initial_number > stop_number) {
            //DECRESCENTE

            for (initial_number; initial_number > stop_number; initial_number -= step_number) {
            
            console.log(`Contamos ${initial_number}`);   
            results.innerHTML += `${initial_number} \u{1F449} `
            }
        }

    } else if (step_number < 0){
        //PASSO NEGATIVO

        if (initial_number < stop_number) {
            //CRESCENTE
            
            for (initial_number; initial_number < stop_number; initial_number -= step_number) {
            
            console.log(`Contamos ${initial_number}`);   
            results.innerHTML += `${initial_number} \u{1F449} `
            
            }

        } else if (initial_number > stop_number) {
            //DECRESCENTE

            for (initial_number; initial_number > stop_number; initial_number += step_number) {
            
            console.log(`Contamos ${initial_number}`);   
            results.innerHTML += `${initial_number} \u{1F449} `
            }
        }

    } 

    if (count_type == 'Contagem crescente') {

        if (initial_number <= stop_number) {
            console.log(`Contamos ${initial_number}`);   
            results.innerHTML += `${initial_number}`
        } 

    } else if (count_type == 'Contagem decrescente') {

        if (initial_number >= stop_number) {
            console.log(`Contamos ${initial_number}`);   
            results.innerHTML += `${initial_number}`
        } 

    }   
    
    if (step_number != 0) {
        console.log(`Terminamos de contar!`);   
        results.innerHTML += `<p>Fim da contagem \u{1F3C1}</p>`
    }
    
}