qrBaseName = document.getElementById('baseNameInput');
qrData = document.getElementById('dataInput');
qrImage = document.getElementById('imageInput');
qrColor = document.getElementById('colorInput');
qrType = document.getElementById('typeInput');

let baseName = '';
let dataArray = [];
let color = '#000';
let type = 'square';
let image = '';
let width = 300;
let height = 300;

let qrCode = new QRCodeStyling({
  width: width,
  height: height,
  data: "https://github.com/",
  image: image,
  dotsOptions: {
    color: color,
    type: type
  },
});

const updateQrBaseName = () => {
  baseName = qrBaseName.value;
  console.log(baseName)
  qrCode.update({
    data: baseName + qrData.value.split('\n')[0]
  });
};

const updateQrData = () => {
  if (qrData.value) {
    dataArray = qrData.value.split('\n')
  }
  console.log(dataArray)
  qrCode.update({
    data: baseName + qrData.value.split('\n')[0]
  });
};

const updateQrImg = () => {
  image = URL.createObjectURL(qrImage.files[0]);
  console.log(image);
  qrCode.update({
    image: image
  });
};

const updateQrColor = () => {
  color = qrColor.value;
  qrCode.update({
    dotsOptions: {
      color: color
    }
  });
};

const updateQrType = () => {
  type = qrType.value;
  qrCode.update({
    dotsOptions: {
      type: type
    }
  });
};

function download() {
  let zip = new JSZip();
  dataArray.forEach(el => {
    console.log(baseName + el);
    // prevent empty string
    if (el) {
      qrCode2 = new QRCodeStyling({
        width: width,
        height: height,
        data: baseName + el,
        image: image,
        dotsOptions: {
          color: color,
          type: type
        },
      });
      let dataURL = qrCode2._canvas.toDataURL();
      if (dataURL) {
        zip.file(el + ".png", dataURL.split('base64,')[1], { base64: true });
      }
    }
  })
  zip.generateAsync({ type: "blob" })
    .then(function (content) {
      const link = window.URL.createObjectURL(content);
      window.location = link;
    });
}

updateQrBaseName();
updateQrData();
qrCode.append(document.getElementById('canvas'));

