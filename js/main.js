if($(".instagram").length) {
  require(['/hexot/js/src/photo.js', '/hexot/fancybox/source/jquery.fancybox.js', '/hexot/js/src/jquery.lazyload.js'], function(obj) {
    obj.init();
  });
}
