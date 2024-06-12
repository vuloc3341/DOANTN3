// thay doi mau the bat dau dat hang
window.addEventListener('scroll', function() 
{
    // Chọn phần tử cần thay đổi màu nền
    const btn1 = document.getElementById("btn-start");

    const btn2 = document.getElementById("btn-end");
    // Tính toán khoảng cách từ phần tử đến đỉnh cửa sổ
    const distanceFromTop = btn2.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const scrollDistance = window.scrollY;
  

   // Khi phần tử khác cuộn lên một khoảng
   if (distanceFromTop  < scrollDistance - 102)
      {
       // Thay đổi màu nền của header
       btn1.style.backgroundColor = 'red';
       btn1.classList.remove('dele-cur');
    }
    
    else
    {
        btn1.style.backgroundColor = 'white';
        btn1.classList.add('dele-cur');
    }
});





// let list_tile = document.querySelector(".list-tile");
// let tile = document.querySelectorAll(".list-tile li");
// let prevb = document.getElementById("prev-btn");
// let nextb = document.getElementById("next-btn");
// let active = 0;
// let lengthItems = tile.length - 1;
// const itemWidth = tile[0].offsetWidth; // Độ rộng của mỗi item, giả sử chúng có cùng độ rộng.


// nextb.onclick = function()
// {
//     active = (active+1 > lengthItems) ? 0 : active+1;
//     reloadSlider();
// }

// prevb.onclick = function()
// {
//     active = (active-1 < 0) ? lengthItems : active-1;
//     reloadSlider();
// }

// function reloadSlider()
// {
//     const leftValue = -active * itemWidth;
//     list_tile.style.left = `${leftValue}px`;
// }

// nut len dau trang

$(document).ready(function()
{
    // bắt sự kiện kéo thanh cuộn
    $(window).scroll(function()
    { 
        // nếu thanh cuộn ko ở trên thị hiện ra
        if($(this).scrollTop())
            $('#backtop').fadeIn();
        else
            $('#backtop').fadeOut();
    });
    $('#backtop').click(function(){
        $('html, body').animate({scrollTop: 102}, 500)
    });
});

var head = document.getElementById("hearder");
var uudai = document.getElementById("Monmoi");
var len = head.offsetTop - uudai.offsetTop;

$(document).ready(function()
{
    $('.1').click(function(){
        $('html, body').animate({scrollTop: 70}, 300)
    });
});

$(document).ready(function() {
    $('.2').click(function() {
        var targetPosition = $('#Monmoi').offset().top - 180;
        $('html, body').animate({scrollTop: targetPosition}, 300);
    });
});

$(document).ready(function() {
    $('.3').click(function() {
        var targetPosition = $('#Combo1').offset().top - 180;
        $('html, body').animate({scrollTop: targetPosition}, 300);
    });
});

$(document).ready(function() {
    $('.4').click(function() {
        var targetPosition = $('#ComboN').offset().top - 180;
        $('html, body').animate({scrollTop: targetPosition}, 300);
    });
});

$(document).ready(function() {
    $('.5').click(function() {
        var targetPosition = $('#Ga').offset().top - 180;
        $('html, body').animate({scrollTop: targetPosition}, 300);
    });
});

$(document).ready(function() {
    $('.6').click(function() {
        var targetPosition = $('#Burger').offset().top - 180;
        $('html, body').animate({scrollTop: targetPosition}, 300);
    });
});

$(document).ready(function() {
    $('.7').click(function() {
        var targetPosition = $('#Thucannhe').offset().top - 180;
        $('html, body').animate({scrollTop: targetPosition}, 300);
    });
});

$(document).ready(function() {
    $('.8').click(function() {
        var targetPosition = $('#Thucuong').offset().top - 180;
        $('html, body').animate({scrollTop: targetPosition}, 300);
    });
});


$(document).ready(function() {
    $('#KM').click(function() {
        var targetPosition = $('#Uudai').offset().top - 180;
        $('html, body').animate({scrollTop: targetPosition}, 300);
    });
});


// Trong file page2.html
$(document).ready(function() {
    // Lấy tham số từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const callFunctionParam = urlParams.get('call');

// Đối tượng ánh xạ giữa giá trị tham số và hàm tương ứng
    const functionMapping = {
    '2': $.fn.hai,
    '3': $.fn.ba,
    '4': $.fn.bon,
    '5': $.fn.nam,
    '6': $.fn.sau,
    '7': $.fn.bay,
    '8': $.fn.tam,


};

    // Kiểm tra nếu có tham số và có giá trị true
    if (functionMapping[callFunctionParam]) {
        functionMapping[callFunctionParam]();
    }
});

$.fn.hai = function() {
    var targetPosition = $('#Monmoi').offset().top - 180;
    $('html, body').animate({scrollTop: targetPosition}, 300);
};

$.fn.ba = function() {
    var targetPosition = $('#Combo1').offset().top - 180;
    $('html, body').animate({scrollTop: targetPosition}, 300);
};

$.fn.bon = function() {
    var targetPosition = $('#ComboN').offset().top - 180;
    $('html, body').animate({scrollTop: targetPosition}, 300);
};

$.fn.tam = function() {
    var targetPosition = $('#Thucuong').offset().top - 180;
    $('html, body').animate({scrollTop: targetPosition}, 300);
};

$.fn.nam = function() {
    var targetPosition = $('#Ga').offset().top - 180;
    $('html, body').animate({scrollTop: targetPosition}, 300);
};

$.fn.sau = function() {
    var targetPosition = $('#Burger').offset().top - 180;
    $('html, body').animate({scrollTop: targetPosition}, 300);
};

$.fn.bay = function() {
    var targetPosition = $('#Thucannhe').offset().top - 180;
    $('html, body').animate({scrollTop: targetPosition}, 300);
};

