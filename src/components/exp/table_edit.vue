<template>
	<div>
		<div class="brand" >
			<breadcrumb :arrayName="brand" :hasIcon="hasIcon"></breadcrumb>
		</div>
		
		<div class="container " style="margin:15px;">
			<el-form :model="user" :rules="userRules"  ref="userRules"  label-width="100px">
			<el-collapse v-model="showCollapse" accordion>
				<el-collapse-item name="1" class="search-collapse-title">
					<template slot="title">
						<span class="vertical-bar" style="margin:0;" ></span>
						<font  class="collapse-content" >{{$t('te.modify')}}( <font >*</font> {{$t('te.must_fill')}})</font>
					</template>
					<div class="div-form">

							<el-row>
								<el-col :span="12">
									<el-form-item :label="$t('te.name')" prop="name">
										<el-input v-model="user.name" class="form-input" size="small"  ></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="12">
									<el-form-item :label="$t('te.age')"  prop="age">
										<el-input v-model="user.age" size="small" class="form-input" ></el-input>
									</el-form-item>
								</el-col>
							</el-row>

							<el-row>
								<el-col :span="12">
									<el-form-item :label="$t('te.sex')" prop="sex">
										<el-select v-model="user.sex" size="small" class="form-input" >
											<el-option v-for="male in males" :label="male.label" :key="male.value" :value="male.value" ></el-option>
										</el-select>
									</el-form-item>
								</el-col>

								<el-col :span="12">
									<el-form-item :label="$t('te.phone')" prop="phone">
										<el-input class="form-input" size="small" v-model="user.phone"></el-input>
									</el-form-item>
								</el-col>
							</el-row>

							<el-row>
								<el-col :span="12">
									<el-form-item :label="$t('te.email')"prop="email" >
										<el-input class="form-input" size="small" v-model="user.email"></el-input>
									</el-form-item>
								</el-col>

								<el-col :span="12">
									<el-form-item :label="$t('te.education')" prop="education">
										<el-select class="form-input" size="small" v-model="user.education">
											<el-option v-for="educate in educations" :label="educate.label" :key="educate.value" :value="educate.value"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
							</el-row>
					</div>
				</el-collapse-item>
			</el-collapse>
				<el-form-item class="form-btn-group" >
					<el-button  class="btn-default"  size="small" @click="addUser('userRules')" >{{$t('te.save')}}</el-button>
					<el-button size="small" class="btn-back" @click="back">{{$t('te.return')}}</el-button>
				</el-form-item>

			</el-form>
		</div>
	</div>
</template>

<script>
	import table_edit from './js/table_edit'
	export default table_edit 
</script>

<style>
</style>