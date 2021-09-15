var language; 
var lg;
function getLanguage() {
    (localStorage.getItem('lg') == null) ? setLanguage('es') : false;
    $.ajax({ 
    dataType: "json",
    url:  'language/' +  localStorage.getItem('lg') + '.json', 
    async: false,
    success: function (lang) { language = lang } });
    }

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    localStorage.setItem('lg', lang);
}
function toggleLanguage(){
    alert(localStorage.getItem('lg'));
    (localStorage.getItem('lg') == 'es') ? setLanguage('en') : setLanguage('es');
    getLanguage();
    setTexts();
}
function setTexts() {
    $('.navBarMainPage').text(language.mainPage);
    //$('.navBarMainPage').text("Holaaas");
    $('.navBarChangeLanguage').text(language.changeLanguage);
}
$(document).ready(function(){
    getLanguage();
    setTexts();
});