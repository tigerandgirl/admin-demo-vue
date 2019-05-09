export default{
  props:['orderDetails','orderLookHandles'],
  data(){
    return {
      order:{
        no:'',
        name:'',
        phone:'',
        price:'',
        time:''
      },
      orderLookHandle:false,
      orderEditHandle:false,
      orderAddHandle:false,
      brand:[
        {name: 'lang.exp'},
        {name: 'lang.master_slave_table'},
        {name: 'mst.details_message'}
      ],
      hasIcon:false,
    }
  },
  mounted:function(){
    this.showDetails();
    if(this.$route.query.operate == "add"){
      this.orderAddHandle = true;
    }else if(this.$route.query.operate == "edit"){
      this.orderEditHandle = true;
    }else{
      this.orderLookHandle = true;
    }
  },
  methods:{
    back:function(){
      this.$router.push({path:'master_slave_table'});
    },
    save:function(formName){
      let _this = this;
      _this.$refs[formName].validate((valid) =>{
        if (valid) {
          //这里进行添加操作
          _this.$router.push({path:'master_slave_table'});
        }else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    edit:function(formName){
      let _this = this;
      _this.$refs[formName].validate((valid) =>{
        if (valid) {
          //这里进行编辑操作
          _this.$router.push({path:'master_slave_table'});
        }else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    showDetails:function(){
      if(typeof(this.orderDetails) != "undefined"){

        this.order.name = this.orderDetails.name;
        this.order.no = this.orderDetails.no;
        this.order.phone = this.orderDetails.phone;
        this.order.price = this.orderDetails.price;
        this.order.time = this.orderDetails.time;

      }
      if(typeof(this.orderLookHandles) != "undefined"){
        this.orderLookHandle = this.orderLookHandles;
      }
    }
  },
  computed:{
    orderRules:function(){
      return {
        no:[
          {required:true,message:"订单编号",trigger:'blur'}
        ],
        name:[
          {required:true,message:"收货人姓名",trigger:'blur'}
        ],
        phone:[
          {required:true,message:"联系电话",trigger:'blur'}
        ],
        price:[
          {required:true,message:"订单金额",trigger:'blur'}
        ],
        time:[
          {required:true,message:"下单时间",trigger:'blur'}
        ]
      }
    }
  }

}
