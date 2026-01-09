// === 1. 頁面切換邏輯 ===
function showSection(sectionId) {
    // 隱藏所有分頁
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.remove('active-section');
        section.classList.add('hidden-section');
    });

    // 顯示選中的分頁
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.remove('hidden-section');
        target.classList.add('active-section');
    }

    // 更新底部導航按鈕狀態
    const btns = document.querySelectorAll('.nav-btn');
    btns.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 加亮對應按鈕
    const clickedBtn = Array.from(btns).find(btn => btn.getAttribute('onclick').includes(sectionId));
    if (clickedBtn) {
        clickedBtn.classList.add('active');
    }
    
    // 回到頂部
    window.scrollTo(0, 0);
}

// === 2. 飄雪效果邏輯 ===
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    // 隨機揀雪花圖案
    snowflake.innerHTML = Math.random() > 0.5 ? '❄' : '❅';
    
    // 隨機位置、大小、透明度、速度
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5秒跌落黎
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // 10px-20px 大小
    
    document.body.appendChild(snowflake);
    
    // 跌完之後刪除 (防止電話變慢)
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// 每 200毫秒 整一粒雪花
setInterval(createSnowflake, 200);
