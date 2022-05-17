window.onload = function () {
        var app = new Vue({
            el: "#app",
            data:{
                products: [{id:1, title: "Ponkan", short_text:'', image:'md1.jpg', desc:"Good mandarine", char:'-', plant1: "Yummy taste", fruit1:"size: around 3.1-inch", fruit2:"No seeds", cycle1:"Orange", cycle2:"Summer"},
                {id:2, title: "Lukan", short_text:'', image:'md2.jpg', desc:"Good mandarine", char:'-', plant1: "Very yummy taste", fruit1:"size: around 3.3-inch", fruit2:"Not many seeds", cycle1:"Orange", cycle2:"Winter"},
                {id:3, title: "Swatow", short_text:'', image:'md3.jpg', desc:"Good mandarine", char:'-', plant1: "Not yummy taste", fruit1:"size: around 2.1-inch", fruit2:"Many seeds", cycle1:"Orange", cycle2:"Summer"},
                {id:4, title: "Mikan", short_text:'', image:'md4.jpg', desc:"Good mandarine", char:'-', plant1: "Just yummy taste", fruit1:"size: around 3-inch", fruit2:"Few seeds", cycle1:"Orange", cycle2:"Summer"},
                {id:5, title: "Clementine", short_text:'', image:'md5.jpg', desc:"Good mandarine", char:'-', plant1: "That yummy taste", fruit1:"size: around 3-inch", fruit2:"Many seeds", cycle1:"Orange", cycle2:"Summer"}],

                product: [{id:1, title: "Ponkan", char:'-', image:'md1.jpg', desc:"Good mandarine"},
                {id:2, title: "Lukan", char:'-', image:'md2.jpg', desc:"Good mandarine"},
                {id:3, title: "Swatow", char:'-', image:'md3.jpg', desc:"Good mandarine"},
                {id:4, title: "Mikan", char:'-', image:'md4.jpg', desc:"Good mandarine"},
                {id:5, title: "Clementine", char:'-', image:'md5.jpg', desc:"Good mandarine"}],   
                btnVisible : false          
            },
            
            mounted: function() {
                console.log(window.localStorage.getItem('prod')),
                this.getProduct();
                this.checkInCart();
            },
            methods: {
                addItem: function(id){
                    window.localStorage.setItem('prod', id);
                },
                getProduct:function(){
                    if(window.location.hash){
                        var id = window.location.hash.replace('#','');
                        if(this.products && this.products.length>0){
                            for(i in this.products){
                                if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                            }
                        }
                    }
                },
                addToCart:function(id){
                    
                    var cart = [];
                    
                    if(window.localStorage.getItem('cart')){
                        cart = window.localStorage.getItem('cart').split(',');
                        this.btnVisible = true;
                    }
                    if(cart.indexOf(String(id))==-1){
                        cart.push(id);
                        window.localStorage.setItem('cart', cart.join())
                        this.btnVisible = true;
                    }
                },
                checkInCart:function(){
                    if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) this.btnVisible=1;
                }
            }
           
        });
    };
