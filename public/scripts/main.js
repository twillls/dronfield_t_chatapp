import ChatMessage from './components/TheMessageComponent.js';
import Nickname from './components/TheNicknameComponent.js';

(() => {
    const socket = io();

    // messenger service event handling > INCOMING from the manager
    function setUserId(sID, message){
        // incoming connected event w data
        // debugger;

        vm.socketID = sID;
    }

    function appendMessage(message){
        // imcoming message push to messages array
        vm.messages.push(message);
    }

    function appendNickname(nickname){
        // push new nickname
        vm.username=nickname;
    }

    const vm = new Vue({
        data: {
            messages: [],
            nickname: '',
            socketID: '',
            message: '',
            username: '',
            showUserChange: false,
            isTyping: ''
        },

        methods: {
            dispatchMessage(){
                // debugger;
                socket.emit('chatmessage', {content: this.message, name: this.nickname || 'Anonymous' });
            
                this.message = '';
            },

            changeNickname(){
                this.nickname = event.target.previousElementSibling.value;
            },

            toggleChangeUsername(){
                event.target.nextElementSibling.classList.toggle('show-change-user');
            },

            hideChangeUsername(){
                event.target.parentElement.classList.remove('show-change-user');
            },
        },

        components: {
            newmessage: ChatMessage,
            newNickname: Nickname,
        }

    }).$mount('#app');

    socket.addEventListener('connected', setUserId);
    socket.addEventListener('message', appendNickname);
    socket.addEventListener('message', appendMessage);
    socket.addEventListener('nickname', appendNickname);
})();