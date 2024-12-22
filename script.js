function handle(event){
    event.preventDefault()
    let inputs = document.querySelectorAll('input')
    let inputValues = []
    for (let i = 0; i < inputs.length; i++){
        inputValues.push(inputs[i].value)
    }
    alert('Данные отправлены!')
    console.log(inputValues);
}

let btn2 = document.querySelector('button')
btn2.addEventListener('click', function(event){
    handle(event)
})