import master_details from '../master_details'
import slave_table from '../slave_table'
import slave_details from '../slave_details'
import breadcrumb from '@/components/common/breadcrumb'

export default {
  props:['noBreadcrumb','orderDetails1'],
  components:{
    master_details,
    slave_table,
    slave_details,
    breadcrumb
  },
  data(){
    return {
      activeName: 'tab1',
      orderDetails:this.$route.query.orderDetails || this.orderDetails1,
      showSubTable:false,//是否隐藏商品子表
      showTab1:true,
      showTab2:false,
      showTab3:false,
      operate:'add',
      goodDetails:{},
      changeOperate: true,
      showDetails: false,
      orderAddHandle:false,
      orderLookHandle:false,
      orderUpdateHandle:false,
      showBreadcrumb:true,
      brand:[
        {name: 'lang.exp'},
        {name: 'lang.master_slave_table'},
        {name: 'mst.details_message'}
      ],
      hasIcon:false
    }
  },
  methods:{
    tabClick: function(tab){
      if(tab.name == "tab1"){
        this.showTab1 = true;
        this.showTab2 = false;
        this.showTab3 = false;
        this.showSubTable = false;
      }else if(tab.name == "tab2"){
        this.showTab1 = false;
        this.showTab2 = true;
        this.showTab3 = false;
        this.showSubTable = false;
        this.changeOperate = true;
      }else{
        this.showTab1 = false;
        this.showTab2 = false;
        this.showTab3 = true;
        this.showSubTable = true;
        this.changeOperate = false;
      }
    },
    addGood:function(){
      this.showTab3 = true;
      this.showDetails = false;
      this.operate = "add"
    },
    editGood:function(row){
      this.showTab3 = false;
      this.showDetails = true;
      this.operate = "edit"
      this.goodDetails = row;
    },
    clickAddButton:function(){
      this.addGood();
    }
  },
  mounted:function(){
    if(typeof(this.$route.query.orderDetails) != "undefined"){
      this.orderDetails = this.$route.query.orderDetails;
    }

    if(typeof(this.$route.query.showTab) != "undefined" ){
      this.$route.query.showTab
        if(this.$route.query.showTab =="tab2"){
          this.activeName="tab2";
          this.showTab1 = false;
          this.showTab2 = true;
          this.showTab3 = false;
        }
    }
    if(typeof(this.$route.query.operate) != "undefined"){
      let handle = this.$route.query.operate;
      if(handle == "add"){
        //那么允许添加订单基本信息
        this.orderAddHandle = true;

      }else if(handle == "edit"){
        this.orderEditHandle = true;
        /*this.orderDetails= this.$route.query.orderDetails;
        console.log(this.$route.query.orderDetails);*/
      }
    }else{
      this.orderLookHandle = true;
    }

    if(typeof(this.noBreadcrumb) !="undefined"){
      this.showBreadcrumb = this.noBreadcrumb;
    }



  }
}
