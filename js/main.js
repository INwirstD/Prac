window.onload = function () {
        var app = new Vue({
            el: "#app",
            data:{
                products: [{id:1, title: "Ponkan", short_text:'', image:'md1.jpg', desc:"Full desc"},
                {id:2, title: "Lukan", short_text:'', image:'md2.jpg', desc:"Full desc"},
                {id:3, title: "Swatow", short_text:'', image:'md3.jpg', desc:"Full desc"},
                {id:4, title: "Mikan", short_text:'', image:'md4.jpg', desc:"Full desc"},
                {id:5, title: "Clementine", short_text:'', image:'md5.jpg', desc:"Full desc"}]
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
    };
