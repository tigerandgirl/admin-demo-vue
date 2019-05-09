import breadcrumb from '../../common/breadcrumb'

export default {
    components:{
        breadcrumb
    },
    data(){
        return {
            showCollapse: "1",
            brand:[
                {name: 'lang.exp'},
                {name: 'lang.table'},
                {name: 'te.modify'}
            ],
            hasIcon:false,
            user:{
                name:'',
                age:'',
                sex:'',
                phone:'',
                email:'',
                education:''
            }
        }
    },
    methods:{
        back(){
            this.$router.push({path:'table_exp'});
        },
        addUser(formName){
            //首先要进行验证，验证成功后，执行跳转到列表页
            let _this = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.axios.post(this.URL.addUser,{user:_this.user}).then(function(response){
                        //console.log(response);
                        if(response.data.result == 1){
                            _this.$message({
                                type: 'success',
                                showClose: true,
                                message: _this.$t('te.modify_success')
                            });
                            _this.$router.push({path:'table_exp'});
                        }else{
                        }
                    }).catch(function(error){
                        console.log(error);
                    })
                } else {
                    return false;
        }
        })
        },
        showDetails(){
            //展示数据到文本框
            const userObj = this.$route.query.user;
            console.log(userObj);
            this.user.name = userObj.username;
            this.user.age = userObj.age;
            this.user.email = userObj.email;
            this.user.phone = userObj.phone;
            this.user.education  = userObj.education;
            this.user.sex = userObj.sex;

        }
    },
    mounted(){
        this.showDetails();
    },
    computed:{
        males:function(){
            return [
                {
                    label:this.$t('te.male'),
                    value:'1'
                },
                {
                    label:this.$t('te.female'),
                    value:'2'
                }
            ]
        },
        educations:function(){
            return [
                {
                    label: this.$t('te.high_school'),
                    value: 1
                },
                {
                    label:this.$t('te.junior_college'),
                    value:2
                },
                {
                    label:this.$t('te.undergraduate'),
                    value:3
                },
                {
                    label:this.$t('te.master'),
                    value:4
                }
            ]
        },
        userRules:function(){
            return {
                name:[
                    {required:true,message:this.$t('te.input_name'),trigger:'blur'}
                ],
                age:[
                    {required:true,message:this.$t('te.input_age'),trigger:'blur'}
                ],
                sex:[
                    {required:true,message:this.$t('te.input_sex'),trigger:'blur'}
                ],
                phone:[
                    {required:true,message:this.$t('te.input_phone'),trigger:'blur'}
                ],
                email:[
                    {required:true,message:this.$t('te.input_email'),trigger:'blur'}
                ],
                education:[
                    {required:true,message:this.$t('te.input_education'),trigger:'blur'}
                ]
            }
        }
    }
}