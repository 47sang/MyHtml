function jh() {
	$(document).ready(function() {
		
		$("#boo").load("jh.htm", function(a, status, c) {
			console.log(status);
			if(status == "error") {
				$("#boo").text("数据加载失败！");
			}
		});
	});
}

function hy() {
	
	$(document).ready(function() {
		
		$("#boo").load("hy.htm", function(a, status, c) {
			console.log(status);
			
			if(status == "error") {
				$("#boo").text("数据加载失败！");
			}
		});
	});
}