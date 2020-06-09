
/*回到顶部*/
$('#backTop').click(function () {
    $('body,html').animate({scrollTop: 0}, 400);
    return false;
});

/*监听滚动条位置*/
let $nav = $('#headNav');
let $backTop = $('.top-scroll');
// 当页面处于文章中部的时候刷新页面，因为此时无滚动，所以需要判断位置,给导航加上绿色。
showOrHideNavBg($(window).scrollTop());
$(window).scroll(function () {
    /* 回到顶部按钮根据滚动条的位置的显示和隐藏.*/
    let scroll = $(window).scrollTop();
    showOrHideNavBg(scroll);
});

function showOrHideNavBg(position) {
    let showPosition = 100;
    if (position < showPosition) {
        $nav.addClass('nav-transparent');
        $backTop.slideUp(300);
    } else {
        $nav.removeClass('nav-transparent');
        $backTop.slideDown(300);
    }
}
