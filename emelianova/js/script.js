$(function(){
  $(".popup__input-phone").mask("8(999) 999-9999");

  

  $('.header__button').click( function(event){
    event.preventDefault();
    $('.header__popup').fadeIn(297, function(){
      $('.header__popup') 
      .css('display', 'flex')
      .animate({opacity: 1}, 198);
    });
  });

  $('.admission__button').click( function(event){
    event.preventDefault();
    $('.admission__popup').fadeIn(297,  function(){
      $('.admission__popup') 
      .css('display', 'flex')
      .animate({opacity: 1}, 198);
    });
  });

  $('#help-button').click( function(event){
    event.preventDefault();
    $('.admission__popup').fadeIn(297,  function(){
      $('.admission__popup') 
      .css('display', 'flex')
      .animate({opacity: 1}, 198);
    });
  });

  $('#projecting').click( function(event){
    event.preventDefault();
    $('#projecting-popup').fadeIn(297,  function(){
      $('#projecting-popup') 
      .css('display', 'flex')
      .animate({opacity: 1}, 198);
    });
  });

  $('#building').click( function(event){
    event.preventDefault();
    $('#building-popup').fadeIn(297,  function(){
      $('#building-popup') 
      .css('display', 'flex')
      .animate({opacity: 1}, 198);
    });
  });

  $('#pioneering').click( function(event){
    event.preventDefault();
    $('#pioneering-popup').fadeIn(297,  function(){
      $('#pioneering-popup') 
      .css('display', 'flex')
      .animate({opacity: 1}, 198);
    });
  });

  //E-mail Ajax Send
  $(".popup__form-sender").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $('.help__popup').fadeOut(297);
      $('.admission__popup').fadeOut(297);
      $('.header__popup').fadeOut(297);
      $('.header__popup-thx').fadeIn(297, function(){
        $('.header__popup-thx') 
        .css('display', 'flex')
        .animate({opacity: 1}, 198);
      });
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $(".header__popup-thx"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut(297); // скрываем его
      }
  });

   $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $(".header__popup"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut(297); // скрываем его
      }
  });

  $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $(".admission__popup"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut(297); // скрываем его
      }
  });

  $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $("#building-popup"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut(297); // скрываем его
      }
  });
  $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $("#projecting-popup"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut(297); // скрываем его
      }
  });
  $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $("#pioneering-popup"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut(297); // скрываем его
      }
  });

  $('#header-close').click( function(){
      $('.header__popup').animate({opacity: 0}, 198, function(){
        $('.header__popup').fadeOut(297);
      });
  });

  $('#header-close-thx').click( function(){
      $('.header__popup-thx').animate({opacity: 0}, 198, function(){
        $('.header__popup-thx').fadeOut(297);
      });
  });

  $('#admission-close').click( function(){
      $('.admission__popup').animate({opacity: 0}, 198, function(){
        $('.admission__popup').fadeOut(297);
      });
  });

  $('.popup__cross').click( function(){
      $('.admission__popup').animate({opacity: 0}, 198, function(){
        $('.admission__popup').fadeOut(297);
      });
  });

  $('#building-close').click( function(){
      $('#building-popup').animate({opacity: 0}, 198, function(){
        $('#building-popup').fadeOut(297);
      });
  });
  $('#projecting-close').click( function(){
      $('#projecting-popup').animate({opacity: 0}, 198, function(){
        $('#projecting-popup').fadeOut(297);
      });
  });
  $('#pioneering-close').click( function(){
      $('#pioneering-popup').animate({opacity: 0}, 198, function(){
        $('#pioneering-popup').fadeOut(297);
      });
  });

});


  