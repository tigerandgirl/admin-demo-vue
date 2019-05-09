import breadcrumb from '../../common/breadcrumb'
import slave_look from '../slave_look'

export default {
  components:{
    breadcrumb,
    slave_look
  },
  props:['changed'],
  data(){
    return {
      showCollapse:'1',
      brand:[
        {name: 'lang.exp'},
        {name: 'lang.table'},
        {name: 'te.add'}
      ],
      hasIcon:false,
      user:{
        name:'',
        age:'',
        sex:'',
        phone:'',
        email:'',
        education:''
      },
      tableData:[],
      multipleSelection:[],
      currentPage:1,
      pageCount:10,
      good_dialog:false,
      goodDetails:{
        goodNo:'',
        orderNo:'',
        price:'',
        count:'',
        product:''
      },
      changeOperate:true,
      addHandler:false,
      lookHandler:false,
      editHandler:false,
      isSelected:'',
    }
  },
  computed:{
    changeCollapse:function(){
      return this.$root.COLLAPSE;
    }
  },

  methods:{
    //选中框
    checkSelected:function(val){
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
    handleSelectionChange: function(val){
      this.multipleSelection = val;
    },
    addGood:function(){
      this.$router.push({path:'slave_add',query:{operate:this.$route.query.operate}});
    },
    addGood2:function(){
      this.$emit("add");
    },
    showGoodEdit:function(row){
      this.goodDetails = row;
      this.$router.push({path:'slave_edit',query:{good:this.goodDetails},query:{operate:this.$route.query.operate}});
    },
    showGoodEdit2:function(row){
      this.goodDetails = row;
      this.$emit("edit",this.goodDetails);
    },
    showGoodDetails:function(row){
      this.good_dialog = true;
      this.goodDetails = row;
    },
    delGood:function(row){
      let _this = this;
      this.$confirm(this.$t('te.delete_tips'), this.$t('cm.tips'), {
        confirmButtonText: this.$t('cm.confirm'),
        cancelButtonText: this.$t('cm.cancel'),
        cancelButtonClass: 'btn-second',
        confirmButtonClass: 'btn-default',
        type: 'error'
      }).then(() => {
        _this.$message({
          type: 'success',
          message: _this.$t('te.delete_success'),
          showClose: true
        });
        //请重新刷新列表
      }).catch(() => {
        this.$message({
          type: 'info',
          message: _this.$t('te.cancel_delete'),
          showClose: true
        });
      });
    },
    delGoods:function(row){
      //进行批量删除操作
      let _this = this;
      if(this.multipleSelection.length > 0){
        this.$confirm(this.$t('te.delete_batch'), this.$t('cm.tips'), {
          confirmButtonText: this.$t('te.confirm'),
          cancelButtonText: this.$t('te.cancel'),
          cancelButtonClass: 'btn-second',
          confirmButtonClass: 'btn-default',
          type: 'error'
        }).then(() => {
          _this.$message({
            type: 'success',
            message: _this.$t('te.operate_success'),
            showClose: true
          });
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
    //关闭对话框
    closeDialog:function(){
      this.good_dialog = false;
    },
    back:function(){
      this.$router.push({path:'table_exp'});
    },
    exportGood:function(){
      let _this = this;
      this.$confirm(this.$t('te.is_export'), this.$t('te.tips'), {
        confirmButtonText: this.$t('te.confirm'),
        cancelButtonText: this.$t('te.cancel'),
        cancelButtonClass: 'btn-second',
        confirmButtonClass: 'btn-default',
        type: 'warning'
      }).then(() => {
        _this.$message({
          type: 'success',
          message: _this.$t('te.operate_success'),
          showClose: true
        });
      }).catch(() => {
          this.$message({
            type: 'info',
            message: this.$t('te.cancel_operate'),
            showClose: true
          });
      });
    },

    //翻页相关操作
    handleSizeChange:function(val){
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
    handleCurrentChange:function(val){
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
    }
  },
  mounted(){
    let _this = this;
    this.axios.post(this.URL.getGoodList,{t:Math.random()}).then(function(response){
      let array = response.data.good;
      for(let i = 0; i < array.length; i++){
        _this.tableData.push(array[i]);
      }
      _this.currentPage = 1;
      _this.pageCount = response.data.pageCount;
    }).catch(function(error){
      console.log(error);
    });
    if(typeof(_this.changed) != "undefined"){
      _this.changeOperate = _this.changed;
    }

    if(typeof(this.$route.query.operate) != "undefined"){
      let operate = this.$route.query.operate;
      if(operate == "add"){
        this.addHandler = true;
      }else if(operate == "edit"){
        this.editHandler = true;
      }
    }else{
      this.lookHandler = true;
    }


  }
}
