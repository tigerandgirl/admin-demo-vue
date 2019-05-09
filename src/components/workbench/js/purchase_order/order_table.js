import Vue from "vue"
import orderDetail from '../../purchase_order/order_detail'

export default{
    components:{
        orderDetail
    },
    data(){
        return {
            isSelected: [],
            good_dialog: false,
            activeName:[],
            tableData1:[
            ],
            currentPage: 1,
            pageCount: 0,
            objData:{
                username:"",
                age:"",
                sex:"",
                phone:"",
                email:"",
                education:""
            },
            objeDataToDetails:{
                name:"",
                no:"",
                weight:"",
                product:"",
                date:""
            },
            multipleSelection:[],
            singleTable:[],
        }
    },

    methods:{
        checkSelected : function(val){
            //val 为更新后的值
            if(val == true){
                let rows = this.tableData1;
                rows.forEach(row =>{
                    this.$refs.multipleSelection.toggleRowSelection(row,true);
            });
            }else{
                this.$refs.multipleSelection.clearSelection();
            }
        },
        advanceSearch : function(){
            let _this = this;
            if(this.advSearch == "te.advance_search"){
                this.advSearch = "te.return";

            }else{
                this.advSearch = "te.advance_search";
            }
        },
        addUser:function(){
            this.$router.push({path:'order_add'});
        },
        showDetails:function(row){
            this.objeDataToDetails.name = row.name;
            this.objeDataToDetails.no = row.no;
            this.objeDataToDetails.weight = row.weight;
            this.objeDataToDetails.product = row.product;
            this.objeDataToDetails.date = row.date;

            this.good_dialog = true;
        },
        openDetail:function(row,event){
            this.objeDataToDetails.name = row.name;
            this.objeDataToDetails.no = row.no;
            this.objeDataToDetails.weight = row.weight;
            this.objeDataToDetails.product = row.product;
            this.objeDataToDetails.date = row.date;

            this.good_dialog = true;
        },
        _openDetails:function(){
            //this.getUserData();
        },
        editOrder:function(row){
            //console.log(row);
            //跳转到编辑页面 点击保存  以子组件的形式弹出
            this.objeDataToDetails.name = row.name;
            this.objeDataToDetails.no = row.no;
            this.objeDataToDetails.weight = row.weight;
            this.objeDataToDetails.product = row.product;
            this.objeDataToDetails.date = row.date;
            this.objeDataToDetails.desc = row.desc;

            //传递到父组件  切换到第三个选项卡
            this.$emit("editOrder",this.objeDataToDetails);
        },
        //每页条目数变化
        handleSizeChange(val) {
            let _this = this;
            this.axios.post(this.URL.userSizeChange,{pageSize:val}).then(function(response){
                _this.tableData1 = [];
                let array = response.data.users;
                for(let i = 0; i < array.length; i++){
                    _this.tableData1.push(array[i]);
                }
                _this.currentPage = 1;
                _this.pageCount = response.data.pageCount;
            }).catch(function(error){
                console.log(error);
            })
        },
        //点击页数进行翻页
        handleCurrentChange(val) {
            let _this = this;
            this.axios.post(this.URL.selectPageNum,{pageSize:val}).then(function(response){
                _this.tableData1 = [];
                let array = response.data.users;
                for(let i = 0; i < array.length; i++){
                    _this.tableData1.push(array[i]);
                }
                _this.currentPage = 1;
                _this.pageCount = response.data.pageCount;
            }).catch(function(error){
                console.log(error);
            })
        },
        //上一页
        prePage:function(nowPage){
            let _this = this;
            this.axios.post(this.URL.selectPageNum,{pageNum:nowPage-1}).then(function(response){
                _this.tableData1 = [];
                let array = response.data.users;
                for(let i = 0; i < array.length; i++){
                    _this.tableData1.push(array[i]);
                }
                _this.currentPage = 1;
                _this.pageCount = response.data.pageCount;
            }).catch(function(error){
                console.log(error);
            })
        },
        nextPage:function(nowPage){
            let _this = this;
            this.axios.post(this.URL.selectPageNum,{pageNum:nowPage+1}).then(function(response){
                _this.tableData1 = [];
                let array = response.data.users;
                for(let i = 0; i < array.length; i++){
                    _this.tableData1.push(array[i]);
                }
                _this.currentPage = 1;
                _this.pageCount = response.data.pageCount;
            }).catch(function(error){
                console.log(error);
            })
        },
        delClick(row) {
            //这里的属性没有给public key 后面不带
            let _this = this;
            this.$confirm(this.$t('po.delete_tips'), this.$t('po.tips'), {
                confirmButtonText: this.$t('po.confirm'),
                cancelButtonText: this.$t('po.cancel'),
                cancelButtonClass: 'btn-second',
                confirmButtonClass: 'btn-default',
                type: 'error'
            }).then(() => {
                this.axios.post(thi.URL.deleteOrder,{}).then(function(response){
                if(response.data.result == 1){
                    _this.$message({
                        type: 'success',
                        message: _this.$t('po.delete_success'),
                        showClose: true
                    });
                    //请重新刷新列表
                }
            }).catch(function(error){
                console.log(error);
            })
        }).catch(() => {
                this.$message({
                type: 'info',
                message: this.$t('po.cancel_delete'),
                showClose: true
            });
        });
        },
        closeDialog(){
            this.good_dialog = false;
        },
        exportExcel(){
            let _this = this;
            this.$confirm(this.$t('po.is_export'), this.$t('po.tips'), {
                confirmButtonText: this.$t('po.confirm'),
                cancelButtonText: this.$t('po.cancel'),
                cancelButtonClass: 'btn-second',
                confirmButtonClass: 'btn-default',
                type: 'warning'
            }).then(() => {
                this.axios.post(this.URL.exportOrder,{}).then(function(response){
                if(response.data.result == 1){
                    _this.$message({
                        type: 'success',
                        message: _this.$t('po.operate_success'),
                        showClose: true
                    });
                }
            }).catch(function(error){
                console.log(error);
            })
        }).catch(() => {
                this.$message({
                type: 'info',
                message: this.$t('po.cancel_operate'),
                showClose: true
            });
        });
        },
        batchDel:function(rows){
            //进行批量删除操作
            let _this = this;
            if(this.multipleSelection.length > 0){
                this.$confirm(this.$t('po.delete_batch'), this.$t('po.tips'), {
                    confirmButtonText: this.$t('po.confirm'),
                    cancelButtonText: this.$t('po.cancel'),
                    cancelButtonClass: 'btn-second',
                    confirmButtonClass: 'btn-default',
                    type: 'error'
                }).then(() => {
                    this.axios.post(this.URL.deleteOrder,{}).then(function(response){
                    if(response.data.result == 1){
                        _this.$message({
                            type: 'success',
                            message: _this.$t('po.operate_success'),
                            showClose: true
                        });
                    }
                }).catch(function(error){
                    console.log(error);
                })
            }).catch(() => {
                    this.$message({
                    type: 'info',
                    message: this.$t('po.cancel_operate'),
                    showClose: true
                });
            });
            }else{
                this.$alert(this.$t('po.no_any_selected'),this.$t('po.tips'))
            }
        },
        handleSelectionChange: function(val){
            this.multipleSelection = val;
        },
        //重置操作
        resetData:function(){
            this.name = '';
            this.age = '';
            this.education = '';
            this.email = '';
        }
    },
    computed:{
        options:function(){
            return [
                {
                    label: this.$t('te.high_school'),
                    value: this.$t('te.high_school')
                },
                {
                    label:this.$t('te.junior_college'),
                    value:this.$t('te.junior_college')
                },
                {
                    label:this.$t('te.undergraduate'),
                    value:this.$t('te.undergraduate')
                },
                {
                    label:this.$t('te.master'),
                    value:this.$t('te.master')
                }
            ]
        }
    },
    mounted(){
        var _this = this;
        this.axios.post(this.URL.getOrderList,{t:Math.random()}).then(function(response){
            let array = response.data.order;
            for(let i = 0; i < array.length; i++){
                _this.tableData1.push(array[i]);
            }
            _this.currentPage = 1;
            _this.pageCount = response.data.pageCount;
        }).catch(function(error){
            console.log(error);
        })
    }

}