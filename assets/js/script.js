let list = document.querySelector("#slider .list-items");
let items = document.querySelectorAll("#slider .list-items .item");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length - 1;


next.onclick = function()
{
    active = (active+1 > lengthItems) ? 0 : active+1;
    reloadSlider();
}

prev.onclick = function()
{
    active = (active-1 < 0) ? lengthItems : active-1;
    reloadSlider();
}

// setInterval thanh vien muon dc lap lai
let refreshSlider = setInterval(()=> { next.click()}, 3500);

function reloadSlider()
{
    let checkLeft = (items[active].offsetLeft);
    list.style.left = -checkLeft + 'px';
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> { next.click()}, 3500);

}


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

