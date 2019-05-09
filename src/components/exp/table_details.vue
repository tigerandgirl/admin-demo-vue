<template>
	<div class="container  content-line">
		<div class="div-row">
			<el-form :model="user"  label-width="100px">
				<el-row >
					<el-col :span="12">
						<el-form-item :label="$t('te.name')" prop="name" >
							<el-input v-model="sendData.username" :disabled="true" size="small" class="input-small" ></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item :label="$t('te.age')" prop="age" >
							<el-input v-model="sendData.age" :disabled="true" size="small" class="input-small"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				
				<el-row>
					<el-col :span="12">
						<el-form-item :label="$t('te.sex')" prop="sex">
							<el-select v-model="sendData.sex" :disabled="true" size="small" class="select-small" >
								<el-option v-for="male in males" :label="male.label" :key="male.value" :value="male.value" ></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					
					<el-col :span="12">
						<el-form-item :label="$t('te.phone')" prop="phone">
							<el-input class="input-small" :disabled="true" size="small" v-model="sendData.phone"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				
				<el-row>
					<el-col :span="12">
						<el-form-item :label="$t('Email')" prop="email" >
							<el-input class="input-small" :disabled="true" size="small" v-model="sendData.email"></el-input>
						</el-form-item>
					</el-col>
					
					<el-col :span="12">
						<el-form-item :label="$t('te.education')" prop="education">
							<el-select class="select-small" :disabled="true" size="small" v-model="sendData.education">
								<el-option v-for="educate in educations" :label="educate.label" :key="educate.value" :value="educate.value"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				
				<el-form-item style="text-align: center;margin-right:10%;">
					<el-button size="small" class="btn-second" @click="closeWindow('dalian')">{{$t('te.return')}}</el-button>
				</el-form-item>
				
			</el-form>
		</div>
	</div>
</template>

<script>
	import table_details from './js/table_details'

	export default table_details
</script>

<style>
</style>