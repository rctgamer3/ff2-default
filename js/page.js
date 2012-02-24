//var _gaq = [];
//_gaq.push(['_setAccount', 'UA-29424997-1']);
//_gaq.push(['_trackPageview',location.pathname+location.hash]);
(function(){
  var d = document;
  function $(s){return d.querySelector(s, d.body)}
  function id(i){return $('[data-id='+i+']')}
  function a(i){return $('[href="#'+i+'"]')}
  window.addEventListener('hashchange', function(e) {
    var next = e.newURL.match(/#(.*)$/)[1];
    if(id(next)) {
      _gaq.push(['_trackPageview',location.pathname+location.hash]);
      $('.active').className = null;
      $('.on').className = null;
      id(next).className = 'active';
      a(next).className = 'on';
    }
  }, false);
  d.addEventListener('DOMContentLoaded', function loaded() {
    var hash, el;
    d.removeEventListener('DOMContentLoaded', loaded, false);
    $('.install').addEventListener('click', function() {
      _gaq.push(['_trackEvent','Links','Install']);
    }, false);
    $('a[href$=changelog]').addEventListener('click', function() {
      _gaq.push(['_trackEvent','Links','Changelog']);
    }, false);
    $('a[href$=issues]').addEventListener('click', function() {
      _gaq.push(['_trackEvent','Links','GitHub Issues']);
    }, false);
    hash = window.location.hash.slice(1) || 'install';
    el = id(hash) || id('install');
    el.className = 'active';
    a(el.dataset.id).className = 'on';
  }, false);
})();