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
      .then(msg =>{
          msg.map(e=>{
             if(e.id === 1){
                
                 let en  = e.msg
                 createData(msgen,en,'ul')
                 console.log(en)

             }else if(e.id === 2){

                let es  = e.msg
                createData(msges,es,'ul')
                console.log(es)

             }else if(e.id === 3){
                
                let pt  = e.msg
                createData(msgpt,pt,'ul')
                console.log(pt)

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

function createData(positioned,el,Obj){
    let oo = doc.createElement(`${Obj}`)
    oo.innerHTML = el
    positioned.append(oo)
}