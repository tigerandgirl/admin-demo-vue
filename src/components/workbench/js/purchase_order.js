import breadcrumb from '../../common/breadcrumb'
import orderDetails from '../purchase_order/order_details'
import orderTable from '../purchase_order/order_table'


export default {
    components:{
        breadcrumb,
        orderDetails,
        orderTable
    },
    data(){
        return {
            brand:[
                {name: 'lang.workbench'},
                {name: 'lang.purchase_order'}
            ],
            hasIcon:false,
            collapse:['0'],
            activeName: 'first',
            showTable:true,
            renderTab1: true,
            renderTab2: false,
            renderTab3: false,
            orderDetail:[]
        }
    },
    methods:{
        tabSwitch(tab){
            if(tab.name=="first"){
                this.showTable = true;
                this.renderTab1 = true;
                this.renderTab2 = false;
                this.renderTab3 = false;

            }else if(tab.name == "second"){

                this.showTable = false;
                this.renderTab1 = false;
                this.renderTab2 = true;
                this.renderTab3 = false;
            }else{
                this.showTable = false;
                this.renderTab1 = false;
                this.renderTab2 = false;
                this.renderTab3 = true;
                this.orderDetail = [];
            }


        },
        //切换到第三个选项卡，进行订单编辑操作
        toOrderDetail2:function(details){
            //console.log(details);
            this.activeName = "third";
            this.renderTab1 = false;
            this.renderTab3 = true;
            this.showTable = false;
            this.orderDetail = details;
        },
        toOrderDetail3:function(details){
            //console.log(details);
            this.activeName = "second";
            this.renderTab1 = false;
            this.renderTab3 = false;
            this.renderTab2 = true;
            this.showTable = false;
        }

    }
}