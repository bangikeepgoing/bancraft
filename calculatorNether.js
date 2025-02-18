function openPopup() {
    window.open(
      "popup.html",
      "좌표 계산기",
      "width=400,height=600,noopener,noreferrer"
    );
  }
  
function convertCoordinates() {
    const dimension = document.getElementById("dimension").value;
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    const z = parseFloat(document.getElementById("z").value);
    const resultElement = document.getElementById("result");

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        resultElement.textContent = "올바른 숫자를 입력하세요.";
        resultElement.classList.add("text-red-400");
        return;
    }

    let newX, newZ;
    
    if (dimension === "toNether") {
        newX = x / 8;
        newZ = z / 8;
        resultElement.textContent = `네더 좌표: X=${newX.toFixed(2)}, Y=${y}, Z=${newZ.toFixed(2)}`;
    } else {
        newX = x * 8;
        newZ = z * 8;
        resultElement.textContent = `오버월드 좌표: X=${newX.toFixed(2)}, Y=${y}, Z=${newZ.toFixed(2)}`;
    }
    
    resultElement.classList.remove("text-red-400");
    resultElement.classList.add("text-green-400");
}
