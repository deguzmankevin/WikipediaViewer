$(document).ready(function() {
  $('#BACK').hide();
  var titles = 0;
  var descriptions = 0;
  var links = 0;
 function query(){
    $('#MIDDLE').css('animation-name', 'slideup');
    
     $('#BACK').show();
    var lol = document.getElementById('SEARCHBOX').value;
    
    $.ajax({
    type: "GET",
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=10&namespace=0&redirects=return&callback=?&search=" + lol,
    dataType: "json",  
    success: function(data){
      titles = data[1].reverse();
      descriptions = data[2].reverse();
      links = data[3].reverse();
      for(var i = 0; i < titles.length; i++){
        var title = titles[i];
        var desc = descriptions[i];
        var link = links[i];
        var html = '<div class="block"><a target="_blank"href="'+ link + '"><p class="text">' + title + '</p><p class="subtext">' + desc +'</p></a></div>'
        $(html).insertAfter('#RESULTS');
        $('.block').addClass('animated zoomIn');
      
      }
      
    }
  })
    
  }
  $('#GO').on("click", query)
  $('#SEARCHBOX').keypress(function(e) {
    if(e.which === 13) {
        $('#GO').click();
      return false;
    }
});
  
});