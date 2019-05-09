<template>
	<div>
		<div class="brand">
			<breadcrumb :arrayName="brand" :hasIcon="hasIcon"></breadcrumb>
		</div>
	<div class="container" style="margin:15px;">
		<el-form :model="user" :rules="userRules"  ref="userRules"  label-width="100px">
		<el-collapse v-model="showCollapse" accordion>
			<el-collapse-item name="1">
				<template slot="title" class="ele-collapse-temp">
					<span class="ele-collapse-temp-span" style="margin:0;" ></span>
					<font class="collapse-content">{{$t('te.add')}}( <font color="red">*</font> {{$t('te.must_fill')}} )</font>
				</template>

				<div style="margin-top:15px;">

						<el-row>
							<el-col :span="12">
								<el-form-item :label="$t('te.name')" prop="name">
									<el-input v-model="user.name" size="small" style="width:75%;"  ></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item :label="$t('te.age')" prop="age">
									<el-input v-model="user.age" size="small" style="width:75%;"  ></el-input>
								</el-form-item>
							</el-col>
						</el-row>

						<el-row>
							<el-col :span="12">
								<el-form-item :label="$t('te.sex')" prop="sex">
									<el-select v-model="user.sex" :placeholder="$t('te.select')" size="small" style="width:75%;" >
											<el-option   v-for="male in males"  :label="male.label" :key="male.value" :value="male.value" ></el-option>
									</el-select>
								</el-form-item>
							</el-col>

							<el-col :span="12">
								<el-form-item :label="$t('te.phone')" prop="phone">
									<el-input style="width:75%;"   size="small" v-model="user.phone">
                    <!--通过slot 指定前缀或者后缀内容-->
                    <el-select v-model="user.phone_type" style="width:80px;" slot="prepend" :placeholder="$t('te.select')">
                      <el-option :label="$t('te.telephone')" value="1">{{$t('te.telephone')}}</el-option>
                      <el-option :label="$t('te.mobilephone')" value="2">{{$t('te.mobilephone')}}</el-option>
                    </el-select>
                  </el-input>
								</el-form-item>
							</el-col>
						</el-row>

						<el-row>
							<el-col :span="12">
								<el-form-item :label="$t('te.education')" prop="education">
                  <!--clearable 只适用于单选-->
									<el-select style="width:75%;" :placeholder="$t('te.select')" clearable size="small" v-model="user.education">
										<el-option v-for="educate in educations" :label="educate.label" :key="educate.value" :value="educate.value"></el-option>
									</el-select>
								</el-form-item>
							</el-col>

              <el-col :span="12">
                <el-form-item :label="$t('te.date')" prop="edu_date">
                  <el-date-picker
                    v-model="user.edu_date"
                    type="daterange"
                    style="width:75%"
                    size="small"
                    unlink-panels
                    :range-separator="$t('ndt.to')"
                    :start-placeholder="$t('ndt.begin_time')"
                    :end-placeholder="$t('ndt.end_time')">
                  </el-date-picker>
                </el-form-item>
              </el-col>

						</el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item :label="$t('te.email')" prop="email" >
                  <el-input style="width:75%;" :placeholder="$t('te.can_clear')" size="small" v-model="user.email" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item :label="$t('te.principle')" prop="principle" >
                  <el-input style="width:75%;" :placeholder="$t('te.can_show')" size="small" v-model="user.principle" show-password></el-input>
                </el-form-item>
              </el-col>

            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item :label="$t('te.username')" prop="username" >
                  <el-input style="width:75%;" :placeholder="$t('te.have_icon')" size="small" v-model="user.username" >
                    <i slot="prefix" class="el-input__icon el-icon-edit"></i>
                    <!--前缀 prefix  后缀 suffix -->
                  </el-input>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item :label="$t('te.personal_station')" prop="personal_station" >
                  <el-input style="width:75%;" size="small" :placeholder="$t('te.please_input_content')" v-model="user.personal_station">
                    <!--前缀  prepend   后缀 append-->
                    <template slot="prepend">Http://</template>
                  </el-input>
                </el-form-item>
              </el-col>

            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item :label="$t('te.birth')" prop="birth" >
                  <el-date-picker
                    v-model="user.birth"
                    type="date" style="width:75%;" size="small">
                  </el-date-picker>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item :label="$t('te.go_time')" prop="go_time" >
                  <el-date-picker
                    v-model="user.go_time"
                    type="datetime" style="width:75%;" size="small">
                  </el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item :label="$t('te.hobby')" prop="hobby" >
                <el-select v-model="user.hobby" class="mul-select"  style="width:75%"  size="small" multiple :placeholder="$t('te.select')" >
                  <el-option
                    v-for="item in hobbys"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    <!-- 里面可以自定义模板 -->
                    <!--<span style="float: left">{{ item.label }}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>-->
                  </el-option>
                </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item :label="$t('te.city')" prop="city" >
                  <el-select v-model="user.city" size="small" style="width:75%;" :placeholder="$t('te.select')">
                    <el-option-group v-for="group in groups" :key="group.label" :label="group.label">
                      <el-option v-for="item in group.citys" :key="item.label" :label="item.label" :value="item.value" >

                      </el-option>
                    </el-option-group>
                  </el-select>
                </el-form-item>
              </el-col>

            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item :label="$t('te.job')"  >
                  <!--点击  即列出输入建议  保存的是文本数据-->
                  <el-autocomplete
                    :fetch-suggestions="querySearch"
                    :placeholder="$t('te.fuzzy_search')"
                    @select="handleSelect" v-model="user.job"
                    style="width:75%" size="small" >

                  </el-autocomplete>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item :label="$t('te.character')"  >
                  <el-select v-model="user.character" size="small" filterable  :placeholder="$t('te.can_input')" style="width:75%;" >
                    <el-option v-for="item in characters" :key="item.value" :label="item.label" :value="item.value" >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>

            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item :label="$t('te.dream')">
                  <el-select v-model="user.dream" size="small" style="width:75%;"
                  filterable remote reserve-keyword
                  :remote-method="remoteMethod" :loading="loading" :placceholder="$t('te.remote_search')">
                    <el-option v-for="item in dreams" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-form-item :label="$t('te.special_skill')">
                <el-checkbox-group v-model="user.special_skill">
                  <!-- border  带有边框   change为触发事件 -->
                  <el-checkbox label="reallyValue1" >{{$t('te.c')}}</el-checkbox>
                  <el-checkbox label="reallyValue2" >{{$t('te.c_plus')}}</el-checkbox>
                  <el-checkbox label="reallyValue3" >{{$t('te.c_sharp')}}</el-checkbox>
                  <el-checkbox label="reallyValue4" >{{$t('te.java')}}</el-checkbox>
                  <el-checkbox label="reallyValue5">{{$t('te.python')}}</el-checkbox>
                  <el-checkbox label="reallyValue6"  disabled>{{$t('te.go')}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-row>

            <el-row>
              <el-form-item :label="$t('te.certificate')">
                <el-checkbox-group v-model="user.certificate">
                  <el-checkbox label="key1" border>{{$t('te.programmer')}}</el-checkbox>
                  <el-checkbox label="key2" border>{{$t('te.web_designer')}}</el-checkbox>
                  <el-checkbox label="key3" border>{{$t('te.network_engineer')}}</el-checkbox>
                  <el-checkbox label="key4" border>{{$t('te.system_analyst')}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-row>

            <el-row>
              <el-form-item :label="$t('te.job_title')">
                <el-radio v-model="user.job_title" label="1" disabled>助理工程师</el-radio>
                <el-radio v-model="user.job_title" label="2">开发工程师</el-radio>
                <el-radio v-model="user.job_title" label="3">项目经理</el-radio>
                <el-radio v-model="user.job_title" label="4">系统架构师</el-radio>
                <el-radio v-model="user.job_title" label="5">CTO</el-radio>

              </el-form-item>
            </el-row>

            <el-row>
              <el-form-item  :label="$t('te.super_administrator')">
                <el-radio v-model="user.is_admin" label="1" border >{{$t('te.is_admin')}}</el-radio>
                <el-radio v-model="user.is_admin" label="2" border>{{$t('te.is_not_admin')}}</el-radio>
              </el-form-item>
            </el-row>

            <el-row>
              <el-col>
                <el-form-item :label="$t('te.remark')" prop="remark" >
                  <!-- 文本域 autosize根据文本内容自动进行调整 指定最小和最大行数 (:autosize="{minRows:2,maxRows:4}")  -->
                  <el-input
                    style="width:89%;"
                    type="textarea"
                    :rows="5"
                    :placeholder="$t('te.please_input_content')"
                    v-model="user.remark">
                  </el-input>
                </el-form-item>
              </el-col>

            </el-row>






				</div>
			</el-collapse-item>
		</el-collapse>
			<el-form-item class="form-btn-group">
				<el-button type="primary" class="btn-add" size="small" @click="addUser('userRules')" >{{$t('te.add')}}</el-button>
				<el-button size="small" class="btn-back" @click="back">{{$t('te.return')}}</el-button>
			</el-form-item>

		</el-form>
	</div>
	</div>
</template>

<script>
	import table_add from './js/table_add'
	export default table_add
</script>

<style>
</style>
