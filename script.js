const playground = document.querySelector('#playground');
const playground_width = Math.floor($('#playground').width());
const playground_height = Math.floor($('#playground').height());

const btn_start = document.querySelector('#btn_start');
const DB = document.querySelector('#DB');
const block = document.querySelector('#block')
const block_width = $('#block').width();
const block_height = $('#block').height();


let game = {

    started: false,
    points: 0, 

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


btn_start.addEventListener('click', ()=>{

  pt()

})

block.addEventListener('click', ()=>{
    game.points++;
    DB.innerHTML = game.points;
    pt();
    console.log(game)
})
playground.addEventListener('click', ()=>{
  if(game.started == false){
    
    return;
    
  }
  if(game.started == true){
    
    game.started == false;
    btn_start.style.display = 'true';
    
    
  }
})

