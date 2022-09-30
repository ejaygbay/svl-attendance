const QRCode = require('qrcode');

const servicesView = (req, res) => {
    res.render('services');
}

const qrCode = (req, res) => {
    res.render('qr-code', {
        page: 'qrcode'
    });
}

const generateQRCodeView = (req, res) => {
    console.log(req.query.type)
    if (req.query.type === 'id-card') {
        res.render('generate-qrcode', {
            page: 'qrcode'
        });
    } else {
        res.render('generate-qrcode', {
            page: 'qrcode'
        });
    }
}

const generateQRCode = (req, res) => {
    console.log("QR Loaded", req.body);
    var segs = [
        { data: 'ABCDEFG', mode: 'alphanumeric' },
        { data: '0123456', mode: 'numeric' }
    ]

    QRCode.toDataURL(segs, function(err, url) {
        res.send({
            status: 0,
            msg: "QR generated",
            qr: url
        })
    })

    // QRCode.toDataURL(req.body.name, function(err, url) {
    //     res.send({
    //         status: 0,
    //         msg: "QR generated",
    //         qr: url
    //     })
    // })
}

const generateCode = () => {
    // Creating the data
    let data = {
        name: "Employee Name",
        age: 27,
        department: "Police",
        id: "aisuoiqu3234738jdhf100223"
    }

    // Converting the data into String format
    let stringdata = JSON.stringify(data)

    // // Print the QR code to terminal
    // QRCode.toString(stringdata, { type: 'terminal' },
    //     function(err, QRcode) {

    //         if (err) return console.log("error occurred")

    //         // Printing the generated code
    //         console.log(QRcode)
    //     })

    // Converting the data into base64
    QRCode.toDataURL(stringdata, function(err, code) {
        if (err) return console.log("error occurred")

        // Printing the code
        console.log(code)
    })
}

// generateCode()

module.exports = {
    servicesView,
    qrCode,
    generateQRCodeView,
    generateQRCode
}