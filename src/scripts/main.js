var app = new Vue({
    delimiters: ['${', '}'], // required for nunjucks
    el: '#app',
    data: {
        message: 'Hello world!'
    }
});