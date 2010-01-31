/* 
           #################################################################
           #   Firefox GUI Minify                                          #
           #################################################################
           #   Author:     Domenico Martella                               #
           #   E-mail:     domenico.martella@alcacoop.it                   #
           #   Date:       2010-01-04                                      #
           #################################################################
           #                                                               #
           #       Copyright (C) 2010  - Alca Soc. Coop. (Lecce, IT)       #
           #       http://www.alcacoop.it                                  #
           #                                                               #
           # This program is free software; you can redistribute           #
           # it and/or modify it under the terms of the GNU General        #
           # Public License as published by the Free Software              #
           # Foundation; either version 3 of the License, or (at your      #
           # option) any later version.                                    #
           #                                                               #
           # This program is distributed in the hope that it will be       #
           # useful, but WITHOUT ANY WARRANTY; without even the            #
           # implied warranty of MERCHANTABILITY or FITNESS FOR A          #
           # PARTICULAR PURPOSE.  See the GNU General Public License       #
           # for more details.                                             #
           #                                                               #
           # You should have received a copy of the GNU General            #
           # Public License along with this program; if not, write to      #
           # the Free Software Foundation, Inc., 59 Temple Place -         #
           # Suite 330, Boston, MA  02111-1307, USA.                       #
           #################################################################
*/ 


var HGBStatusBar = {

  origOverLink : null,
  STATE_START : Components.interfaces.nsIWebProgressListener.STATE_START,
  STATE_STOP : Components.interfaces.nsIWebProgressListener.STATE_STOP,

  last_timeout_id : null,

  init: function() {
    HGBStatusBar._closePopup("hgb-lu");

    //CUSTOM LINK URL
    HGBStatusBar.origOverLink = XULBrowserWindow.setOverLink;

    XULBrowserWindow.setOverLink = function (link, b){
      var str = link;
      if (link.length > 120 ){
        str = link.substring(0,120);
        str += "...";
      }
      if ((link == "")||(!link)||(link == undefined)){
        HGBStatusBar.last_timeout_id = setTimeout(function(){HGBStatusBar._closePopup("hgb-lu")}, 300);
      } else {
        document.getElementById("hgb-linkurl").value = str;
        clearTimeout(HGBStatusBar.last_timeout_id);
        HGBStatusBar._openPopup("hgb-lu");
      }
      HGBStatusBar.origOverLink.call(this, link, b);
    };
  },


  _openPopup : function(){
    var anchor = document.getElementById("anchor");
    var x = 3;
    var y = window.innerHeight - 20;
 
    var popup = document.getElementById("hgb-lu");
    popup.openPopup(null, "overlap", x, y, false, false);
  },
 
  _closePopup : function(what){
    var popup = document.getElementById(what);
    popup.hidePopup();
  },
 
}
