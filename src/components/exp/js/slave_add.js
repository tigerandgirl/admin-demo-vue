import breadcrumb from '@/components/common/breadcrumb'
export default{
  components:{
    breadcrumb,
  },
  props:['showIcon'],
  data(){
    return {
      brand:[
        {name: 'lang.exp'},
        {name: 'lang.master_slave_table'},
        {name: 'cm.add'}
      ],
      hasIcon:false,
      showCollapse:'1',
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
          this.$router.push({path:'tab',query:{showTab:'tab2',operate:this.$route.query.operate}});
        }else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    goBack:function(){
      this.$router.push({path:'tab',query:{showTab:'tab2',operate:this.$route.query.operate}});
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
