// 좌표 데이터를 배열로 정의
const coordinates = [
  { name: "거점", x: 38, y: 64, z: 100, memo: "중앙 거점", type: "overworld" },
  {
    name: "바다 신전",
    x: -4584,
    y: 0,
    z: -5182,
    memo: "바다 신전",
    type: "overworld",
  },
  { name: "알레이", x: 2629, y: 0, z: -471, memo: "알레이", type: "overworld" },
  {
    name: "메인 지옥문",
    x: 0,
    y: 66,
    z: 0,
    memo: "메인 지옥문",
    type: "nether",
  },
  {
    name: "지옥 바스티온",
    x: -87,
    y: 86,
    z: 140,
    memo: "바스티온",
    type: "nether",
  },
  {
    name: "엔더 드래곤",
    x: 10,
    y: 100,
    z: -10,
    memo: "엔더 드래곤의 자취",
    type: "end",
  },
];

// 테이블을 동적으로 생성하는 함수
function renderCoordinates() {
  const overworldTableBody = document.querySelector("#overworld"); // 오버월드 테이블 본문 선택
  const netherTableBody = document.querySelector("#nether"); // 네더 테이블 본문 선택
  const endTableBody = document.querySelector("#end"); // 엔더 테이블 본문 선택

  // 기존 테이블 내용 초기화
  overworldTableBody.innerHTML = "";
  netherTableBody.innerHTML = "";
  endTableBody.innerHTML = "";

  // 좌표 데이터를 순회하며 테이블에 추가
  coordinates.forEach((coord) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td class="px-6 py-4 whitespace-nowrap">${coord.name}</td>
        <td class="px-6 py-4">${coord.x}</td>
        <td class="px-6 py-4">${coord.y}</td>
        <td class="px-6 py-4">${coord.z}</td>
        <td class="px-6 py-4">
<button class="copy-btn text-sm px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
  복사
</button>
        </td>
      `;

    // 좌표의 타입에 따라 해당하는 테이블에 추가
    if (coord.type === "overworld") {
      overworldTableBody.appendChild(row);
    } else if (coord.type === "nether") {
      netherTableBody.appendChild(row);
    } else if (coord.type === "end") {
      endTableBody.appendChild(row);
    }

    // 복사 버튼 클릭 이벤트 리스너 추가
    const copyButton = row.querySelector(".copy-btn");
    copyButton.addEventListener("click", () => {
      const coordData = `이름: ${coord.name}, X: ${coord.x}, Y: ${coord.y}, Z: ${coord.z}`;
      navigator.clipboard.writeText(coordData).then(() => {
        alert("좌표가 클립보드에 복사되었습니다.");
      });
    });
  });
}

// 페이지 로드 시 좌표 정보를 테이블에 렌더링
document.addEventListener("DOMContentLoaded", renderCoordinates);
