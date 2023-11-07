$(document).ready(function(){
  
$(".m-more-less-content .m-show-more").click(function(){
  $(this).parent().addClass("m-display-more");
});
$(".m-more-less-content .m-show-less").click(function(){
  $(this).parent().removeClass("m-display-more");
});

$(".m-more-less-content").each(function (i, e){
  var html = $(e).html();
  console.log(html);
  var contentArray = html.split("<more>");
  console.log(contentArray);
  if (contentArray.length == 2) {
    html = contentArray[0] + '<span class="m-show-more"></span><span class="m-more-text">' + contentArray[1] + '</span><span class="m-show-less"></span>';
    console.log(html);
    $(e).html(html);
    $(e).find(".m-show-more").click(function(){
      $(this).parent().addClass("m-display-more");
    });
    $(e).find(".m-show-less").click(function(){
      $(this).parent().removeClass("m-display-more");
    });
  }
});
});