var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});






let modal = document.getElementsByClassName('modal')
let btnPrimary = document.getElementById('save')


btnPrimary.addEventListener('click', () => {

    alert("thank Your")
    modal.style.display = 'none'
})


{/* <div class="review-box">
<img src="images/pic-2.png" alt="">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eveniet facilis, modi
    aperiam provident
    fuga a. Impedit, error dignissimos? Praesentium ex voluptatem libero odio nam?</p>
<div class="stars">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>

</div>
<h4>John Deo</h4>
<h6>satisfied clients</h6>
</div> */}










