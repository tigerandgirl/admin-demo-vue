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
        {name: 'lang.master_slave_table'},
        {name: 'te.modify'}
      ],
      hasIcon:false,
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
    save:function(formName){
      let _this = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({path:'tab',query:{showTab:'tab2',operate:this.$route.query.operate}});
        }else {
            console.log('error submit!!');
            return false;
         }
      });
    },
    back:function(){
      this.$router.push({path:'tab',query:{showTab:'tab2',operate:this.$route.query.operate}});
    },
    showDetails:function(){
      //展示数据到文本框
      const good = this.$route.query.good;
      this.good.goodNo = good.goodNo;
      this.good.orderNo = good.orderNo;
      this.good.price = good.price;
      this.good.count = good.count;
      this.good.product  = good.product;
    }
  },
  mounted(){
    this.showDetails();
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
