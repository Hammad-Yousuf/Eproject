$(document).ready(function(){
    $('#closebtn').click(()=>{
        $('.header-text').hide()
    })
    $('#hidden-products .product-main-container').hide();
    $('#load-more').click(()=>{
        $('#hidden-products .product-main-container').fadeIn()
        $('#load-more').fadeOut()
    })

})

document.querySelector('.form-button').addEventListener('click', ()=>{
    function alert(){
        alert('Thank You our Agent will Contact you Soon')
    }
    alert()
    setTimeout(alert(), 1000)
})



