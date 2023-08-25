const openItem = item => {
    const container = item.closest(".team__member");
    const content = container.find(".team__member__content");
    const textBlock = container.find(".team__member__info");
    const reqHeight = textBlock.height();
    content.height(reqHeight);

    container.addClass("active");
};

const closeAll = container => {
    const items = container.find(".team__member__content");
    const itemContainer = container.find(".team__member");
    items.height(0);
    itemContainer.removeClass("active");
};

$(".team__member--name").click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest(".team__members");
    const elemContainer = $this.closest(".team__member");
    if (elemContainer.hasClass("active")) {
        closeAll(container);
    } else {
        closeAll(container);
        openItem($this);
    }
});