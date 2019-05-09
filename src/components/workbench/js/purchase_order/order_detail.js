export default{
    data(){
        return {
            good:{
                name:'',
                no:'',
                weight:'',
                product:'',
                date:'',
                desc:''
            }
        }
    },

    props:['sendData'],

    methods:{
        closeWindow(value){ // 如果不清楚，就不要随便用箭头函数了
            this.$emit("closeWindows",value);
            //调用父类组件的方法 关闭对话框  无效

            //this.$parent.closeComponent1();
        },
        getGoodData(){
            setTimeout(function(){
                alert(sendData);
                this.good.name = this.sendData.name;
                this.good.no = this.sendData.no;
                this.good.weight = this.sendData.weight;
                this.good.product = this.sendData.product;
                this.good.date  = this.sendData.date;
                this.good.desc = this.sendData.desc;
            },100)
        }
    },
    mounted(){
        //getGoodData();
    }
}