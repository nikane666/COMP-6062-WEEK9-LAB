console.log('Vue scripts loaded');

const app = Vue.createApp({
    data(){
        return{
            greeting: 'Welcome to the Vue.js!',
            showMessage: true
        };
    }
});

app.mount('#app');