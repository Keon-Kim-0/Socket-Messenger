

const sock = io();
let clientid=false
const chatButton=document.getElementById('say')
const chatForm=document.getElementById('chatForm')

chatForm.addEventListener('submit',function(){
  event.preventDefault();
  chatSend()
})

function chatSend(){
  let talk=document.getElementById('chat').value
  talk=(clientid+':'+talk).split('').map((x,xi)=>{
    if(xi>0 && xi%28===0){
      return x+'\n'
    }else{
      return x
    }
  }).join('').slice(clientid.length+1)
  console.log(talk);
    sock.emit('chat',talk);
    document.getElementById('chatForm').reset();
}
let messengerid='error';
sock.on('messenger',(text)=>{
  messengerid=text
})

const writeEvent =(text)=>{
  const parent=document.querySelector('#events');
  const el= document.createElement('li');
  el.className='chatText'
  el.innerHTML = text;
  parent.appendChild(el)
  const stepParent=el;
  const messenger=document.createElement('span');
  messenger.className='messenger'
  messenger.innerHTML = messengerid
  stepParent.insertBefore(messenger,stepParent.childNodes[0]);
  //messenger.scrollIntoView({behavior:"smooth", block: "end", inline: "nearest"});
  //window.scrollTo(0,document.body.scrollHeight)
  console.log(window.scrollY)
  console.log(document.body.scrollHeight)
  console.log((window.scrollY+window.innerHeight)-document.body.scrollHeight)
  scrolly()
};
function scrolly(){
  if((window.scrollY+window.innerHeight)-document.body.scrollHeight>-50){
    window.scrollTo({ top:document.body.scrollHeight, behavior: 'smooth' });
  }
}

const blueEvent =(text)=>{
  const parent=document.querySelector('#events')
  const el= document.createElement('li')
  el.className='announcement'
  el.innerHTML = text;
  parent.appendChild(el);
  scrolly()
};

const createid=(text)=>{
  clientid=text
  console.log(clientid)
  let element=document.getElementById('clientName')
  element.innerHTML='your name: '+text
}

const updatePopulation=(text)=>{
  //console.log('beep')
  let element=document.getElementById('population')
  element.innerHTML=text
}
sock.on('announcement',blueEvent);
sock.on('message',writeEvent);
sock.on('id',createid)
sock.on('population',updatePopulation)
