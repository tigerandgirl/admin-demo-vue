export default {
    props:['sendData'],
    data(){
        return {
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
        //重置功能
        reset(){
            this.$refs.orderRules.resetFields();
        },
        save(formName){
            //首先要进行验证，验证成功后，执行其他操作  是否进行跳转页面
            let _this = this;
            this.$refs[formName].validate(function(valid){
                if(valid){
                    if(typeof(_this.$props.sendData) != "undefined"){
                        //到列表中显示
                        _this.$emit("tabSelect",{name:"second"});
                    }else{
                        //直接刷新下方列表
                        _this.axios.post(_this.URL.addOrder,{prder:_this.order}).then(function(response){
                            if(response.data.result == 1){
                                _this.$message({
                                    type: 'success',
                                    showClose: true,
                                    message: _this.$t('po.add_success')
                                });
                                _this.reset();
                            }else{
                            }
                        }).catch(function(error){
                            console.log(error);
                        })
                    }
                }else{
                    return false;
                }
            })
        }

    },
    mounted:function(){
        //console.log(typeof(this.$props.sendData)=="object");
        if( typeof(this.$props.sendData) == "object" ){
            this.order.name = this.$props.sendData.name;
            this.order.no = this.$props.sendData.no;
            this.order.weight = this.$props.sendData.weight;
            this.order.product = this.$props.sendData.product;
            this.order.desc = this.$props.sendData.desc;
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