<template>
	<div>
		<div class="brand" >
			<breadcrumb :arrayName="brand" :hasIcon="hasIcon"></breadcrumb>
		</div>

		<div class="container">

			<el-row style="margin-top:15px;">
				<div style="background-color:#F1F1F1;height:0px;">
					<el-input :placeholder="$t('te.sNameOrAge')" size="small" style="width:220px;height:32px;position:relative;left:10px;top:10px;"  ></el-input>
					<el-button size="small" slot="append" icon="el-icon-search" class="btn-export"  style="position:relative;height:30px;left:5px;top:12px;"  ></el-button>

				</div>
				<!-- 折叠板 高级搜索 -->
				<el-collapse class="ele-collapse" @change="advanceSearch" v-model="activeName" accordion>
					<el-collapse-item>

						<template slot="title" class="ele-collapse-temp" >
							<span class="ele-collapse-temp-span"></span>&nbsp;&nbsp;
							<span class="adv-search" >{{$t(advSearch)}}</span>
						</template>

						<!-- 高级搜索具体内容 -->
						<el-row :gutter="10" class="row-search" >
							<el-col :span="2">
								<label class="label-search">{{$t('te.name')}}:</label>
							</el-col>
							<el-col :span="6">
								<el-input v-model="input1"  class="input-small"  size="small" ></el-input>
							</el-col>

							<el-col :span="2">
								<label class="label-search">{{$t('te.age')}}:</label>
							</el-col>
							<el-col :span="6">
								<el-input-number v-model="input2" class="input-number-right"  size="small" controls-position="right" ></el-input-number>
							</el-col>

							<el-col :span="2">
								<label class="label-search">{{$t('te.education')}}:</label>
							</el-col>

							<el-col :span="6">
								<el-select v-model="input3" :placeholder="$t('te.select')"   size="small" >
									<el-option v-for="item in options" :key="item.value" :lable="item.label" :value="item.value">

									</el-option>
								</el-select>
							</el-col>
						</el-row>


						<el-row>
							<div class="btn-group-search">
								<el-button class="btn-search" style="margin-left: 93px;"  size="small">{{$t('te.query')}}</el-button>
								<el-button class="btn-second" style="margin: 0px;" size="small" >{{$t('te.reset')}}</el-button>
							</div>

						</el-row>
					</el-collapse-item>

				</el-collapse>

			</el-row>

			<el-row class="btn-group" style="display:none;">
				<el-col>
					<el-button class="btn-add" size="small" @click="addUser" >{{$t('te.add')}}</el-button>
					<el-button class="btn-export" size="small" @click="exportExcel">{{$t('te.exports')}}</el-button>
					<el-button class="btn-export" size="small" @click="dialogShowUser = true" >{{$t('te.selUser')}}</el-button>
					<el-button class="btn-common" size="small" @click="batchDel(tableData1)">{{$t('te.batchDel')}}</el-button>
				</el-col>
			</el-row>
			<div style="height:15px;background-color:#F1F1F1;"></div>
			<el-row>
				<el-table class="no_line" :data="tableData1" border  ref="multipleSelection" @selection-change="handleSelectionChange"   @row-dblclick="openDetail" >
					<el-table-column  type="selection"  width="55"></el-table-column>

					<el-table-column  type="index" :label="$t('te.no')"  width="55"></el-table-column>

					<el-table-column prop="name" :label="$t('te.name')" sortable></el-table-column>

					<el-table-column prop="age" :label="$t('te.age')" sortable></el-table-column>

					<el-table-column prop="sex" :label="$t('te.sex')" sortable></el-table-column>

					<el-table-column prop="phone" :label="$t('te.phone')"></el-table-column>

					<el-table-column prop="email" min-width="160px;" width="160px" :label="$t('te.email')"></el-table-column>

					<el-table-column prop="education" :label="$t('te.education')" ></el-table-column>

					<el-table-column  :label="$t('te.operate')">
						<template slot-scope="scope" >
							<el-button @click="editUser(scope.row)" type="text" size="small" ><i  class="el-icon-edit"></i></el-button>
							<el-button @click="delClick" type="text" size="small" ><i class="el-icon-delete" style="color:red;"></i></el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-row>

			<!-- 翻页 -->
			<el-row style="margin-top:20px;margin-bottom:15px;position:relative;">
				<div style="float:left;margin-left:11px;">
					<el-checkbox style=""></el-checkbox>
					<el-button type="danger" @click="batchDel(tableData1)" style="position:relative;margin-left:25px;" size="small" >{{$t('te.delete')}}</el-button>
					<el-button class="btn-add" style="margin-left: 2px;" size="small" @click="addUser" >{{$t('te.add')}}</el-button>
					<el-button class="btn-export" style="margin: 0;" size="small" @click="exportExcel">{{$t('te.exports')}}</el-button>
				</div>
				<el-pagination
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						:current-page="currentPage4"
						:page-sizes="[10, 20, 30, 40]"
						:page-size="10"
						layout="total, sizes, prev, pager, next, jumper"
						:total="2">
				</el-pagination>
			</el-row>


			<el-dialog :title="$t('te.detail_page')" width="60%" @open="_openDetails" :visible.sync="dialogDetailsUser" >
				<table_details :sendData="objeDataToDetails" @closeWindows="closeComponent3"></table_details>
			</el-dialog>


		</div>
	</div>
