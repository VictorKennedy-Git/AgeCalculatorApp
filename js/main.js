let dia = document.querySelector('input#dia')

let mes = document.querySelector('input#mes')

let ano = document.querySelector('input#ano')

//TRATATIVA DE ERRO
document.querySelector('svg#action').addEventListener('click', () => {
    let alertinputdia = document.querySelector('input#dia')
    alertinputdia.style.borderColor = ""

    let alertinputmes = document.querySelector('input#mes')
    alertinputmes.style.borderColor = ""

    let alertinputano = document.querySelector('input#ano')
    alertinputano.style.borderColor = ""

    let SpanErroDay = document.querySelector('span.span-day-erro')
    SpanErroDay.style.display = 'none'

    let SpanErroMonth = document.querySelector('span.span-month-erro')
    SpanErroMonth.style.display = 'none'

    let SpanErroYear = document.querySelector('span.span-year-erro')
    SpanErroYear.style.display = 'none'

    if (mes.value == 2 && dia.value > 29 || dia.value == 0) {
        SpanErroDay.style.display = 'block'
        alertinputdia.style.borderColor = "#ff5757"
    } if (mes.value != 2 && dia.value > 31 || dia.value == 0) {
        SpanErroDay.style.display = 'block'
        alertinputdia.style.borderColor = "#ff5757"
    } if (mes.value == 0 || mes.value > 12) {
        SpanErroMonth.style.display = 'block'
        alertinputmes.style.borderColor = "#ff5757"
    } if (ano.value == 0) {
        SpanErroYear.style.display = 'block'
        alertinputano.style.borderColor = "#ff5757"
    }

    let resultAnoText = document.querySelector('span#TextAno')
    let resultMesText = document.querySelector('span#TextMes')
    let resultDiaText = document.querySelector('span#TextDia')


    function calc() {
        let today = new Date()
        let year = today.getFullYear()
        let month = today.getMonth()
        let day = today.getUTCDate()

        let date1 = `${month}/${day}/${year}`

        let date2 = `${parseInt(mes.value)}/${parseInt(dia.value)}/${parseInt(ano.value)}`

        let datepast = new Date(date2)
        let datetoday = new Date(date1)

        console.log(datepast)
        console.log(datetoday)

        let resultcomplet = datepast.getTime() - datetoday.getTime()
        
        const days = Math.ceil(resultcomplet / (1000 * 60 * 60 * 24));

        console.log(days)


        // const dataSplit = datesistem.split('/')

        // const dayinput = dataSplit[2]
        // const mesinput = dataSplit[1] 
        // const anoinput = dataSplit[0]
    }
    calc()
})

