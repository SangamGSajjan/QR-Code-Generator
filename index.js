var qr;

(function () {
  qr = new QRious({
    element: document.getElementById("qr-code"),
    size: 500,
  });
})();

function generateQRCode() {
  var qrtext = document.getElementById("qr-text").value;
  document.getElementById("qr-result").innerHTML =
    "QR code for " + qrtext + ":";

  qr.set({
    foreground: "black",
    size: 500,
    value: qrtext,
  });

  // Save the QR text to localStorage
  localStorage.setItem("qrText", qrtext);
}

function loadQRCode() {
  // Load the QR text from localStorage
  var savedQRText = localStorage.getItem("qrText");

  // Restore the QR text input value
  if (savedQRText) {
    document.getElementById("qr-text").value = savedQRText;
    generateQRCode(); // Regenerate the QR code
  }
}
function downloadQRCode() {
  // Get the data URL of the generated QR code
  var qrDataURL = qr.toDataURL("image/png");

  // Create a temporary anchor element to trigger the download
  var link = document.createElement("a");
  link.href = qrDataURL;
  link.download = "qrcode.png"; // Specify the file name
  link.click();
}
