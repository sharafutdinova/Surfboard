const isTablets = $(window).width() <= 768;
const isMobl = $(window).width() <= 480;
const measureWidth = item => {
    let reqItemWidth = 500;
    const container = item.closest(".products-menu");
    const screenWidth = $(window).width();
    const titleBlocks = container.find(".products-menu__title");
    const titleWidth = titleBlocks.width() * titleBlocks.length;
    if (isTablets) {
        reqItemWidth = screenWidth - titleWidth;
    }
    if (isMobl) {
        reqItemWidth = screenWidth - titleBlocks.width();
    }
    return {
        container: reqItemWidth,
        textContainer: ""
    }
}

const closeEveryItemInContainer = (container) => {
    const items = container.find(".products-menu__item");
    const content = container.find(".products-menu__content")

    items.removeClass("active");
    content.width(0);
}

const openContent = item => {
    const hiddenContent = item.find(".products-menu__content");
    const reqWidth = measureWidth(item);
    item.addClass("active");
    hiddenContent.width(reqWidth.container);
}

$(".products-menu__title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".products-menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".products-menu");
    if (itemOpened) {
        closeEveryItemInContainer(container);
    }
    else {
        closeEveryItemInContainer(container);
        openContent(item);
    }
})