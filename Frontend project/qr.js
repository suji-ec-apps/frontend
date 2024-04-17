document.getElementById('generateBtn').addEventListener('click', function() {
    var text = document.getElementById('textInput').value.trim();
    
    if (text) {
      var qr = qrcode(0, 'M');
      qr.addData(text);
      qr.make();
    
      var qrCodeElement = document.getElementById('qrcode');
      qrCodeElement.innerHTML = qr.createImgTag();
    } else {
      alert('Please enter text to generate QR code.');
    }
  });
  