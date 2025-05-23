document.getElementById("codeForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const inputCode = document.getElementById("serial").value.trim().toUpperCase();
  const message = document.getElementById("message");

  if (inputCode.length !== 6) {
    message.textContent = "6桁のコードを入力してください。";
    return;
  }

  const response = await fetch("UKIcordlst.csv");
  const text = await response.text();
  const codes = text.split("\n").map(line => line.trim());

  if (!codes.includes(inputCode)) {
    message.textContent = "コードが見つかりませんでした。";
    return;
  }

  const prefix = inputCode.slice(0, 2);
  let redirectUrl = "";

  switch (prefix) {
    case "BR":
      redirectUrl = "https://photos.app.goo.gl/peM4DP9JWJD5eP2D8";
      break;
    case "AS":
      redirectUrl = "https://photos.app.goo.gl/TAAc2THfZTaKC96g9";
      break;
    case "BN":
      redirectUrl = "https://photos.app.goo.gl/8PNiCH55RYK7z3AT6";
      break;
    case "ID":
      redirectUrl = "https://photos.app.goo.gl/S85W5xfgkVdm1f5e8";
      break;
    default:
      message.textContent = "対応するURLが見つかりませんでした。";
      return;
  }

  window.location.href = redirectUrl;
});
