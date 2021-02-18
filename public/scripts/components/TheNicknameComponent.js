export default {
    props: ['msg', 'socketid'],

    data: function(){
        return {
            matchedID: this.socketid.sID == this.msg.id
        }
    }
}