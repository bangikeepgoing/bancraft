// xyz.js

// 좌표 데이터를 배열로 정의
const coordinates = [
  { name: "거점", x: 38, y: 64, z: 100, memo: "중앙 거점" },
  { name: "바다 신전", x: -4584, y: 0, z: -5182, memo: "바다 신전" },
  { name: "알레이", x: 2629, y: 0, z: -471, memo: "알레이" },
  { name: "메인 지옥문", x: 0, y: 66, z: 0, memo: "메인 지옥문" },
  { name: "지옥 바스티온", x: -87, y: 86, z: 140, memo: "바스티온" },
];

// 테이블을 동적으로 생성하는 함수
function renderCoordinates() {
  const tableBody = document.querySelector("table tbody"); // 테이블 본문 선택

  // 기존 테이블 내용 초기화
  tableBody.innerHTML = "";

  // 좌표 데이터를 순회하며 테이블에 추가
  coordinates.forEach((coord) => {
    const row = document.createElement("tr");

    // 각 좌표 데이터를 테이블 행에 추가
    row.innerHTML = `
        <td class="px-6 py-4 whitespace-nowrap">${coord.name}</td>
        <td class="px-6 py-4">${coord.x}</td>
        <td class="px-6 py-4">${coord.y}</td>
        <td class="px-6 py-4">${coord.z}</td>
        <td class="px-6 py-4">${coord.memo}</td>
      `;

    tableBody.appendChild(row); // 생성된 행을 테이블에 추가
  });
}

// 페이지 로드 시 좌표 정보를 테이블에 렌더링
window.onload = renderCoordinates;
