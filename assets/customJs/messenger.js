let activeChatUserId;

function sendMessage() {
  // Create a new chat message via the API.
  const userText = document.getElementById("userMessage").value ;

  io.socket.post('/message', { user2: activeChatUserId, text: userText }, function(createdMessage) {
    updateConversation(activeChatUserId, userText, createdMessage.createdAt);
  });

  // clear the text area 
  document.getElementById("userMessage").value ='';

  renderMessage(true, userText)
}

//  brinks conversation on top of the side bar and updates text and time
function updateConversation(userId, text, createdAt) {
  // Find user's exisitng conversation and update last message and sent time
  const chatElement = document.getElementById(userId);
  chatElement.children[0].children[2].innerHTML = new Date(createdAt).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false });
  chatElement.children[0].children[1].children[1].innerHTML = text;

  // Remove existing conversation and readd it to the top
  document.getElementById(userId).remove();
  document.getElementById('chats').prepend(chatElement);
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
  io.socket.post('/joinroom');
  io.socket.on('message', (message) => {
    if(activeChatUserId == message.user) {
      renderMessage(false, message.text)
    } 

    updateConversation(message.user, message.text, message.createdAt);

  });
}

// function that hide and show the chat bettween the users 
function openChat(userId, name) {
  activeChatUserId = userId;

  const messenger = document.getElementById('rightSide');

  if (messenger.style.display === 'none') {
    messenger.style.display = 'block';
  }

  io.socket.post('/messages', { user2: userId}, function (resData) {
    document.getElementById('messages').innerHTML = '';
    // renders each fetched chat message
    resData?.forEach(message => {
      renderMessage(!(message.user1 == userId), message.text)
    })
  });


  document.getElementById('userName').innerHTML = name;
  

}



