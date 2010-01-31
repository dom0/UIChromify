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
      
window.addEventListener("load",function(event){

  Application.console.log("INITIALIZED"); 
  var nav = document.getElementById("nav-bar");
  gBrowser.mTabBox.insertBefore(nav,gBrowser.mTabBox.lastChild);
 
  var pbar = document.getElementById("PersonalToolbar");
  gBrowser.mTabBox.insertBefore(pbar,gBrowser.mTabBox.lastChild);
 
  document.getElementById("main-window").setAttribute("hidechrome", "true");
 
  document.getElementById("navigator-toolbox").setAttribute("collapsed","true");
  pbar.setAttribute("collapsed","true");
  
  var tit = document.createElement("titlebar");
  tit.setAttribute("height","5px");
  tit.style.backgroundColor="#98bce7";
  gBrowser.mTabBox.insertBefore(tit,gBrowser.mTabBox.firstChild);
 
  document.getElementById("browser-bottombox").setAttribute("collapsed","true");

  HGBStatusBar.init();

}, false);

