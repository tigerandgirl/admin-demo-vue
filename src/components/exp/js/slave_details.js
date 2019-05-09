export default {
  props:['operate','goods'],
  data(){
    return {
      addOperate:'true',
      good:{
        goodNo:'',
        orderNo:'',
        price:'',
        count:'',
        product:''
      }
    }
  },
  methods:{
    addGood:function(formName){
      let _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //提交表单数据
          //清空表单数据
          this.$refs[formName].resetFields();
          this.$alert(this.$t('te.operate_success'),this.$t('cm.tips'));
          //刷新列表数据
        }else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetGood:function(){
      this.$refs['goodRules'].resetFields();
    },
    editGood:function(formName){
      let _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //提交表单数据
          //清空表单数据
          //返回新增表单
          this.$refs[formName].resetFields();
          this.$alert(this.$t('te.operate_success'),this.$t('cm.tips'));
          this.$emit("trigger");
          //刷新列表数据
        }else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    returnGood:function(){
      this.$emit("trigger");
    }
  },
  mounted(){
    //console.log(this.operate+"111");
    if(this.operate == "add"){
      this.addOperate = true;
    }else{
      this.addOperate = false;
      this.good.goodNo = this.goods.goodNo;
      this.good.orderNo = this.goods.orderNo;
      this.good.price = this.goods.price;
      this.good.count = this.goods.count;
      this.good.product = this.goods.product;

    }
  },
  computed:{
    goodRules:function(){
      return {
        goodNo:[
          {required:true,message:this.$t('mst.good_no'),trigger:'blur'}
        ],
        orderNo:[
          {required:true,message:this.$t('mst.good_date'),trigger:'blur'}
        ],
        price:[
          {required:true,message:this.$t('mst.good_price'),trigger:'blur'}
        ],
        count:[
          {required:true,message:this.$t('mst.good_count'),trigger:'blur'}
        ],
        product:[
          {required:true,message:this.$t('mst.good_product'),trigger:'blur'}
        ]
      }
    }
  }
}
