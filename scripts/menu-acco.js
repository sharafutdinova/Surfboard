const isTablets = window.matchMedia("(max-width: 768px)").matches;
const isMobl = window.matchMedia("(max-width: 480px)").matches;
const screenWidth = $(window).width();
const container = item.closest(".products-menu");
const titleBlocks = container.find(".products-menu__title");
const measureWidth = item => {
    let reqItemWidth = 0;
    const container = item.closest(".products-menu");
    const titleBlocks = container.find(".products-menu__title");
    const titleWidth = titleBlocks.width() * titleBlocks.length;
    if (isTablets) {
        reqItemWidth = screenWidth - titleWidth;
    }
    if (isMobl) {
        reqItemWidth = screenWidth - titleBlocks.width();
    }
    else reqItemWidth = 500;
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