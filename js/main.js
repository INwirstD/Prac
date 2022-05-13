var app = new Vue({
    el: "article",
    data:{
        products: [{id:1, title: "Prod 1", short_text:'short_text', image:'TAG1003', desc:"Full desc"},
        {id:1, title: "Prod 1", short_text:'short_text', image:'TAG1003', desc:"Full desc"},
        {id:1, title: "Prod 1", short_text:'short_text', image:'TAG1003', desc:"Full desc"},
        {id:1, title: "Prod 1", short_text:'short_text', image:'TAG1003', desc:"Full desc"},
        {id:1, title: "Prod 1", short_text:'short_text', image:'TAG1003', desc:"Full desc"}]
    },
    mounted: function() {
        console.log(window.localStorage.getItem('prod'));
    },
    methods: {
        addItem: function(id){
            window.localStorage.setItem('prod', id);
        }
    }
});