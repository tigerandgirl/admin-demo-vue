import table_details from "../table_details"
import Vue from "vue"
import breadcrumb from '../../common/breadcrumb'
import manage from '../../manage'


export default{
    components:{
        table_details,
        breadcrumb
    },
    data(){
        return {
            isSelected: [],
            is_collapse: false,
            dialogDetailsUser: false,
            activeName:[],
            brand:[
                {name: 'lang.exp'},
                {name: 'lang.table'}
            ],
            hasIcon:false,
            dialogEditUser:false,
            advSearch:'te.advance_search',
            name:'',
            age:'',
            education:'',
            email:'',
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
                username:"",
                age:"",
                sex:"",
                phone:"",
                email:"",
                education:""
            },
            multipleSelection:[],
            singleTable:[],
            nameOrAge:'',//用于执行普通搜索
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
            this.$router.push({path:'table_add'});
        },
        showDetails:function(row){
            console.log(row)
            this.objeDataToDetails.username = row.name;
            this.objeDataToDetails.age = row.age;
            this.objeDataToDetails.sex = row.sex;
            this.objeDataToDetails.phone = row.phone;
            this.objeDataToDetails.education = row.education;
            this.objeDataToDetails.email = row.email;

            this.dialogDetailsUser = true;
        },
        openDetail:function(row,event){
            //点击打开详情页面 row表示行数据  但把id 隐藏起来，可以通过id查到数据
            this.objeDataToDetails.username = row.name;
            this.objeDataToDetails.age = row.age;
            this.objeDataToDetails.sex = row.sex;
            this.objeDataToDetails.phone = row.phone;
            this.objeDataToDetails.education = row.education;
            this.objeDataToDetails.email = row.email;

            this.dialogDetailsUser = true;
        },
        _openDetails:function(){
            //this.getUserData();
        },
        editUser:function(row){
            //console.log(row);
            //跳转到编辑页面 点击保存  以子组件的形式弹出
            this.objData.username = row.name;
            this.objData.age = row.age;
            this.objData.sex = row.sex;
            this.objData.phone = row.phone;
            this.objData.education = row.education;
            this.objData.email = row.email;

            this.dialogEditUser = true;
            this.$router.push({path:'table_edit',query:{user:this.objData}});
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
            this.$confirm(this.$t('te.delete_tips'), this.$t('te.tips'), {
                confirmButtonText: this.$t('te.confirm'),
                cancelButtonText: this.$t('te.cancel'),
                cancelButtonClass: 'btn-second',
                confirmButtonClass: 'btn-default',
                type: 'error'
            }).then(() => {
                this.axios.post(thi.URL.deleteUser,{}).then(function(response){
                if(response.data.result == 1){
                    _this.$message({
                        type: 'success',
                        message: _this.$t('te.delete_success'),
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
                message: this.$t('te.cancel_delete'),
                showClose: true
            });
        });
        },
        closeComponent3(){
            this.dialogDetailsUser = false;
        },
        exportExcel(){
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
        handleSelectionChange: function(val){
            this.multipleSelection = val;
        },

        //普通搜索
        commonSearch:function(){
            if(this.nameOrAge.trim != ""){
                let _this = this;
                this.axios.post(this.URL.getUserListByParam,{param:_this.nameOrAge}).then(function(response){
                    let array = response.data.users;
                    //先清空
                    _this.tableData1 = [];
                    for(let i = 0; i < array.length; i++){
                        _this.tableData1.push(array[i]);
                    }
                    _this.currentPage = 1;
                    _this.pageCount = response.data.pageCount;
                }).catch(function(error){
                    console.log(error);
                })
            }else{

            }
        },
        //高级搜索
        search:function(){
            let _this = this;
            this.axios.post(this.URL.getUserListByAdvance,{name:_this.name,age:_this.age,education:_this.education,email:_this.email}).then(function(response){
                let array = response.data.users;
                //先清空
                _this.tableData1 = [];
                for(let i = 0; i < array.length; i++){
                    _this.tableData1.push(array[i]);
                }
                _this.currentPage = 1;
                _this.pageCount = response.data.pageCount;
            }).catch(function(error){
                console.log(error);
            })
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
        },
        changeCollapse:function(){
          return this.$root.COLLAPSE;
        }
    },
    mounted(){
        var _this = this;
        this.axios.post(this.URL.getUserList,{t:Math.random()}).then(function(response){
            let array = response.data.users;
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
