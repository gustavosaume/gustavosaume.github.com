//=require bootstrap-all
$(document).ready(function() {

  $(".btn").click(function(e) {
    $(e.currentTarget).button('loading');
    setTimeout(function () {
      $(e.currentTarget).button('reset');
    }, 3000);
  });
});