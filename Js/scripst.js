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
    (localStorage.getItem('lg') == 'es') ? setLanguage('en') : setLanguage('es');
    getLanguage();
    setTexts();
}
function setTexts() {
    $('.navBarChangeLanguage').text(language.changeLanguage);
    $('.navBarMainPage').text(language.mainPage);
    $('.navBarSkills').text(language.skills);
    $('.navBarPractices').text(language.practices);
    $('.navBarExperience').text(language.experience);
    $('.navBarContact').text(language.contact);
    $('.network').text(language.networking);
    $('.about').text(language.about);
    $('#indexTitle').text(language.mainPage);
    $('#skillsTitle').text(language.skills);
    $('#practicesTitle').text(language.practices);
    $('#experienceTitle').text(language.experience);
    $('#contactTitle').text(language.contact);
    $('#indiceTitulo').text(language.indexTitle);
    $('#habilidadesTitulo').text(language.skillsTitle);
    $('#practicasTitulo').text(language.practicesTitle);
    $('#experienciaTitulo').text(language.experienceTitle);
    $('#contactoTitulo').text(language.contactTitle);
    $('#myDescription').text(language.description);
    $('#proLang').text(language.proLang);
    $('#langu').text(language.langu);
    $('#dom').text(language.dom);
    $('.5y').text(language.fivey);
    $('.2y').text(language.twoy);
    $('.3m').text(language.threem);
    $('.ver').text(language.view);
    $('#xp0').text(language.xp0);
    $('#xp1').text(language.xp1);
    $('#xp2').text(language.xp2);
    $('#contactT').text(language.contactT);
    $('#nombre').text(language.nombre);
    $('#correo').text(language.correo);
    $('#date').text(language.date);
    $('#desc').text(language.desc);
    $('#pr0').text(language.pr0);
    $('#pr0d').text(language.pr0d);
    $('#pr1').text(language.pr1);
    $('#pr1d').text(language.pr1d);
    $('#pr2').text(language.pr2);
    $('#pr2d').text(language.pr2d);
    $('#pr3').text(language.pr3);
    $('#pr3d').text(language.pr3d);
    $('#pr4').text(language.pr4);
    $('#pr4d').text(language.pr4d);
    $('#pr5').text(language.pr5);
    $('#pr5d').text(language.pr5d);
    $('#pr6').text(language.pr6);
    $('#pr6d').text(language.pr6d);
    $('#pr7').text(language.pr7);
    $('#pr7d').text(language.pr7d);
    $('#pr8').text(language.pr8);
    $('#pr8d').text(language.pr8d);
}
$(document).ready(function(){
    getLanguage();
    setTexts();
});