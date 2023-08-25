const findBlockByAlias = alias => {
    return $(".reviews__item").filter((ndx, item) => {
        return $(item).attr("data-linked-with") === alias;
    });
};

$(".reviews__switcher__link").click(e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const curItem = $this.closest(".interactive-avatar");
    const target = $this.attr("data-open");
    const itemToShow = findBlockByAlias(target);
    console.log(itemToShow);

    curItem.addClass("interactive-avatar--active").siblings().removeClass("interactive-avatar--active");
    itemToShow.addClass("active").siblings().removeClass("active");
});