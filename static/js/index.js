exports.postAceInit = function(name, context){
  var padOuter = $('iframe[name="ace_outer"]').contents();
  var padInner = padOuter.find('iframe[name="ace_inner"]');
  var padcookie = require('ep_etherpad-lite/static/js/pad_cookie').padcookie;

  $('#user-font-size').change(function(){
    var newVal = 20 + parseInt($(this).val()) +"%";

    // line-height behaves weird, can't really solve it easily.
    // For now this bodge fix will do
    padInner.contents().find("body").css("line-height", newVal);
    padInner.contents().find("body").css("font-size", newVal);

    padcookie.setPref('userFontSize', $('#user-font-size').val());
  });

  var userFontSizeSetting = padcookie.getPref('userFontSize');
  if (userFontSizeSetting) {
    $('#user-font-size').val(userFontSizeSetting);
    $('#user-font-size').trigger('change');
  }
}

