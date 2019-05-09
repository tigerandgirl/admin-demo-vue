import breadcrumb from '@/components/common/breadcrumb'

export default {
    components:{
        breadcrumb
    },
    props:['sendData'],
    data(){
        return {
            brand:[
                {name: 'lang.exp'},
                {name: 'lang.purchase_order'},
                {name: 'po.add'}
            ],
            hasIcon: false,
            showCollapse: "1",
            order:{
                name: '' ,
                no: '' ,
                weight: '',
                product: '' ,
                desc: '',
            }
        }
    },
    methods:{

        addOrder(formName){
            //首先要进行验证，验证成功后，执行其他操作  是否进行跳转页面
            let _this = this;
            this.$refs[formName].validate(function(valid){
                if(valid){
                    //直接刷新下方列表
                    _this.axios.post(_this.URL.addOrder,{prder:_this.order}).then(function(response){
                        if(response.data.result == 1){
                            _this.$message({
                                type: 'success',
                                showClose: true,
                                message: _this.$t('po.add_success')
                            });
                            _this.$router.push({path:'purchase_order'});
                        }else{
                        }
                    }).catch(function(error){
                        console.log(error);
                    })
                }else{
                    return false;
                }
            })
        },
        back:function(){
            this.$router.go(-1);
        }

    },

    computed:{
        orderRules:function(){
            return {
                name:[
                    {required:true,message:this.$t('po.input_good_name'),trigger:'blur'}
                ],
                no:[
                    {required:true,message:this.$t('po.input_good_no'),trigger:'blur'}
                ],
                weight:[
                    {required:true,message:this.$t('po.input_good_weight'),trigger:'blur'}
                ],
                product:[
                    {required:true,message:this.$t('po.input_good_product'),trigger:'blur'}
                ],
                desc:[
                    {required:true,message:this.$t('po.input_good_desc'),trigger:'blur'}
                ]
            }
        }
    }
}