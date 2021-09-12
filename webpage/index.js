let doc = document
doc.onclick = addEventListener('click',(e)=>e.preventDefault())
doc.onload  = addEventListener('load', ( )=>{
    $('#errorcard').hide()
})

function loadDataTest(){
    const msgpt = doc.querySelector('#msgpt')

    let url = 'https://app-bemvindo.herokuapp.com'
    
    fetch(url,{
        method:'GET'
    }).then(msg => msg.text())
      .then(msg => {

            let message = msg.substring(8,31)
            let ul = doc.createElement('ul')
            ul.append(message)
            msgpt.append(ul)

      })
      .catch(err =>{
            $('#card').hide()
            $('#errorcard').show(100)
      })
}

//loadDataTest()

function loadData(){
    const msgpt = doc.querySelector('#msgpt')
    const msgen = doc.querySelector('#msgen')
    const msges = doc.querySelector('#msges')

    let url = 'https://app-bemvindo.herokuapp.com/hello-heroku'
    
    fetch(url,{
        method:'GET'
    }).then(msg => msg.json())
      .then(msg => {
            msg.map(e=>{
                if(e.id === 1){
                    let en = e.id
                    let ulen = doc.createElement('ul')
                    ulen.append(en)
                    msgen.append(ulen)
                }else if(e.id === 2){
                    let esp = e.id
                    let ules = doc.createElement('ul')
                    ules.append(esp)
                    msges.append(ules)
                }else if(e.id === 3){
                    let ptbr = e.id
                    let ulpt = doc.createElement('ul')
                    ulpt.append(ptbr)
                    msgpt.append(ulpt)
                }
            })
      })
      .catch(err =>{
            $('#card').hide()
            $('#errorcard').show(100)
            console.log(err)
      })
}

loadData()

function Erro(){
    let erro = doc.querySelector('#erro')
    erro.innerHTML = 'Erro 500: houve um erro no servidor!'
}

Erro()