function fadeIn(e) {
  e.className = "bg fadein"
};

function fadeOut(e) {
  e.className = "bg"
};
//申明图片数组中当前的轮播图片
cur_img = document.getElementById("imgs").children.length - 1;
//图片轮播函数
function turnImgs(imgs) {
    var imgs = document.getElementById("imgs").children;
    if (cur_img == 0) {
      fadeOut(imgs[cur_img]);
      cur_img = imgs.length - 1;
      fadeIn(imgs[cur_img]);
    } else {
      fadeOut(imgs[cur_img]);
      fadeIn(imgs[cur_img - 1]);
      cur_img--;
    }
  }
  //设置轮播间隔
setInterval(turnImgs, 3000);