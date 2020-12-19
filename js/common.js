// --------------------creative-----------------

const img1 = document.getElementById("img1");
const modal_js = document.getElementById("modal_js");
const modal_close = document.getElementById("modal_close");

function onClick(){
  modal_js.classList.toggle("modal_hidden");
}

img1.addEventListener("click", onClick);
modal_close.addEventListener("click", onClick);


// --------------------header_menu------------------------

const humberger = document.getElementById("humberger");
const header_nav_active = document.getElementById("header_nav_active");


function onClick_humberger(){
  header_nav_active.classList.toggle("header_nav_active");
}

humberger.addEventListener("click", onClick_humberger);

// --------------------features skills scrollin------------------------


// アニメーションさせる要素のIDをリスト化
const targetList = [
  'features_item1','features_item2','features_item3'
]

const targetList2 = [
  'html','CSS','JS','joke','alcohol','secret',
]

// IDから要素を取得して返す関数
function getElementId(id) {
  return document.getElementById(id);
}

// 要素の絶対位置を返す関数
function calcBottomPosition(element) {
  return element.getBoundingClientRect().bottom + window.pageYOffset;
}

window.onscroll = function() {
  const scrollPosition = window.pageYOffset + window.innerHeight;
  
  targetList2.forEach(item => {
    const element = getElementId(item);
    const bottom = calcBottomPosition(element);
    if(bottom < scrollPosition){
      element.classList.add("scrollin2");
    }
  });

  targetList.forEach(item => {
    const element = getElementId(item);
    const bottom = calcBottomPosition(element);
    if(bottom < scrollPosition) {
        element.classList.add("scrollin");   
    }
  });
}
