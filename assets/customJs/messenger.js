let activeChatUserId;

function sendMessage() {
  // Create a new chat message via the API.
 
  const userText = document.getElementById("userMessage").value ;

  io.socket.post('/message', { user1: '2', user2: activeChatUserId, text: userText });

  // clear the text area 
  document.getElementById("userMessage").value ='';

  renderMessage(true, userText)
}

// send the messesage & with enter from keybord
const input = document.getElementById("userMessage");
input.addEventListener('keypress', function (event) {



  if (event.keyCode === 13) {
    event.preventDefault();
    sendMessage();
  }

})

// chat bubbles 
function renderMessage(isSender, message) {
  const element = `
    <div class="row chatLines">
      <div class="col-md-6 ${isSender ?  'offset-md-6' : ''}">
        <div class="chat-bubble chat-bubble--${isSender ? 'right' : 'left'}">
          ${message}
        </div>
      </div>
    </div>
  `;

  document.getElementById('messages').innerHTML += element;

  scrollToBottom();

}

// makes the chat scroll to the bottom automatically
const scrollToBottom = () => {
  const element = document.getElementById('messages');
  element.scrollTop = element.scrollHeight;
}

window.onload = function () {
  io.socket.post('/joinroom', { userId: '1' });
  io.socket.on('message', (message) => {
    renderMessage(false, message)
  });
}

// function that hide and show the chat bettween the users 
function openChat(userId, name) {
  activeChatUserId = userId;

  const messenger = document.getElementById('rightSide');

  if (messenger.style.display === 'none') {
    messenger.style.display = 'block';
  }

  io.socket.post('/messages', { user1: '1', user2: userId}, function (resData) {
    document.getElementById('messages').innerHTML = '';
    // takes the name of the user and put it in the header
    resData?.forEach(message => {
      renderMessage(message.user1 == userId, message.text)
    })
  });


  document.getElementById('userName').innerHTML = name;
  

}



