/**
 * Created by Administrator on 2016/10/20.
 */
$(function () {
    $('#control .control_button').button();

    $('#control .control_button').eq(0).button(
        {
            icons : {
                primary : 'ui-icon-arrow-2-e-w',
            }
        }
    );
    $('#control .control_button').eq(1).button(
        {
            icons : {
                primary : 'ui-icon-arrow-2-n-s',
            }
        }
    );
    //$('#control .button').button('disable');

    $('#control .control_button').eq(0).click(function () {
                if($('#under_control').css('width') == '400px'){
                    $('#under_control').animate({
                        width:'600',
                    });
                }else {
                    $('#under_control').animate({
                        width:'400',
                    });
                }
            }
        )
    $('#control .control_button').eq(1).click(function () {
            if($('#under_control').css('height') == '400px'){
                $('#under_control').animate({
                    height:'600',
                });
            }else {
                $('#under_control').animate({
                    height:'400',
                });
            }
        }
    )
    $('#control .control_button').eq(2).click(function () {
            if($('body').css("background-color") == "rgb(255, 255, 255)"){
                // $('body').css({
                //     'background-color': 'green',
                // });
                $('body').animate({
                    "backgroundColor":"green"});
            }else {
                $('body').animate({
                    'backgroundColor':'white',
                });
            }
        }
    )
    //注意判定的时间点，在刚好点击的那一刻是关闭的则应启动按钮，否则打开按钮，toggle放底下。
    $('#control .control_button').eq(3).click(function () {

        if($('#under_control').css('display') == 'none'){
            $('#control .control_button').button('enable');
        }else {
            $('#control .control_button').eq(0).button('disable');
            $('#control .control_button').eq(1).button('disable');
        }
        $('#under_control').toggle('clip');

        }
    )
    $('#control .control_button').eq(4).click(function () {
        $('#under_control').css({
            'width' :'400px',
            'height' : '400px',
        })
        $('#under_control').css('display', 'block');
        $('body').css('background','blue');

        }
    )
    $('#attribute #sure_button').click(function () {
        attr = $('#attribute #attr').val();
        value = $('#attribute #name').val();
        $('.addstyle').css(attr, value);
    })
    $('#attribute #reset_button').click(function () {
        $('#show_attr').removeAttr('style');
        }
    );
    //获取文本框数字并随时更新,删除其他元素
    $('#attribute #name').on('keyup', function () {
        var pattern = /[0-9]+/igm;
        var number = pattern.exec($('#attribute #name').val());
        $('#attribute #name').val(number);
        //$('#attribute #name').replace('value', number);
    });


    $('#attribute #attr').attr('value', '');
    function course(index, div_id) {
        $('#choose_table ul li').eq(index).hover(function () {
            $('#choose_table '+div_id).show('blind');
            $('#choose_table ul li').eq(index).css('background', '#666')
        }, function () {
            $('#choose_table '+div_id).hide('blind');
            $('#choose_table ul li').eq(index).css('background', 'inherit')
        })
    }
    course(0, '#div1');
    course(1, '#div2');
    course(2, '#div3');
    $('#check_all').on('click',function () {

        for(var i = 0; i <=5; i ++){
            $('input[name=check]').eq(i).attr('checked', false);
            $('input[name=check]').eq(i).attr('checked', true);
        }
        i = 0;
    });
    $('#check_box #check_others').on('click', function () {

        for(var i = 0; i <=5; i ++) {
            if ($('input[name=check]').eq(i).attr('checked') == 'checked'){
                $('input[name=check]').eq(i).attr('checked', false);
            }else {
                $('input[name=check]').eq(i).attr('checked', true);
            }
        }
        i = 0;
        }
        )
    //通过改变src路径来改变图片内容
    function img_change(i) {
        if(i <= 11){
            $('.img_change').attr('src', 'http://www.fgm.cc/learn/lesson2/img/big_' + i + '.jpg');
        }else {
            i = 1;
            $('.img_change').attr('src', 'http://www.fgm.cc/learn/lesson2/img/big_' + i + '.jpg');
        }
        return i;
    };
    function img_src_change() {
        var url_id = 1;
        setInterval(function () {
            url_id = img_change(url_id);
            url_id ++;
        }, 1000);
    }
    img_src_change();
    // function scroll() {
    //     $('#leftBox ul li:last').insertBefore($('#leftBox ul li:first'));
    // }
    // setInterval(scroll, 1000);

    setInterval(function() {
        // $('#leftBox li:last').css({'height':'0px','opacity': '0'}).prependTo($('#leftBox')).animate({'height':'35px','opacity': '1'}, 'slow', function() {
        //     $(this).removeAttr('style');
        $('#leftBox li:last').css({'height':'0px','opacity' : '0px'}).insertBefore($('#leftBox li:first')).animate({'height':'20px', 'opacity':'1'},function () {
                // $(this).removeAttr('style');

        });
    // })
    },1000);
    $(window).on('scroll',function () {
        var _this = this;
        // console.log($(_this).scrollTop());
        $.each($('#delay_loading li'), function () {
            // console.log($('#delay_loading li').eq($(this).index()).offset().top);
            var index = $(this).index()+1;
            if($('#delay_loading li').eq($(this).index()).offset().top - 600 <= $(_this).scrollTop()){
                $(this).find('img').attr('src', 'http://www.fgm.cc/learn/lesson10/img/lazy/'+index+'.jpg');
            }
        })
    });
    //自动生成表格的jquery实现方式
    $('#click_create').on('click', function () {
        var rows = $('#rows').val();
        var cols = $('#cols').val();
        // var table = $("<table border='1'></table>");
        // table.appendTo($('#createtable'));
        for (var i = 0; i < rows; i ++){
            var tr =$("<tr></tr>");
            $('#createtable').append(tr);
            for (var j = 0; j < cols; j ++){

                var td = $("<td style='background:\#"+Math.floor(Math.random()*80)+Math.floor(Math.random()*80)+Math.floor(Math.random()*80) +"'>"+i * j+"</td>");
                tr.append(td);
            }

        }

    });




    // console.log(window.innerHeight);

});

//     var mac = new Object();
//     mac.class=function () {
//         alert(this.html);
//         alert('i am mac')
//     }
//     var box = {
//         name : function bbb() {
//             alert(33);
//         },
//
//     };
//     $('.img_change').click( function miv() {
//         alert(12);
//     });
//     box.name();
//     mac.class()

// function foo() {
//     console.log("first");
//     console.log("third");
//
//     setTimeout(( function(){
//         console.log( 'second' );
//     }),5);
// }
//
// for (var i = 0; i < 1000; i++) {
//     foo();
// }

//原生js实现方式
/*
window.onload = function () {
    document.getElementById('click_create').onclick = function () {
        var rows = document.getElementById('rows').value;
        var cols = document.getElementById('cols').value;
// var table = $("<table border='1'></table>");
// table.appendTo($('#createtable'));
        for (var i = 0; i < rows; i ++){
            // var tr =$("<tr></tr>");
            var tr = document.createElement('tr');
            // $('#createtable').append(tr);
            for (var j = 0; j < cols; j ++){
                // var td = $("<td>hello</td>");
                // tr.append(td);
                var td = document.createElement('td');
                td.innerHTML = i * j;
                tr.appendChild(td);
            }
            document.getElementById('createtable').appendChild(tr);
        }
    };


};
*/