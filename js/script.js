const { createApp } = Vue;

createApp({
    data() {
        return {
            title:'Welcome',
            message: 'This is a vue test',
            image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/03/vue-circles.jpg?fit=1200%2C600&ssl=1'
            
        }
    },
}).mount('#app');