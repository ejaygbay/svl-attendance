const URL = "http://localhost:3000";
let img_to_convert = document.getElementById('img-to-convert');
let img_path = '';

document.querySelector("#generate-qr-btn").addEventListener('click', (e) => {
    if (img_path.length > 0) {
        document.getElementById('generate-qr-btn').disabled = false;

        let html = `<img id="img-qr" style="height: 160px; width: 160px;" src=${img_path} alt="">`;
        makeRequest({ name: html })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.getElementById('img-qrcode').src = data.qr;
                document.getElementById('img-qrcode').style = "height: 160px; width: 160px;";
            })
    } else {
        // document.getElementById('generate-qr-btn').disabled = true;
    }
})

img_to_convert.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        img_path = window.URL.createObjectURL(e.target.files[0]);
        document.getElementById('img-preview').src = img_path;
        document.getElementById('img-preview').style = "height: 160px; width: 160px;";
        // document.getElementById('generate-qr-btn').disabled = false;
    } else {
        document.getElementById('img-preview').src = "";
        document.getElementById('img-preview').style = "height: 0px; width: 0px;";
    }
})

const makeRequest = async(data) => {
    return await fetch(`${URL}/generate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}