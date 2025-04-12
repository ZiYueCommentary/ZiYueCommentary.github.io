const s2t = OpenCC.Converter({ from: 'cn', to: 'tw' });
const t2s = OpenCC.Converter({ from: 'tw', to: 'cn' });

$(document).ready(function() {
    if(getCookie("tran_conv") == "true") simpToTran();
});

async function simpToTran() {
    document.cookie = "tran_conv=true; domain=ziyuesinicization.site; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walker.nextNode()) {
        const convertedText = await s2t(node.nodeValue);
        node.nodeValue = convertedText;
    }
}

async function tranToSimp() {
    document.cookie = "tran_conv=false; domain=ziyuesinicization.site; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walker.nextNode()) {
        const convertedText = await t2s(node.nodeValue);
        node.nodeValue = convertedText;
    }
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}