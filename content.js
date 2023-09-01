function get_fml_url() {
    var element = document.querySelector(".media-viewer-plattegrond-container");
    return element && element.dataset.plattegrondSrc;
}

function getFileName()
{
    return document.URL.substring(document.URL.lastIndexOf('/', document.URL.length - 2) + 1, document.URL.length - 1) + '.fml';
}

var fml_url = get_fml_url();
if (fml_url) {
    browser.runtime.sendMessage({ message: 'fml-detected', url: fml_url, filename: getFileName() });
}
