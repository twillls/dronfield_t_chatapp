export default {
    props: ['nickname'],

    template:
    `
    <input 
        v-bind:value="nickname" 
        v-on:keyup.enter="changeNickname" 
        class="change-user-input"
        type="text"
    >
    `,

}