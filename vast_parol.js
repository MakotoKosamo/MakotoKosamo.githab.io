function handle(event){
    event.preventDefault()
    let inputs = document.querySelectorAll('input4')
    let inputValues = []
    for (let i = 0; i < inputs.length; i++){
        inputValues.push(inputs[i].value)
    }
    alert('Информация отправлена!')
    console.log(inputValues);
}

let btn = document.querySelector('button')
btn.addEventListener('click', function(event){
   handle(event)
})