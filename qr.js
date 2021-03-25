qrBaseName = document.getElementById('baseNameInput');
qrData = document.getElementById('dataInput');
qrImage = document.getElementById('imageInput');
qrColor = document.getElementById('colorInput');
qrType = document.getElementById('typeInput');

console.log(qrBaseName.value + qrData.value)
let baseName = 'https://example.com?store=';
let dataArray = ['1234'];

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: "https://github.com/F2BEAR",
  image: "",
  dotsOptions: {
    color: "#000",
    type: "square"
  },
});

const updateQrBaseName = () => {
  baseName = qrBaseName.value;
  console.log(baseName)
};

const updateQrData = () => {
  if (qrData.value) {
    dataArray = qrData.value.split('\n');
  }
  console.log(dataArray)
};

const updateQrImg = () => {
  newQrImage = URL.createObjectURL(qrImage.files[0]);
  console.log(newQrImage);
  qrCode.update({
    image: newQrImage
  });
};

const updateQrColor = () => {
  newQrColor = qrColor.value;
  qrCode.update({
    dotsOptions: {
      color: newQrColor
    }
  });
};

const updateQrType = () => {
  newQrType = qrType.value;
  qrCode.update({
    dotsOptions: {
      type: newQrType
    }
  });
};

const download = () => {
  dataArray.forEach(el => {
    // console.log(baseName + el);

    // prevent empty string
    if (el) {
      qrCode.update({
        data: baseName + el
      });
      qrCode.download({ name: el, extension: 'jpeg' });
    }
    
  })



  // qrCode.download({ name: 'test', extension: 'jpeg' });
}


qrCode.append(document.getElementById('canvas'));
