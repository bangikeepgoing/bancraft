// 좌표 데이터를 fetch로 가져오는 함수
function loadCoordinates() {
  fetch("coordinates.json") // JSON 파일의 경로를 지정
    .then((response) => response.json()) // JSON 데이터를 파싱
    .then((coordinates) => renderCoordinates(coordinates)) // 좌표 데이터를 렌더링 함수에 전달
    .catch((error) => console.error("Error loading coordinates:", error)); // 에러 처리
}

// 테이블을 동적으로 생성하는 함수
function renderCoordinates(coordinates) {
  const overworldTableBody = document.querySelector("#overworld"); // 오버월드 테이블 본문 선택
  const netherTableBody = document.querySelector("#nether"); // 네더 테이블 본문 선택
  const endTableBody = document.querySelector("#end"); // 엔더 테이블 본문 선택

  // 기존 테이블 내용 초기화
  overworldTableBody.innerHTML = "";
  netherTableBody.innerHTML = "";
  endTableBody.innerHTML = "";

  // 좌표 데이터를 반복하여 테이블에 추가
  coordinates.forEach((coord) => {
    const row = document.createElement("tr");

    row.innerHTML = `
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-['GongGothicMedium']">${coord.name}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-['GongGothicMedium']">${coord.x}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-['GongGothicMedium']">${coord.y}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-['GongGothicMedium']">${coord.z}</td>
  `;
  

    // 좌표의 타입에 따라 해당하는 테이블에 추가
    if (coord.type === "overworld") {
      overworldTableBody.appendChild(row);
    } else if (coord.type === "nether") {
      netherTableBody.appendChild(row);
    } else if (coord.type === "end") {
      endTableBody.appendChild(row);
    }
  });
}

// 페이지 로드 시 좌표 정보를 JSON 파일에서 로드하고 테이블에 렌더링
document.addEventListener("DOMContentLoaded", loadCoordinates);
