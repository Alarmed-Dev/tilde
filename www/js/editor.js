var title=getURLParameter("title");var tags=getURLParameter("tags");var agenda=getURLParameter("agenda");var bookmark=getURLParameter("bookmark");var nclass=getURLParameter("class");var section=getURLParameter("section");var date=new Date();var unsaved=false;$(document).ready(function(){$(document).on("change",":input",function(){unsaved=true});$("#save").click(function(){unsaved=false});$("#agenda-cont").hide();$("#note-agenda").val("false");$("#bookmark-cont").hide();$("#note-bookmark").val("false");$("#note-header").text(title);$("#note-tags").text(tags);if(agenda!=undefined){$("#agenda-cont").show();$("#note-agenda").val(agenda)}if(bookmark!=undefined){$("#bookmark-cont").show();$("#note-bookmark").val(bookmark)}$("#note-agenda").val(agenda);$("#note-bookmark").val(bookmark);$("#note-class").text(nclass);$("#note-section").text(section);$("#date-today").text(date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());if(nclass==null){$("#note-class").text("All notes")}if(section==null){$("#note-section").text("General")}});$(window).bind("beforeunload",function(){if(unsaved){return "Any unsaved changes will be lost! Continue?"}});function feildReset(id,name,backup){if($(id).text().trim()==""){if(getURLParameter(name)==null){$(id).text(backup)}else{$(id).text(getURLParameter(name))}}}function moveToReadOnly(){window.location.href="readonly.html?title="+getURLParameter("title")}function moveToReadWrite(){window.location.href="readwrite.html?title="+getURLParameter("title")}
