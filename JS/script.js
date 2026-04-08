const pageFlip = new St.PageFlip(
    document.getElementById('flipbook'),
    {
        width: 417,
        height: 590,
        showCover: true,
        mobileScrollSupport: false,
        drawShadow: true,
        flippingTime: 800,
        usePortrait: false,
    }
);

pageFlip.loadFromHTML(document.querySelectorAll('.page'));