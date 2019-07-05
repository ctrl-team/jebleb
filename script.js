async function ded() {
const playground = document.querySelector('#playground');
const playground_width = Math.floor($('#playground').width());
const playground_height = Math.floor($('#playground').height());

const btn_start = document.querySelector('#btn_start');
const DB = document.querySelector('#DB');
const block = document.querySelector('#block')
const block2 = document.querySelector('#block2')
const block_width = $('#block').width();
const block_height = $('#block').height();
const block_width2 = $('#block2').width();
const block_height2 = $('#block2').height();
let razy = 0;

let game = {

    started: false,
    points: 0, 
    clicked:false,

}

function pt(){
    let block_pos_x = Math.floor((Math.random()*playground_width))-block_width;
    let block_pos_y = Math.floor((Math.random()*playground_height))-block_height;
    btn_start.style.display = 'none';
    game.started = true;

    if(game.started == true)
    {
        block.style.display = 'block';
        block.style.left = block_pos_x + 'px';
        block.style.top = block_pos_y + 'px';
        
        console.log(block_pos_x + 'x' + ' ' + block_pos_y + 'y');
    }
  
}
function pt2(){
    let block_pos_x = Math.floor((Math.random()*playground_width))-block_width2;
    let block_pos_y = Math.floor((Math.random()*playground_height))-block_height2;
    btn_start.style.display = 'none';
    game.started = true;

    if(game.started == true)
    {
        block2.style.display = 'block';
        block2.style.left = block_pos_x + 'px';
        block2.style.top = block_pos_y + 'px';
        
        console.log(block_pos_x + 'x' + ' ' + block_pos_y + 'y');
    }
  
}


btn_start.addEventListener('click', ()=>{
  game.points=0;
  razy=0;
  DB.innerHTML = game.points;
  pt()

})

block.addEventListener('click',()=>{
    game.points++;
    game.clicked=true;
    DB.innerHTML = game.points;
      pt();
    console.log(game)
  if(game.points>=30){
    if(razy == 0){
    razy++;
    pt2();
    }
    
  }
    
})
block2.addEventListener('click',()=>{
    game.clicked=true;
    game.points++
    DB.innerHTML = game.points;
    if(game.points>=30){
    pt2();
    }
    else block2.style.dysplay='none';
  
})
playground.addEventListener('click', ()=>{

  
  if(game.started == true){
    if(game.clicked==false){
    game.started=false;
    block.style.display='none'
    block2.style.display='none'
    btn_start.style.display='block';
    }
    else game.clicked=false;
    
  }

  
})

}
ded();
