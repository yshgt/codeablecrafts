// var console = { log: function() {} }; // comment out for production mode

function Main() {
  this.init();
}

Main.prototype.init = function() {
  // modal
  var modalButtons = document.querySelectorAll('img.modal-button');
  var modalWindow = document.getElementById('modal-image');
  var clickFunc = function(){
    modalWindow.querySelector('img').setAttribute('src', this.src);
    modalWindow.classList.add('is-active');
  };
  var i, len;
  for(i = 0, len = modalButtons.length; i < len; i++){
    var item = modalButtons[i];
    item.addEventListener('click', clickFunc);
  }

  var modalCloses = modalWindow.querySelectorAll('.click-close');
  var closeModalFunc = function(){
    modalWindow.classList.remove('is-active');
  };
  for(i = 0, len = modalCloses.length; i < len; i++){
    var m = modalCloses[i];
    m.addEventListener('click', closeModalFunc);
  }

  //download
  var lang = this.getUserLanguage();
  var link = document.getElementById('appstore');
  var url = this.getAppstoreUrl(lang);
  link.setAttribute('href', url);
};

Main.prototype.getAppstoreUrl = function(lang){
  var base = [
    'https://itunes.apple.com',
    // '/jp',
    '/app/codeable-crafts/id1050901522?mt=8'
  ];
  if(lang === 'ja'){
    return base[0] + '/jp' + base[1];
  } else {
    return base[0] + base[1];
  }
};

Main.prototype.getUserLanguage = function(){
  return (window.navigator.languages && window.navigator.languages[0]) || window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage;
};


window.onload = function() {
  window.main = new Main();
};
