$(function(){
    //class属性がbtnの要素がクリックされたら
    $('.btn').on('click', function(){
        //class属性がtext-boxのinputに文字を表示する
        $('.text-box').val('クリックしました！');
    });
});