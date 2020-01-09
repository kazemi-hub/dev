var $ = require("jquery");

$(function () {
    $.ajax({
        url: "./asset/resources/contents.json",
        method: "get",
        dataType: "json",
        success: function (response) {
            console.log(response);
            
        }

    })
})