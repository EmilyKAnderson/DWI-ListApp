/**
 * Created with JetBrains WebStorm.
 * User: teisaacs
 * Date: 10/16/13
 * Time: 2:39 PM
 * To change this template use File | Settings | File Templates.
 */

/*
 * Configure JQM.
 * NOTE: Order is important, must be added before the jqm file.
 */

$(document).bind( "mobileinit", function(event) {
   $.extend($.mobile.zoom, {locked:true,enabled:false});
   // This is here to manipulate jqm 
   // used $.extend to change mobile jquery transitions. ex flip or pop maybe you want a slide
});
