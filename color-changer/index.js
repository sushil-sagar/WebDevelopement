
const buttons = document.querySelectorAll('.button')
const body= document.querySelectorAll('body')

buttons.forEach(function(button){
    button.addEventListener( 'click', function(e){ 
        if(e.target.id === 'grey'){
            body.style.backgroundColor='#707070'
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor='rgb(255, 136,  92)'
        }else if (e.target.id ==="blue") {      
           body.style.backgroundColor='#486bef'
        } else {
            body.style.backgroundColor='white'
        }
    })
})