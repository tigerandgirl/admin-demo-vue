import breadcrumb from '../../common/breadcrumb'
import tab from '@/components/exp/tab'

export default {
    components:{
        breadcrumb,
        tab
    },
    data(){
        return {
            brand:[
                {name: 'lang.exp'},
                {name: 'lang.master_slave_table'}
            ],
            hasIcon:false,
            tableData:[],
            orderDetails:{
              no:'',
              name:'',
              phone:'',
              price:'',
              time:''
            },
            currentPage:1,
            pageCount:1,
            is_collapse: false,
            multipleSelection:[],
            isSelected: [],
            nameOrAge:'',
            advSearch:'te.advance_search',
            activeName:[],
            name:'',
            address:'',
            phone:'',
            orderNo:'',
            dialogDetailsOrder:false,
            noBreadcrumb:false //查看没有面包屑

        }
    },
    methods:{
      showDetails:function(row){
        this.dialogDetailsOrder = true;
        //带着基本信息做页面跳转到tab页 分别展示基本信息 商品列表
        this.orderDetails.no = row.no;
        this.orderDetails.name = row.name;
        this.orderDetails.phone = row.phone;
        this.orderDetails.price = row.price;
        this.orderDetails.time = row.time;
        /*this.$router.push({path:'tab',query:{operate:'edit',orderDetails:this.orderDetails}});*/
      },
      addOrder:function(){
         this.$router.push({path:'tab',query:{operate:"add"}});
      },
      editOrder:function(row){
        this.orderDetails.no = row.no;
        this.orderDetails.name = row.name;
        this.orderDetails.phone = row.phone;
        this.orderDetails.price = row.price;
        this.orderDetails.time = row.time;
        this.$router.push({path:'tab',query:{operate:'edit',orderDetails:this.orderDetails}})
      },
      delOrder:function(row){
          let _this = this;
          this.$confirm(this.$t('te.delete_tips'), this.$t('te.tips'), {
              confirmButtonText: this.$t('te.confirm'),
              cancelButtonText: this.$t('te.cancel'),
              cancelButtonClass: 'btn-second',
              confirmButtonClass: 'btn-default',
              type: 'error'
          }).then(() => {
              _this.$message({
                  type: 'success',
                  message: _this.$t('te.delete_success'),
                  showClose: true
              });
          }).catch(() => {
              this.$message({
                  type: 'info',
                  message: this.$t('te.cancel_delete'),
                  showClose: true
              });
          });
      },
      handleSelectionChange: function(val){
        this.multipleSelection = val;
      },
      checkSelected : function(val){
        //val 为更新后的值
        if(val == true){
            let rows = this.tableData;
            rows.forEach(row =>{
                this.$refs.multipleSelection.toggleRowSelection(row,true);
            });
        }else{
            this.$refs.multipleSelection.clearSelection();
        }
      },
        //每页条目数变化
        handleSizeChange(val) {
            let _this = this;
            this.axios.post(this.URL.userSizeChange,{pageSize:val}).then(function(response){
                _this.tableData = [];
                let array = response.data.users;
                for(let i = 0; i < array.length; i++){
                    _this.tableData.push(array[i]);
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
                _this.tableData = [];
                let array = response.data.users;
                for(let i = 0; i < array.length; i++){
                    _this.tableData.push(array[i]);
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
                _this.tableData = [];
                let array = response.data.users;
                for(let i = 0; i < array.length; i++){
                    _this.tableData.push(array[i]);
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
                    _this.tableData.push(array[i]);
                }
                _this.currentPage = 1;
                _this.pageCount = response.data.pageCount;
            }).catch(function(error){
                console.log(error);
            })
        },
        batchDel:function(rows){
            //进行批量删除操作
            let _this = this;
            if(this.multipleSelection.length > 0){
                this.$confirm(this.$t('te.delete_batch'), this.$t('te.tips'), {
                    confirmButtonText: this.$t('te.confirm'),
                    cancelButtonText: this.$t('te.cancel'),
                    cancelButtonClass: 'btn-second',
                    confirmButtonClass: 'btn-default',
                    type: 'error'
                }).then(() => {
                    this.axios.post(this.URL.deleteUser,{}).then(function(response){
                        if(response.data.result == 1){
                            _this.$message({
                                type: 'success',
                                message: _this.$t('te.operate_success'),
                                showClose: true
                            });
                        }
                    }).catch(function(error){
                        console.log(error);
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: this.$t('te.cancel_operate'),
                        showClose: true
                    });
                });
            }else{
                this.$alert(this.$t('te.no_any_selected'),this.$t('te.tips'))
            }
        },
        exportOrder:function(){
            let _this = this;
            this.$confirm(this.$t('te.is_export'), this.$t('te.tips'), {
                confirmButtonText: this.$t('te.confirm'),
                cancelButtonText: this.$t('te.cancel'),
                cancelButtonClass: 'btn-second',
                confirmButtonClass: 'btn-default',
                type: 'warning'
            }).then(() => {
                this.axios.post(this.URL.exportUser,{}).then(function(response){
                    if(response.data.result == 1){
                        _this.$message({
                            type: 'success',
                            message: _this.$t('te.operate_success'),
                            showClose: true
                        });
                    }
                }).catch(function(error){
                    console.log(error);
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: this.$t('te.cancel_operate'),
                    showClose: true
                });
            });
        },
        //普通搜索
        commonSearch:function(){
            if(this.nameOrAge.trim != ""){
                let _this = this;
                this.axios.post(this.URL.getUserListByParam,{param:_this.nameOrAge}).then(function(response){
                    let array = response.data.users;
                    //先清空
                    _this.tableData = [];
                    for(let i = 0; i < array.length; i++){
                        _this.tableData.push(array[i]);
                    }
                    _this.currentPage = 1;
                    _this.pageCount = response.data.pageCount;
                }).catch(function(error){
                    console.log(error);
                })
            }else{

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
        //重置操作
        resetData:function(){
            this.name = '';
            this.address = '';
            this.phone = '';
            this.orderNo = '';
        },
        //高级搜索
        search:function(){
            let _this = this;
            this.axios.post(this.URL.getUserListByAdvance,{name:_this.name,age:_this.age,education:_this.education,email:_this.email}).then(function(response){
                let array = response.data.users;
                //先清空
                _this.tableData = [];
                for(let i = 0; i < array.length; i++){
                    _this.tableData.push(array[i]);
                }
                _this.currentPage = 1;
                _this.pageCount = response.data.pageCount;
            }).catch(function(error){
                console.log(error);
            })
        }

    },
    mounted:function(){
      //查询订单列表
      var _this = this;
      this.axios.post(this.URL.getOrderList,{t:Math.random()}).then(function(response){
          let array = response.data.order;
          for(let i = 0; i < array.length; i++){
            _this.tableData.push(array[i]);
          }
          _this.currentPage = 1;
          _this.pageCount = response.data.pageCount;
      }).catch(function(err){
          console.log(err);
      })
    },
    computed:{
      changeCollapse:function(){
        return this.$root.COLLAPSE;
      }
    }
}
