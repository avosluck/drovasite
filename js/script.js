setInterval(function animation() {
  $('.knopka1,.knopka2').css('background', '#d24d57');
  setTimeout(function() {
    $('.knopka1,.knopka2').css('background', '');
  }, 1000);
}, 10000);

$(document).ready(function() {
  $("form").submit(function() {
    // Получение ID формы
    var formID = $(this).attr('id');
    // Добавление решётки к имени ID
    var formNm = $('#' + formID);
    $.ajax({
      type: "POST",
      url: 'mail.php',
      data: formNm.serialize(),
      success: function(data) {
        // Вывод текста результата отправки
        $(formNm).html(data);
      },
      error: function(jqXHR, text, error) {
        // Вывод текста ошибки отправки
        $(formNm).html(error);
      }
    });
    return false;
  });
});
