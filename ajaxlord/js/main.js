function jh() {
    $(document).ready(function() {
        $("#boo").load("jh.htm", function(a, status, c) {
            console.log(status);
            if (status == "error") {
                $("#boo").text("数据加载失败！");
            }
        });
    });
}

function hy() {
    $(document).ready(function() {
        $("#boo").load("hy.htm", function(a, status, c) {
            console.log(status);
            if (status == "error") {
                $("#boo").text("数据加载失败！");
            }
        });
    });
}



function panduan(n) {
    switch (n) {
        case "北京大学":
            a()
            break;
        case "湖南大学":
            b()
            break;
        case "复旦大学":
            c()
            break;
        case "清华大学":
            d()
            break;
        case "开心大学":
            e()
            break;
        case "中南大学":
            f()
            break;
        default:
            g()
    }
}

function a() {
    $("#pfl").html('<option value="园林工程">园林工程</option>\
    	<option value="园林工程">园林工程</option>');
}

function b() {
    $("#pfl").html('<option value="重金属乐队">重金属乐队</option>\
    	<option value="重金属乐队">重金属乐队</option>');

}

function c() {
    $("#pfl").html('<option value="人力资源">人力资源</option>\
    	<option value="人力资源">人力资源</option>');
}

function d() {
    $("#pfl").html('<option value="软件工程">软件工程</option>\
    	<option value="软件工程">软件工程</option>\
    	<option value="软件工程">软件工程</option>');

}

function e() {
    $("#pfl").html('<option value="工商管理">工商管理</option>\
    	<option value="工商管理">工商管理</option>');
}

function f() {
    $("#pfl").html('<option value="新闻学">新闻学</option>\
    	<option value="新闻学">新闻学</option>');

}

function g() {
    $("#pfl").html('<option value="出BUG了啊">出BUG了啊</option><option value="出BUG了啊">出BUG了啊</option>');
}