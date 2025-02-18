document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  // JSON 파일에서 데이터를 불러옴
  fetch("factories.json")
    .then((response) => response.json())
    .then((factories) => {
      // 공장들을 진행률에 따라 내림차순으로 정렬
      const sortedFactories = factories.sort((a, b) => b.progress - a.progress);

      const container = document.querySelector(".grid");

      // 정렬된 공장들을 HTML에 동적으로 추가
      sortedFactories.forEach((factory) => {
        const factoryCard = createFactoryCard(factory);
        container.innerHTML += factoryCard;
      });
    })
    .catch((error) => {
      console.error("Error loading factories data:", error);
    });
}

function createFactoryCard(factory) {
  return `
    <div class="bg-white rounded-lg shadow p-6">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-lg font-medium text-gray-900">${factory.name}</h3>
          <p class="text-sm text-gray-500 mt-1">X: 0 Y: 0 Z: 0</p>
        </div>
        <span class="px-2 py-1 text-sm rounded-full ${getStatusClass(
          factory.progress
        )}">${getStatusText(factory.progress)}</span>
      </div>
      <div class="mt-4">
        <div class="flex justify-between text-sm text-gray-500 mb-1">
          <span>개발 진행률</span>
          <span>${factory.progress}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-custom rounded-full h-2" style="width: ${
            factory.progress
          }%"></div>
        </div>
      </div>
    </div>
  `;
}

// 진행률에 따라 색상을 다르게 반환하는 함수
function getStatusClass(progress) {
  if (progress === 100) {
    return "bg-black text-white"; // 개발완료
  } else if (progress > 0) {
    return "bg-gray-400 text-white"; // 개발중
  } else {
    return "bg-white text-gray-800"; // 미개발
  }
}

// 진행 상태에 따른 텍스트 반환 함수
function getStatusText(progress) {
  if (progress === 100) {
    return "완료"; // 개발완료
  } else if (progress > 0) {
    return "개발중"; // 개발중
  } else {
    return "미개발"; // 미개발
  }
}
