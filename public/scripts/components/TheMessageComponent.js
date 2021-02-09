export default {
    props: ['msg', 'socketid'],

    template:
    `
    <article class="new-message" :class="{ 'my-message' : matchedID }">
        <h1 class="hidden">This is a message</h1>
        <h4> {{msg.message.name}} says: </h4>
        <p> {{msg.message.content}} </p>
    </article>
    `,

    data: function(){
        return {
            matchedID: this.socketid.sID == this.msg.id
        }
    }
}