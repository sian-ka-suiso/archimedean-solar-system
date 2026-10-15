let angle = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowWidth);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  background(0);
}

function draw() {
  background(0); // 背景を再描画して残像を消す
  translate(width / 2, height / 2);

  scale(0.75);  // スケール設定

  // 太陽を中心に描画
  stroke(255, 63, 11); // 太陽の色
  strokeWeight(75); //太陽の大きさ
  point(0, 0); // 中心に太陽を描画

  rotate(angle);
  
  let a = 0.1;
  let b = 5;

  for (let t = 11; t < 450; t += 0.05) {

    //アルキメデス螺旋を用いて太陽系を描画
    let r = a + b * t;
    let x = r * cos(t);
    let y = r * sin(t);
    
    //太陽系惑星の描画
    if (Math.abs(t - 14) < 0.01) {
      drawCircle(x, y, 15, [169,169,169]); //水星
    } else if (Math.abs(t - 19) < 0.01) {
      drawCircle(x, y, 37, [255,223,0]); //金星
    } else if (Math.abs(t - 24) < 0.01) {
      drawCircle(x, y, 40, [30,131,255]);  //地球
      drawStroke(x, y, 35, [255,255,255]); //雲
      drawCircle(x-20, y-30, 10, [255,255,0]); //月
    }else if (Math.abs(t - 33) < 0.01) {
      drawCircle(x, y, 20, [216,158,107]); //火星
    }else if (47 < t && t < 60) {
      drawCircle(x, y, 3, [200,120,200]); //小惑星帯
    }else if (Math.abs(t - 80) < 0.01) {
      drawCircle(x, y, 100, [216,158,107]); //木星
      drawStroke(x, y, 90, [255,255,255]); //雲
    }else if (Math.abs(t - 90) < 0.01) {
      drawCircle(x, y, 90, [210,180,140]); //土星
      for (let i = 1; i<=50; i = i+7){
        drawStroke(x, y, 150+i, [255,255,230]); //土星の環
      }
    }else if (Math.abs(t - 110) < 0.01) {
      drawCircle(x, y, 47, [173,216,230]); //天王星
    }else if (Math.abs(t - 120) < 0.01) {
      drawCircle(x, y, 46, [0,0,205]); //海王星
    }else {
      strokeWeight(2);
      stroke(255, 255, 255); //通常の螺旋の点
    }
    point(x, y);
  }
  angle -= 0.0005; // 回転速度を調整する
}

//円を描画
function drawCircle (x,y,diameter,color) {
  fill(color[0],color[1],color[2]);
  noStroke();
  ellipse(x,y,diameter,diameter)
}

//円い枠線を描画
function drawStroke (x,y,diameter,color) {
  noFill();
  stroke(color[0],color[1],color[2]);
  ellipse(x,y,diameter,diameter)
}

