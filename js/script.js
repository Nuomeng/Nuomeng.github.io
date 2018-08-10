
function toggleSound(){
        var video = document.getElementById('bgvid');
        if(video.paused){ //如果已暂停则播放
            video.play(); //播放控制
        }else{ // 已播放点击则暂停
            video.pause(); //暂停控制
        }
    }

  $(document).ready(function(){
        $(window).scroll(function() {
          $("#p2").fadeIn(2000);
        $("img").fadeIn(3000);
        $("img").addClass('animated pulse');
        });
        });
