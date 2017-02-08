//LOGICA

//Para generar plantillas o prototipos

function Chat(_nombre,_image,_ultimoMensaje){
    
    this.nombre = _nombre;
    this.imageURL = _image;
    this.ultimoMensaje = _ultimoMensaje;
    this.horaUltimoMensaje = '';
    /*this.contiene = function(_buscar){
        this.nombre.search("")
    }*/    
}

var listChats = [
    /*{
        nombre:'Chat 1', 
        imageURL:'image/logocodeacademy.png', 
        ultimoMensaje:'', 
        horaUltimoMensaje:''
    },*/
    new Chat('Laboratoria Perú','image/logocodeacademy.png', 'hellou'),
    new Chat('Aldo','image/aldo.jpg', 'hellou'),
    new Chat('Andrea','image/andrea.jpg', 'Como estas amiga?'),
    new Chat('Fabi','image/avatar.jpg','Tienes un peine?')
];

//PARTE VISUAL
var liListItem = null;

function init()
{
    //alert('Ya cargo la pagina!');
    initChatList();
    searchChat()
}

function initChatList()
{
    var elListChat = document.getElementsByClassName('w-recent-chats')[0];
    
    for(var i in listChats )
    {
        var htmlChatItem = '<li><div class="avatar">'+'<img src="'+listChats[i].imageURL+'" alt="" class="wh-44">'+'<h4 class="w-contact-name">'+listChats[i].nombre+'</h4>'+'<p class="w-last-message" id="mensaje">'+listChats[i].ultimoMensaje+'</p></div>'+'<div class="time" id="hora">'+listChats[i].horaUltimoMensaje+'</div></li>';

        elListChat.innerHTML += htmlChatItem;    
    }
    
    setEventsChatList();
}

function setEventsChatList()
{
    var listChats = document.getElementById('lista-chats');
    var arrListItems = listChats.getElementsByTagName('li');//esta lista no es un array
    //console.log(typeof arrListItems); //Para saber si es un array o un objeto
    
    for(var i=0; i<arrListItems.length; i++)
    {
        //console.log(arrListItems[i]);//Mostrar como itera y si funciona el for
        
        arrListItems[i].addEventListener('click', onChatItemClick);
    }
}

function onChatItemClick(evt)
{
    //console.log(evt.currentTarget);//currentTarget para solamente referirme al 'li', evt.target para referirme al elemento especifico que clikeo
    var contactName = evt.currentTarget.getElementsByClassName('w-contact-name')[0].textContent;
    var imgURL = evt.currentTarget.getElementsByClassName('wh-44')[0].src;
    
    changeChatHeader(contactName,imgURL,'Conectado');
    changeChatMessages(contactName);
    createChatList();
}

function onSendMessage(evt)
{   
    var elInputMessage = document.getElementById("mensajes");
    
    if(evt.keyCode == 13){
        //console.log(evt);
        //createChat(elInputMessage.value);
        createMessage(elInputMessage.value);
        elInputMessage.value="";
    }
}

function createMessage(_message)
{   
    var elChat = document.getElementById('chat');
    var date = new Date();
    
    var htmlMessageIn = '<div class="w-message w-message-in">'+'<div class="w-message-text">'+'<h5 class="green-1">Maria Paula Rivarola</h5>'+'<p>Nunca!!! Juan Diego es único</p>'+'<div class="time"></div>'+'</div></div>';
    
    var htmlMessageOut = '<div class="w-message w-message-out">'+'<div class="w-message-text">'+'<p>'+_message+'</p>'+'<div class="time">'+date.getHours()+':'+date.getMinutes()+'</div>'+'</div></div>';
    
    var messageLiChat = liListItem.getElementsByClassName('w-last-message')[0];
    messageLiChat.innerHTML = _message;
    
    elChat.innerHTML += htmlMessageOut; 
    elChat.scrollTop = elChat.scrollHeight;
}

function createChat(_message)
{
    var elListChat = document.getElementsByClassName('w-recent-chats')[0];
    
    if(liListItem == null){
        
        liListItem = document.createElement('li');
    
        var htmlChatItem = '<div class="avatar">'+'<img src="image/logocodeacademy.png" alt="" class="wh-44">'+'<h4 class="w-contact-name">Laboratoria Perú</h4>'+'<p class="w-last-message" id="mensaje">'+_message+'</p></div>'+'<div class="time" id="hora">14:27</div>';

        liListItem.innerHTML = htmlChatItem;
        elListChat.insertBefore(liListItem,elListChat.childNodes[0]);    
    }  
    
    setEventsChatList();
}

function changeChatMessages(contactName)
{
    var divChat = document.getElementById('chat');
    
    for(var i=0; i<listChats.length; i++){
        
        var htmlMessageIn = '<div class="w-message w-message-in">'+'<div class="w-message-text">'+'<h5 class="green-1">'+contactName+'</h5>'+'<p>'+listChats[i].ultimoMensaje+'</p>'+'<div class="time"></div>'+'</div></div>';    
        
        divChat.innerHTML = htmlMessageIn;
    }
}

function changeChatHeader(_contactName, _contactImageURL, _contactStatus)
{
    var chatHeader = document.getElementsByClassName('w-chat-messages')[0];
    chatHeader.getElementsByClassName('w-contact-name')[0].innerHTML= _contactName;
    chatHeader.getElementsByClassName('w-users-messages')[0].innerHTML= _contactStatus;
    chatHeader.getElementsByTagName('img')[0].src = _contactImageURL;
}

function searchChat()
{
    var inputSearch = document.getElementById('search');
    inputSearch.addEventListener('click', onSearching);
}

function onSearching()
{    
    var chooseContact = this.value;
    var listChats = document.getElementById('lista-chats');
    var arrListItems = listChats.getElementsByTagName('li');

    for(var i=0; i<arrListItems.length; i++ ){
        
        console.log(arrListItems[i]);
        /*
        if(arrListItems[i].children.children[1].toLowerCase().search(chooseContact.toLowerCase()) == -1){
            arrListItems[i].style.display = 'none';
        } else {
            arrListItems[i].style.display = 'block';
        }*/
    } 
}


/* Prueba de funcion onclick
arrListItems[i].onclick = function () 
        {
            alert("Hola");
        }
*/
/*
arrListItems[i].addEventListener('click', function(){
            alert("click listener");
        })
*/