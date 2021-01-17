const partnerCode = 'MOMOYYZQ20201025'
const accessKey = 'LSeeBEDKVSfNuxp0'
const secretKey = 'eoEJlBDEl0IQenztGoLUy6U5weESA0iO'
const apiEndpoint = 'https://test-payment.momo.vn/gw_payment/transactionProcessor'


const form = document.getElementById('test')//.addEventListener('submit', e => console.log(e))
form.addEventListener('submit', e => {
    e.preventDefault()
    // console.log(e)

    const body = {
        requestType: 'captureMoMoWallet',
        partnerCode: 'MOMOYYZQ20201025',
        accessKey: 'LSeeBEDKVSfNuxp0',
        requestId: 'MOMO0123456789',
        amount: '500000',
        orderId: '115484165484514',
        orderInfo: 'TuanLM',
        returnUrl: 'http://127.0.0.1:5500/success.html',
        signature: 'eoEJlBDEl0IQenztGoLUy6U5weESA0iO'
    }

    axios.post(apiEndpoint, body, {headers: {"Content-Type": "application/x-www-form-urlencoded"}}).then(res => console.log(res))
})

const payment = () => {
    const body = {
        partnerCode: 'MOMOYYZQ20201025',
        accessKey: 'LSeeBEDKVSfNuxp0',
        requestId: `${(Math.random() * 100000).toFixed(6)}`,
        amount: '500000',
        orderId: `${(Math.random() * 100000).toFixed(6)}`,
        orderInfo: 'TuanLM',
        returnUrl: 'http://127.0.0.1:5500/index.html',
        notifyUrl: 'https://momo.vn',
        signature: '7fee16a3958115d80a36f4b56d4e049226e08f58856df4f59f98203ee1a95374',
        requestType: 'captureMoMoWallet',
        extraData: "email=abc@gmail.com"
    }

    const signature = CryptoJS.HmacSHA256(`partnerCode=MOMOYYZQ20201025&accessKey=LSeeBEDKVSfNuxp0`, secretKey)

    axios.post(apiEndpoint, body, {headers: {"Content-Type": "application/x-www-form-urlencoded"}}).then(res => {
        console.log(res.data)

        window.open(res.data.payUrl)
    })

    // const url = `${apiEndpoint}`

    // window.open()
}