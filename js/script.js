//filter
$(document).ready(function () {
   let $list = $(".card-product-box .card").hide(),
      $curr;

   $(".batton")
      .on("click", function () {
         let $this = $(this);
         $this.addClass("active").siblings().removeClass("active");
         $curr = $list.filter("." + this.id).hide();
         $curr.slice(0, 4).show(400);
         $list.not($curr).hide(300);
      })
      .filter(".active")
      .click();

   $("#LoadMore").on("click", function () {
      $curr.filter(":hidden").slice(0, 4).slideToggle()
      // slideToggle()
      // .filter(":hidden") 
   });
});


//progress__line

let progressBar = document.querySelector(".js-progress-line");

document.onscroll = function () {

   let progressLine = window.scrollY / (document.body.clientHeight - window.innerHeight) * 100;

   progressBar.style.width = progressLine + '%';
};
