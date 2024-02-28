
/**
 * text animation while scrolling
 */
document.addEventListener("scroll",(e)=>{
    document.querySelector(
        ".animasi-bg").style.transform = `translateX(${window.scrollY}px)`;
});
