// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '70%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "경주 여행! 놀이기구가 무서워도 친구와 함께라면 탈 수 있어" },
  { "number": 2, "message": "친구가 된지 10년만에 부산여행 언제나 이 자리에서 널 바라볼게" },
  { "number": 3, "message": "너랑 간 곳들은 기억에 깊게 남아! 내년에도 같이 놀자" },
  { "number": 4, "message": "당신은 나의 동반자, 영원한 나의 동반자" },
  { "number": 5, "message": "일하다가 힘들어도 벚꽃산책으로 피로가 사악 풀림" },
  { "number": 6, "message": "사진에 없는 미진이까지 308호 많이많이 사랑해" },
  { "number": 7, "message": "회사 옥상에서 담배 대신 비눗방울을 불어요 후후" },
  { "number": 8, "message": "아 회사 다니기 참 잘했어 우리 주주들을 만났잖아?" },
  { "number": 9, "message": "FA 대어는 일단 회사를 나와요, 일단 퇴사합니다!" },
  { "number": 10, "message": "그래서 누가 배 살건데 누가 섬 살건데 내가 손님할게" },
  { "number": 11, "message": "판다보러 가자고 뭉친 몽글몽골이들 우리한테 너무 작은 아마존 의자" },
  { "number": 12, "message": "오랜만에 가족 여행 westlife mylove 앨범 표지로 써야할 듯" },
  { "number": 13, "message": "눈이 탁 트였던 몽골 여행! 몽글몽골이들 신년회 열자!!" },
  { "number": 14, "message": "수많은 별이 머리위로 쏟아질 때 서로의 온기에 기대어 있던 밤을 기억해" },
  { "number": 15, "message": "원래도 꽃을 좋아하니까 뜬금없이 제게 꽃을 줘도 괜찮아요" },
  { "number": 16, "message": "너랑 노는 날은 하루가 참 짧아. 항상 아낀다!" },
  { "number": 17, "message": "벌써 1년?! 독립프렌즈들 느슨하게 오래봐요" },
  { "number": 18, "message": "새벽에 운동으로 만나게 된게 올해 나한테 찾아온 큰 행운! 개강파티 하자" },
  { "number": 19, "message": "이거 보면 나랑도 놀아줘요 맨날 바빠! 많은 가르침들에 감사합니다" },
  { "number": 20, "message": "더할 나위 없이 즐거웠던 시간! 다들 또 모여서 운동해요 우리" },
  { "number": 21, "message": "달리기 헤이러도 행복하게 산책했던 맹방해변, 스파르탄! 아우!" },
  { "number": 22, "message": "고맙고 보고싶고 좋아하고 행복하고 사랑하고 기쁨에 가득찬 예쁜 감정들만 차곡차곡 모아서 선물해줄거야" },
  { "number": 23, "message": "째리 바이브에 둥둥 몸을 맡기고 떠다니는 중 내년에도 나랑 운동하고 놀아주기야" },
  { "number": 24, "message": "메리크리스마스! 즐거운 연말 보내시길 바라요" }
];

// 전역에서 한 번만 실행되도록 클릭 이벤트 리스너를 등록
const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
  door.addEventListener('click', () => {
    // 상위 div의 class 번호를 찾아서 image url에 사용합니다
    const imageUrl = `image/card/card-${index + 1}.jpg`;

    // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
    const doorDiv = document.querySelector(`.day-${index + 1}`)
    const backDiv = doorDiv.querySelector(`.back`);

    const style = window.getComputedStyle(backDiv);
    const pTag = backDiv.querySelector('p')
    const text = modalMessageList[index]['message']

    // showModal 함수를 호출하여 모달을 표시합니다.
    showModal(imageUrl, text);
    // alert('이벤트 캘린더를 엽니다.');
  });
});