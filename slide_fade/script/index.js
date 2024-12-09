window.onload = function(){
    let currentIndex = 0;
    const slider = document.querySelectorAll(".slide"); // 모든 이미지를 변수에 저장
    slider.forEach(img => img.style.opacity="0"); // 모든 이미지를 투명하게
    slider[0].style.opacity="1"; // 첫번째 이미지만 보이게

    setInterval(()=>{
        let nextIndex = (currentIndex + 1) % slider.length; // 1 2 0 1 2 무한반복
        slider[currentIndex].style.opacity="0"; //첫번째이미지사라짐
        slider[nextIndex].style.opacity="1"; //두번째이미지나타남
        slider.forEach(img=>img.style.transition="all 1s"); //이미지 애니메이션 추가
        currentIndex = nextIndex; //두번째 인덱스값을 현재 인덱스값에 저장
    },3000);
}