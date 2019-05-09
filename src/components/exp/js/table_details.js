export default{
    data(){
        return {
            name:te.name,
            males:[
                {
                    label:'男',
                    value:'1'
                },
                {
                    label:'女',
                    value:'2'
                }
            ],
            user:{
                name:'',
                age:'',
                sex:'',
                phone:'',
                email:'',
                education:''
            },
            educations:[
                {
                    label:'高中',
                    value:'高中'
                },
                {
                    label:'大专',
                    value:'大专'
                },
                {
                    label:'本科',
                    value:'本科'
                },
                {
                    label:'硕士',
                    value:'硕士'
                }
            ]
        }
    },

    props:['sendData'],

    methods:{
        closeWindow(value){ // 如果不清楚，就不要随便用箭头函数了
            this.$emit("closeWindows",value);
            //调用父类组件的方法 关闭对话框  无效

            //this.$parent.closeComponent1();
        },
        getUserData(){
            setTimeout(()=>{
                this.user.name = this.sendData.username;
            this.user.age = this.sendData.age;
            this.user.email = this.sendData.email;
            this.user.phone = this.sendData.phone;
            this.user.education  = this.sendData.education;
            this.user.sex = this.sendData.sex;
        },100)
        }
    },
    mounted(){
        //this.getUserData();
    }
}