</template>

<script>
	import table_details from "./table_details"
	import Vue from "vue"
	import breadcrumb from '../common/breadcrumb'


	export default{

		components:{
			table_details,
			breadcrumb
		}
		,
		data(){
			return {
				dialogDetailsUser: false,
				dialogShowUser: false,
				activeName:[],

				dialogTableVisible:false,

				dialogEditUser:false,
				advSearch:'te.advance_search',

				input1:'',
				input2:'20',
				input3:'',

				brand:[
					{name: 'lang.exp'},
					{name: 'lang.table_noline'}
				],
				hasIcon:false,

				tableData1:[
					{
					 name:'张三',
					 age:'24',
					 sex:'男',
					 phone:'1234567',
					 email:'wusya@163.com',
					 education:'本科'
					 },
					 {
					 name:'李四',
					 age:'23',
					 sex:'男',
					 phone:'5546786',
					 email:'misyaus@163.com',
					 education:'本科'
					 },
					 {
					 name:'王五',
					 age:'28',
					 sex:'男',
					 phone:'8542652',
					 email:'uroshnf@163.com',
					 education:'硕士'
					 },
					 {
					 name:'小王',
					 age:'29',
					 sex:'男',
					 phone:'4584793',
					 email:'poweris@163.com',
					 education:'专科'
					 },
					 {
					 name:'小刘',
					 age:'20',
					 sex:'女',
					 phone:'3426278',
					 email:'businsa@163.com',
					 education:'高中'
					 }

				],
				currentPage4: 4,

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
				singleTable:[]
			}
		},

		methods:{
			advanceSearch : function(){
				if(this.advSearch == "te.advance_search"){
					this.advSearch = "te.return";
				}else{
					this.advSearch = "te.advance_search";
				}
			},
			addUser:function(){
				this.$router.push({path:'table_add'});
			},
			collapsePanel:function(){

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
				//console.log(this.objData);
				this.$router.push({path:'table_edit',query:{user:this.objData}});
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			delClick() {
				this.$confirm(this.$t('te.delete_tips'), this.$t('te.tips'), {
					confirmButtonText: this.$t('te.confirm'),
					cancelButtonText: this.$t('te.cancel'),
					type: 'error'
				}).then(() => {
					this.$message({
					type: 'success',
					message: this.$t('te.delete_success'),
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
			showUser(){
				this.isShowUser = !this.isShowUser;
			},
			closeComponent1(){
				this.dialogTableVisible = false;
			},
			closeComponent2(){
				this.dialogShowUser = false;
			},
			closeComponent3(){
				this.dialogDetailsUser = false;
			},
			exportExcel(){
				this.$confirm(this.$t('te.is_export'),  this.$t('te.tips'), {
					confirmButtonText: this.$t('te.confirm'),
					cancelButtonText: this.$t('te.cancel'),
					type: 'warning'
				}).then(() => {
					this.$message({
					type: 'success',
					message: this.$t('te.operate_success'),
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
			batchDel:function(rows){
				//进行批量删除操作
				if(this.multipleSelection.length > 0){
					this.$confirm(this.$t('te.delete_batch'), this.$t('te.tips'), {
						confirmButtonText: this.$t('te.confirm'),
						cancelButtonText: this.$t('te.cancel'),
						type: 'error'
					}).then(() => {
						this.$message({
						type: 'success',
						message: this.$t('te.operate_success'),
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
					this.$alert($t('te.no_any_selected'),this.$t('te.tips'))
				}




			},
			handleSelectionChange: function(val){
				this.multipleSelection = val;
			}

		},
		computed:{
			isShowUser:function(){
				this.dialogShowUser = true;
			},
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
			/*this.$http.post("http://127.0.0.1:8081/user/userList",{pageSize:10}).then(
					function(res){
						//alert("mock模拟成功");
						let array = res.body;
						for(let i = 0; i < array.length; i++){
							this.tableData1.push(array[i]);
						}

					},
					function(){
						this.$message({
							type: 'error',
							message: '请求失败!',
							showClose: true
						})
					})*/
		}

	}
</script>

<style>
	/*2019-02-27 16:33 pxmwwij 详情页面样式*/
	.el-dialog__body{
		padding: 20px 20px;
	}
	.content-line{
		border-top: 1px solid #ddd;/*2019-02-27 16:33 pxmwwij 详情页面样式*/
		padding-top:10px;/*2019-02-27 16:33 pxmwwij 详情页面样式*/
	}
	.container{
		background-color: #FFFFFF;
		border-bottom: 1px solid #ddd;
		margin-left:15px;
		margin-right:15px;
	}
	.ele-collapse{
		margin-left:5px;
	}
	.btn-search{
		color: rgb(255, 255, 255);
		background-color: rgb(0, 74, 134);
	}
	.ele-collapse-temp{
		background-color: #F1F1F1;
	}
	.ele-collapse-temp-span{
		margin-left: -5px;
		width:5px;
		background-color: #004a86;
		height:50px;
	}
	.el-collapse-item{
		background-color: #F1F1F1;

	}
	.btn-add{
		color: rgb(255, 255, 255);
		background-color: rgb(0, 74, 134);
	}
	.btn-export{
		color: rgb(255, 255, 255);
		background-color: rgb(0, 74, 134);
	}
</style>