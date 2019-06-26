const playground = document.querySelector('#playground');
const playground_width = Math.floor($('#playground').width());
const playground_height = Math.floor($('#playground').height());

const btn_start = document.querySelector('#btn_start');
const block = document.querySelector('#block')
const block_width = $('#block').width();
const block_height = $('#block').height();

let block_pos_x = Math.floor((Math.random()*playground_width))-block_width;
let block_pos_y = Math.floor((Math.random()*playground_height))-block_height;

let game = {

    started: false,
    points: 0, 

}

btn_start.addEventListener('click', ()=>{

    btn_start.style.display = 'none';
    game.started = true;

    if(game.started == true)
    {
        block.style.display = 'block';
        block.style.left = block_pos_x + 'px';
        block.style.top = block_pos_y + 'px';
        
        console.log(block_pos_x + 'x' + ' ' + block_pos_y + 'y');

    }

})

block.addEventListener('click', ()=>{
    game.points++;
    console.log(game)
})