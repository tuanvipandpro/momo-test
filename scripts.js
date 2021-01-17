const partnerCode = 'MOMOYYZQ20201025'
const accessKey = 'LSeeBEDKVSfNuxp0'
const secretKey = 'eoEJlBDEl0IQenztGoLUy6U5weESA0iO'
const apiEndpoint = 'https://test-payment.momo.vn/gw_payment/transactionProcessor'


const form = document.getElementById('test')//.addEventListener('submit', e => console.log(e))
// form.addEventListener('submit', e => {
//     e.preventDefault()
//     // console.log(e)

//     const body = {
//         requestType: 'captureMoMoWallet',
//         partnerCode: 'MOMOYYZQ20201025',
//         accessKey: 'LSeeBEDKVSfNuxp0',
//         requestId: 'MOMO0123456789',
//         amount: '500000',
//         orderId: '115484165484514',
//         orderInfo: 'TuanLM',
//         returnUrl: 'http://127.0.0.1:5500/success.html',
//         signature: 'eoEJlBDEl0IQenztGoLUy6U5weESA0iO'
//     }

//     axios.post(apiEndpoint, body, {headers: {"Content-Type": "application/x-www-form-urlencoded"}}).then(res => console.log(res))
// })

const payment = () => {
    const body = {
        partnerCode: partnerCode,
        accessKey: accessKey,
        requestId: `${(Math.random() * 100000).toFixed(0)}`,
        amount: `${(Math.random() * 100000).toFixed(0)}`,
        orderId: `${(Math.random() * 100000).toFixed(0)}`,
        orderInfo: 'TuanLM',
        returnUrl: 'http://127.0.0.1:5500/success.html',
        notifyUrl: 'https://momo.vn',
        signature: '',
        requestType: 'captureMoMoWallet',
        extraData: "email=abc@gmail.com"
    }

    body.signature = sha256.hmac(secretKey, `partnerCode=${body.partnerCode}&accessKey=${body.accessKey}&requestId=${body.requestId}&amount=${body.amount}&orderId=${body.orderId}&orderInfo=TuanLM&returnUrl=${body.returnUrl}&notifyUrl=https://momo.vn&extraData=email=abc@gmail.com`)

    axios.post(apiEndpoint, body, {headers: {"Content-Type": "application/x-www-form-urlencoded"}}).then(res => {
        console.log(res.data)
        res.data.payUrl && window.open(res.data.payUrl, '_self')
    })
}