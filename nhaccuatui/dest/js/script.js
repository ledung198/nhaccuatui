$(document).ready(function(){$(".list-tabs ul li").click(function(t){t.preventDefault(),$(".list-tabs ul li a").removeClass("active"),$(this).find("a").addClass(".active");var a=$this.index();$("tab-content .tab").hide(),$("tab-content .tab").eq(a).show()})});