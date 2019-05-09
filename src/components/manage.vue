<template>
	<el-container>
		<el-header class="nav nav-background app1 " id="app1"  style="height:50px;position: absolute;width:100%;z-index:99"   >
			<el-row>
				<el-col :span="8"  style="padding:15px;">
					<!-- <img class="logo" src="/static/img/cgn-logo.png"  /> -->
					&nbsp;&nbsp;
					<font class="logo-text">{{$t('lang.system_name')}}</font>
				</el-col>
				<el-col :span="8"  >
					&nbsp;&nbsp;
				</el-col>
				<el-col :span="8"  >
					<div  style="float:right;">
						<font class="top-name"  >TIGER[风虎]</font>
					</div>


					<!-- 换肤  -->
					<div class="skin" >
						<el-dropdown @command="changeColor" class="top-hover-change"  style="width:23px;height:23px;border: 1px solid #fff;border-radius: 50%;"  >
							<span class="el-dropdown-link" style="font-size:16px;">
								<i class="anticon fa fa-square-o top-hover-change-sub  "   style="font-size:13px;margin:0 0 0 6px;"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item command="a" >{{$t('lang.pink')}}</el-dropdown-item>
								<el-dropdown-item command="b">{{$t('lang.blue')}}</el-dropdown-item>
								<el-dropdown-item command="c">{{$t('lang.gray')}}</el-dropdown-item>
								<el-dropdown-item>{{$t('lang.default')}}</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>

					<!--中英文切换-->
					<div class="language-switch">
						<a  class="top-hover-change language-switch-content" @click="changeLanguage" >
							<div v-html="defaultLanguage"  class="language-content"  :class="{'language-content-ch':ch_style}" ></div>
						</a>

					</div>

				</el-col>

			</el-row>
		</el-header>

		<el-container style="height:100%;">
			<!--<div style="position: fixed;right:5px;width:100px;height:50px;cursor:pointer" @click="showCode">< code ></div>
            -->
			<div>
				<el-aside  class="aside left-menu"  width="190px;"  :class="{asideWidth:isWidth}"   >

					<el-scrollbar style="height:100%;">
						<div @click="menuOper" class="nav-icon " >
							<img src="/static/img/icon_01.png" />
							<!--<i class="anticon icon-bars" style="margin-left:20px;position: relative;" ></i>-->
						</div>
						<el-menu :default-active="defaultActive" class="el-menu-vertical-demo"  height="100%"
								 router
								 text-color = "#ffffff"
								 popper-append-to-body
								 :collapse="isCollapse"
						>
							<el-submenu index="1">
								<template slot="title">
									<i class="el-icon-news menu-icon1" ></i>
									<span  class="menu-font-span1"  :title="$t('lang.workbench')" >{{$t('lang.workbench')}} </span>
								</template>
								<!-- 二级菜单可展开 定义样式sub-menu2 -->
								<el-submenu  class="sub-menu2" index="1-1">
									<template slot="title">
										<span  class="menu-font-span2">二级任务 </span>
									</template>
									<el-menu-item index="/" class="sub-menu2-content">
										<span class="menu-font-span3-pre">.</span>
										<span  class="menu-font-span3">
											三级任务
										</span>
									</el-menu-item>
								</el-submenu>

								<el-menu-item index="/need_deal_task">

									<span class="menu-font-span2" :title="$t('lang.need_deal_task')" >
											{{$t('lang.need_deal_task')}}
									</span>
									<el-badge :value="1" class="menu-badge"></el-badge>
								</el-menu-item>

								<el-menu-item index="/already_done_task">
									<span class="menu-font-span2" :title="$t('lang.already_done_task')" >
										{{$t('lang.already_done_task')}}
									</span>
								</el-menu-item>

								<el-menu-item index="/purchase_order">
									<span class="menu-font-span2" :title="$t('lang.purchase_order')" >
										{{$t('lang.purchase_order')}}
									</span>
								</el-menu-item>

							</el-submenu>


							<el-submenu index="2">
								<template slot="title">
									<i class="el-icon-news menu-icon1"  ></i>
									<span  class="menu-font-span1" :title="$t('lang.exp')"  >{{$t('lang.exp')}} </span>
								</template>
								<el-menu-item index="/table_exp">
									<span class="menu-font-span2" :title="$t('lang.table')" >
										{{$t('lang.table')}}
									</span>
								</el-menu-item>
								<el-menu-item index="/master_slave_table">
									<span class="menu-font-span2" :title="$t('lang.master_slave_table')" >
										{{$t('lang.master_slave_table')}}
									</span>
								</el-menu-item>
							</el-submenu>


						</el-menu>
					</el-scrollbar>
				</el-aside>

			</div>



			<el-container  style="margin-top:50px;"  :class="[isCollapse ? 'elContainer2' : 'elContainer1' ]"   >
				<el-main class="el-main" >
					<router-view></router-view>
				</el-main>
			</el-container>


		</el-container>

	</el-container>


</template>

<script>

	export default {
		data(){
			return{
				isCollapse: false,
				isWidth:true,
				leftWidth:200,
				defaultColor:'#409EFF',
				chalk:'',
				defaultLanguage:'EN',
				ch_style: false,
			}

		},
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
		methods:{
			changeColor(command1){
				//皮肤切换
				//console.log(command1);
				document.getElementById('app').className = 'theme' + command1;
				localStorage.setItem("theme","theme"+command1);
			},
			changeLanguage(){
				//语言切换
				if(this.defaultLanguage == "EN"){
					this.defaultLanguage = "&nbsp;中";
					this.ch_style = !this.ch_style;
					this.$i18n.locale = "en-US";
				}else{
					this.defaultLanguage = "EN";
					this.ch_style = !this.ch_style;
					this.$i18n.locale = "zh-CN";
				}

			},
			showCode(){

			},
			//折叠和展开菜单操作
			menuOper(){
				this.isCollapse = !this.isCollapse;
				this.isWidth = !this.isWidth;
        this.$root.COLLAPSE = !this.$root.COLLAPSE;
			}

		},
		watch: {

		},
		beforeRouteEnter (to,from,next){
			//这里会拦截路由跳转
			next();
		},
		mounted(){
			/*console.log(localStorage.hasOwnProperty("theme"));
			 console.log(localStorage.getItem("theme"));*/
			if(localStorage.hasOwnProperty("theme") != false){
				document.getElementById("app").className = localStorage.getItem("theme");
			}
		}

	};
</script>

<style lang="less">
  @import "../../static/less/color.less";
</style>
