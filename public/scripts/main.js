import ChatMessage from "./components/TheMessageComponent.js"

(() => {
    console.log('fired');

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

    const vm = new Vue({
        data: {
            messages: [],
            nickname: "",
            username: "",
            socketID: "",
            message: ""
        },

        created: function() {
            console.log("it's alive!!");
        },

        methods: {
            dispatchMessage(){
                // debugger;
                socket.emit("chatmessage", {content: this.message, name: this.nickname || "Anonymous" });
            }
        },

        components: {
            newmessage: ChatMessage
        }

    }).$mount("#app");

    socket.addEventListener("connected", setUserId);
    socket.addEventListener("message", appendMessage);
})();