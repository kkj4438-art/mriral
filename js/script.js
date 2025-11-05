/**
 * 1. Swiper 갤러리 초기화 (삭제됨)
 */
// Swiper 코드는 더 이상 필요하지 않습니다.


/**
 * 2. ScrollReveal 애니메이션 초기화
 * https://scrollrevealjs.org/guide/installation.html 참고
 */
const sr = ScrollReveal({
    distance: '50px', // 스크롤 시 움직이는 거리
    duration: 1000,   // 애니메이션 지속 시간
    easing: 'ease-in-out',
    reset: false      // 요소가 다시 보일 때마다 애니메이션 재실행 여부
});

// 각 섹션에 위로 올라오는 애니메이션 적용
sr.reveal('.scroll-reveal', { 
    origin: 'bottom', // 아래에서 위로
    interval: 200     // 섹션들이 순차적으로 나타나는 간격
});

// 특정 요소에 더 디테일한 애니메이션 적용 (선택 사항)
sr.reveal('.section-hero .text-content', { origin: 'left', distance: '80px', duration: 1200 }); 
sr.reveal('.section-hero .image-content', { origin: 'right', distance: '80px', duration: 1200 });
sr.reveal('.section-menu .menu-item', { interval: 100, origin: 'bottom' });
sr.reveal('.event-hero', { origin: 'top' });
sr.reveal('.review-grid .review-item', { interval: 80, origin: 'bottom' });
sr.reveal('.section-customer-voice', { origin: 'right' });


/**
 * 3. Nav 부분 주메뉴 마우스 오버 시 서브메뉴 전체가 보여지는 기능
 * * 이 기능은 CSS의 :hover를 사용하여 구현했습니다.
 */