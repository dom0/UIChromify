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
  document.getElementById("main-window").setAttribute("hidechrome", "true");
  gBrowser.mTabBox.style.borderTop="5px solid #98bce7";
  //gBrowser.mTabBox.style.MozBorderRadiusTopleft="15px";
  //gBrowser.mTabBox.style.MozBorderRadiusTopright="15px";

  document.getElementById("navigator-toolbox").setAttribute("collapsed","true");
  document.getElementById("browser-bottombox").setAttribute("collapsed","true");
 
  var nav = document.getElementById("nav-bar");
  gBrowser.mTabBox.insertBefore(nav,gBrowser.mTabBox.lastChild);
  var find = document.getElementById("FindToolbar");
  gBrowser.mTabBox.insertBefore(find,gBrowser.mTabBox.lastChild);

  HGBStatusBar.init();

  var bt1 = document.createElement("toolbarbutton");
  bt1.setAttribute("id","bt1");
  bt1.setAttribute("oncommand","window.minimize()");
  bt1.setAttribute("class","mybutton minimizebtn");

  var bt2 = document.createElement("toolbarbutton");
  bt2.setAttribute("id","bt2");
  bt2.setAttribute("oncommand","window.toggle()");
  Application.console.log(window.windowState);

  var bt3 = document.createElement("toolbarbutton");
  bt3.setAttribute("id","bt3");
  bt3.setAttribute("oncommand","window.close()");
  bt3.setAttribute("class","mybutton closebtn");

  var sp = document.createElement("spacer");
  sp.setAttribute("class","mybutton");
  sp.setAttribute("width","5px");
  gBrowser.mTabContainer.parentNode.appendChild(sp);
  gBrowser.mTabContainer.parentNode.appendChild(bt1);
  var sp = document.createElement("spacer");
  sp.setAttribute("class","mybutton");
  sp.setAttribute("width","2px");
  gBrowser.mTabContainer.parentNode.appendChild(sp);
  gBrowser.mTabContainer.parentNode.appendChild(bt2);
  var sp = document.createElement("spacer");
  sp.setAttribute("class","mybutton");
  sp.setAttribute("width","2px");
  gBrowser.mTabContainer.parentNode.appendChild(sp);
  gBrowser.mTabContainer.parentNode.appendChild(bt3);

}, false);

window.addEventListener("resize", winResize, false);

function winResize(){
if (window.windowState == 3)
  document.getElementById("bt2").setAttribute("class", "mybutton maximizebtn");
else
  document.getElementById("bt2").setAttribute("class", "mybutton restorebtn");
}

window.toggle = function(){
  if (window.windowState == 1)
    window.restore();
  else 
    window.maximize();
}









