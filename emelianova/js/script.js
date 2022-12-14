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

  $(document).mouseup(function (e){ // ?????????????? ?????????? ???? ??????-??????????????????
      var div = $(".header__popup-thx"); // ?????? ?????????????????? ID ????????????????
      if (!div.is(e.target) // ???????? ???????? ?????? ???? ???? ???????????? ??????????
          && div.has(e.target).length === 0) { // ?? ???? ???? ?????? ???????????????? ??????????????????
        div.fadeOut(297); // ???????????????? ??????
      }
  });

   $(document).mouseup(function (e){ // ?????????????? ?????????? ???? ??????-??????????????????
      var div = $(".header__popup"); // ?????? ?????????????????? ID ????????????????
      if (!div.is(e.target) // ???????? ???????? ?????? ???? ???? ???????????? ??????????
          && div.has(e.target).length === 0) { // ?? ???? ???? ?????? ???????????????? ??????????????????
        div.fadeOut(297); // ???????????????? ??????
      }
  });

  $(document).mouseup(function (e){ // ?????????????? ?????????? ???? ??????-??????????????????
      var div = $(".admission__popup"); // ?????? ?????????????????? ID ????????????????
      if (!div.is(e.target) // ???????? ???????? ?????? ???? ???? ???????????? ??????????
          && div.has(e.target).length === 0) { // ?? ???? ???? ?????? ???????????????? ??????????????????
        div.fadeOut(297); // ???????????????? ??????
      }
  });

  $(document).mouseup(function (e){ // ?????????????? ?????????? ???? ??????-??????????????????
      var div = $("#building-popup"); // ?????? ?????????????????? ID ????????????????
      if (!div.is(e.target) // ???????? ???????? ?????? ???? ???? ???????????? ??????????
          && div.has(e.target).length === 0) { // ?? ???? ???? ?????? ???????????????? ??????????????????
        div.fadeOut(297); // ???????????????? ??????
      }
  });
  $(document).mouseup(function (e){ // ?????????????? ?????????? ???? ??????-??????????????????
      var div = $("#projecting-popup"); // ?????? ?????????????????? ID ????????????????
      if (!div.is(e.target) // ???????? ???????? ?????? ???? ???? ???????????? ??????????
          && div.has(e.target).length === 0) { // ?? ???? ???? ?????? ???????????????? ??????????????????
        div.fadeOut(297); // ???????????????? ??????
      }
  });
  $(document).mouseup(function (e){ // ?????????????? ?????????? ???? ??????-??????????????????
      var div = $("#pioneering-popup"); // ?????? ?????????????????? ID ????????????????
      if (!div.is(e.target) // ???????? ???????? ?????? ???? ???? ???????????? ??????????
          && div.has(e.target).length === 0) { // ?? ???? ???? ?????? ???????????????? ??????????????????
        div.fadeOut(297); // ???????????????? ??????
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


  