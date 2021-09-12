let doc = document
doc.onclick = addEventListener('click',(e)=>e.preventDefault())
doc.onload  = addEventListener('load', ( )=>{
    $('#errorcard').hide()
    //$('#card').hide()
})