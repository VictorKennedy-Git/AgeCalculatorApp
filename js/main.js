//TRATATIVA DE ERRO
document.querySelector('svg#action').addEventListener('click', () => {
    //DADOS DOS INPUTS
    let dia = document.querySelector('input#dia')

    let mes = document.querySelector('input#mes')

    let ano = document.querySelector('input#ano')

    //TEXTO DE RESULTADO
    let resultMesText = document.querySelector('span#TextMes')

    let resultAnoText = document.querySelector('span#TextAno')

    let resultDiaText = document.querySelector('span#TextDia')


    function calc() {
        /*
        //Primeira Lógica
        let today = new Date()
        // let year = today.getFullYear()
        // let month = today.getMonth()
        // let day = today.getUTCDate()

        // let date1 = `${month}/${day}/${year}`

        // let date2 = `${parseInt(mes.value)}/${parseInt(dia.value)}/${parseInt(ano.value)}`

        // let datepast = new Date(date2)
        // let datetoday = new Date(date1)

        // console.log(datepast)
        // console.log(datetoday)

        // let resultcomplet = datepast.getTime() - datetoday.getTime()
        
        // const days = Math.ceil(resultcomplet / (1000 * 60 * 60 * 24));

        // console.log(days)


        // const dataSplit = datesistem.split('/')

        // const dayinput = dataSplit[2]
        // const mesinput = dataSplit[1] 
        // const anoinput = dataSplit[0]
        */

        //SELEÇÃO DOS INPUTS E REEDIÇÃO DE COR
        let alertinputdia = document.querySelector('input#dia')
        alertinputdia.style.borderColor = ""

        let alertinputmes = document.querySelector('input#mes')
        alertinputmes.style.borderColor = ""

        let alertinputano = document.querySelector('input#ano')
        alertinputano.style.borderColor = ""

        //SELEÇÃO DAS LABEL PARA EDIÇÃO
        let labelAlertDay = document.querySelector('label[For="day"]')
        labelAlertDay.style.color = ""

        let labelAlertMonth = document.querySelector('label[For="month"]')
        labelAlertMonth.style.color = ""

        let labelAlertYear = document.querySelector('label[For="year"]')
        labelAlertYear.style.color = ""

        //EDIÇÃO DE ERRO DO SPAN
        let SpanErroDay = document.querySelector('span.span-day-erro')
        SpanErroDay.style.display = 'none'

        let SpanErroMonth = document.querySelector('span.span-month-erro')
        SpanErroMonth.style.display = 'none'

        let SpanErroYear = document.querySelector('span.span-year-erro')
        SpanErroYear.style.display = 'none'

        function erro() {
            console.log('Coloque um Dado válido no campo informado')

            labelAlertDay.style.color = '#ff5757'
            labelAlertMonth.style.color = '#ff5757'
            labelAlertYear.style.color = '#ff5757'

            alertinputdia.style.borderColor = "#ff5757"
            alertinputmes.style.borderColor = "#ff5757"
            alertinputano.style.borderColor = "#ff5757"
        }
        const date = new Date()
        const anohoje = date.getFullYear()
        if (mes.value == 2 && dia.value > 29 || dia.value == 0) {
            SpanErroDay.style.display = 'block'
            alertinputdia.style.borderColor = "#ff5757"
            return erro()
        } if (mes.value != 2 && dia.value > 31 || dia.value == 0) {
            SpanErroDay.style.display = 'block'
            alertinputdia.style.borderColor = "#ff5757"
            return erro()
        } if (mes.value == 0 || mes.value > 12) {
            SpanErroMonth.style.display = 'block'
            alertinputmes.style.borderColor = "#ff5757"
            return erro()
        } if (ano.value == 0 || ano.value < 1582 || ano.value > anohoje) {
            SpanErroYear.style.display = 'block'
            alertinputano.style.borderColor = "#ff5757"
            return erro()
        } else {

            const today = new Date()

            const nascDate = new Date(ano.value, mes.value - 1, dia.value)

            let anos = today.getFullYear() - nascDate.getFullYear();
            let meses = today.getMonth() - nascDate.getMonth();
            let dias = today.getDate() - nascDate.getDate();

            if (dias < 0) {
                meses--;
                const ultimoDiaMesAnterior = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
                dias = ultimoDiaMesAnterior + dias;
            }

            if (meses < 0) {
                anos--;
                meses = 12 + meses;
            }

            function textedited() {
                resultAnoText.innerText = `${anos > 0?anos:0}`
                resultMesText.innerText = `${meses} `
                resultDiaText.innerText = `${dias}`
            }
            return textedited()
        }
    }
    calc()
})


