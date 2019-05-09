<template>
	<div>
		<!--面包屑 导航条  breadcrumb为公共组件-->
		<div class="brand" >
			<breadcrumb :arrayName="brand" :hasIcon="hasIcon"></breadcrumb>
		</div>
		<!--主体 -->
		<div class="container">
			<!-- 折叠板部分 -->
			<el-row class="search">
				<div class="search-collapse">
					<!--普通搜索-->
					<el-input :placeholder="$t('te.sNameOrAge')"  v-model="nameOrAge" size="small" class="search-box"   ></el-input>
					<el-button size="small" @click="commonSearch" slot="append" icon="el-icon-search" class="btn-default search-btn"  ></el-button>
				</div>
				<!--折叠板-->
				<el-collapse class="search-collapse-content" @change="advanceSearch" v-model="activeName" accordion>
					<el-collapse-item>
						<template slot="title" class="search-collapse-title" >
							<span class="vertical-bar"></span>&nbsp;&nbsp;
							<span class="title-font" >{{$t(advSearch)}}</span>
						</template>
						<!-- 高级搜索具体内容 -->
						<el-row :gutter="10" class="row-search" >
							<el-col :span="2">
								<label class="label-search">{{$t('te.name')}}:</label><!--姓名-->
							</el-col>
							<el-col :span="6">
								<el-input v-model="name"  class="input-small"  size="small" ></el-input>
							</el-col>

							<el-col :span="2">
								<label class="label-search">{{$t('te.age')}}:</label><!--年龄-->
							</el-col>
							<el-col :span="6">
								<el-input-number v-model="age" class="input-number-right"  size="small" controls-position="right" ></el-input-number>
							</el-col>

							<el-col :span="2">
								<label class="label-search">{{$t('te.education')}}:</label><!--教育程度-->
							</el-col>
							<el-col :span="6">
								<el-select v-model="education" :placeholder="$t('te.select')"  size="small" >
									<el-option v-for="item in options" :key="item.value" :lable="item.label" :value="item.value">

									</el-option>
								</el-select>
							</el-col>
						</el-row>

						<el-row :gutter="10" class="row-search">
							<el-col :span="2">
								<label class="label-search">{{$t('te.birth')}}:</label><!--邮箱-->
							</el-col>
							<el-col :span="6">
                <el-date-picker
                  class="input-small timeform"
                  v-model="email"
                  type="daterange"
                  :range-separator="$t('ndt.to')"
                  :start-placeholder="$t('ndt.begin_time')"
                  :end-placeholder="$t('ndt.end_time')">
                </el-date-picker>
							</el-col>
						</el-row>
						<!--折叠板 高级搜索的两个按钮-->
						<el-row :gutter="10" class="row-search">
							<div class="btn-group-search" :class="{'btn-group-search-shrink': is_collapse}">
								<el-col :span="2">&nbsp;</el-col>
								<el-col :span="6">
									<!--查询按钮-->
									<el-button class="btn-default" @click="search"   size="small">{{$t('te.query')}}</el-button>
									<!--重置按钮-->
									<el-button class="btn-second" @click="resetData" style="margin:0;"  size="small" >{{$t('te.reset')}}</el-button>
								</el-col>
							</div>
						</el-row>
					</el-collapse-item>

				</el-collapse>

			</el-row>

			<div style="height:15px;background-color:#F1F1F1;"></div>
			<!--表格部分-->
			<div>
				<el-row class="table-body">
					<el-table :data="tableData1" border  ref="multipleSelection" @selection-change="handleSelectionChange"   @row-dblclick="openDetail" >
						<!--序号-->
						<el-table-column  type="selection" align="center"   width="55" ></el-table-column>
						<!--序号-->
						<el-table-column  type="index" :label="$t('te.no')"  width="55"></el-table-column>
						<!--姓名-->
						<el-table-column prop="name" :label="$t('te.name')" sortable></el-table-column>
						<!--年龄-->
						<el-table-column prop="age" :label="$t('te.age')" sortable></el-table-column>
						<!--性别-->
						<el-table-column prop="sex" :label="$t('te.sex')" sortable></el-table-column>
						<!--联系电话-->
						<el-table-column prop="phone" :label="$t('te.phone')"></el-table-column>
						<!--邮箱-->
						<el-table-column prop="email" min-width="160px;" width="160px" :label="$t('te.email')"></el-table-column>
						<!--教育-->
						<el-table-column prop="education" :label="$t('te.education')" ></el-table-column>
						<!--操作-->
						<el-table-column  :label="$t('te.operate')"  width="180px">
							<template slot-scope="scope" >
								<!--查看-->
								<el-button @click="showDetails(scope.row)" type="text" size="small" >{{$t('te.look')}}</el-button>
								<!--编辑-->
								<el-button @click="editUser(scope.row)" type="text" size="small" >{{$t('te.modify')}}</el-button>
								<!--删除-->
								<el-button @click="delClick(scope.row)" type="text" size="small" class="el-button-del" >{{$t('te.delete')}}</el-button>
							</template>
						</el-table-column>
					</el-table>
				</el-row>

				<el-row class="table-bottom" >
				<!--按钮-->
				<div class="table-bottom-btn-group" >
						<el-checkbox v-model="isSelected" @change="checkSelected" ></el-checkbox>
						<!--删除-->
						<el-button type="danger" class="btn1"  @click="batchDel(tableData1)"  size="small" >{{$t('te.delete')}}</el-button>
						<!--添加-->
						<el-button class="btn-add btn2 "   size="small" @click="addUser" >{{$t('te.add')}}</el-button>
						<!--导出-->
						<el-button class="btn-default btn3"  size="small" @click="exportExcel">{{$t('te.exports')}}</el-button>
				</div>
				<!-- 翻页 -->
				<el-pagination
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						@prev-click="prePage"
						@next-click="nextPage"
						:current-page="currentPage"
						:page-sizes="[10, 20, 30, 40]"
						:page-size="10"
						:pager-count="5"
						layout="total, sizes, prev, pager, next, jumper"
						:total="pageCount">
				</el-pagination>
			</el-row>
			</div>

			<!-- 引入类似modal的内容 以组件的形式 -->
			<el-dialog :title="$t('te.detail_page')" :class="changeCollapse?'dialog-open':'dialog-shrink'"  width="60%" @open="_openDetails" :visible.sync="dialogDetailsUser" >
				<table_details :sendData="objeDataToDetails" @closeWindows="closeComponent3"></table_details>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	import table_exp from './js/table_exp.js'

	export default table_exp

	/*export default {
		components:table_exp.components,
		computed:table_exp.computed,
		data:table_exp.data,
		methods:table_exp.methods,
		mounted:table_exp.mounted,
	}*/
</script>

<style>



</style>
