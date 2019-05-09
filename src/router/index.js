import Vue from 'vue'
import Router from 'vue-router'

import manage from '@/components/manage'


import table_exp from '@/components/exp/table_exp'
import table_add from '@/components/exp/table_add'
import table_edit from '@/components/exp/table_edit'
import table_noLine from '@/components/exp/table_noLine'
import master_slave_table from '@/components/exp/master_slave_table'
import tab from '@/components/exp/tab'
import slave_add from '@/components/exp/slave_add'
import slave_edit from '@/components/exp/slave_edit'
import baseinfo from '@/components/exp/baseinfo'

import already_done_task from '@/components/workbench/already_done_task'
import need_deal_task from '@/components/workbench/need_deal_task'
import purchase_order from '@/components/workbench/purchase_order'

import order_add from '@/components/workbench/purchase_order/order_add'

import breadcrumb from '@/components/common/breadcrumb'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'manage',
      component: manage,
      children:[
      	  {
	      	path: '/table_exp',
	      	name:'表格示例',
	      	component:table_exp,
	      	hidden:true
	      },{
	      	path:'table_add',
	      	name:'列表添加',
	      	component:table_add,
	      	hidden:true
	      },{
	      	path:'table_edit',
	      	name:'列表编辑',
	      	component:table_edit,
	      	hidden:true
	      },{
	      	path:'/table_noLine',
	      	name:'表格-无线条',
	      	component:table_noLine,
			hidden:true
	      },{ path: '/already_done_task',
			  name:'已办任务',
			  component:already_done_task,
			  hidden: true
		  },{
			  path:'/breadcrumb',
			  name:'面包屑',
			  component:breadcrumb,
			  hidden: true
		  },{
			  path: '/need_deal_task',
			  name:'已办任务',
			  component:need_deal_task,
			  hidden: true
		  },{
			  path:'purchase_order',
			  name:'采购订单',
			  component:purchase_order,
			  hidden: true
		  },{
			  path:'order_add',
			  name:'添加订单',
			  component:order_add,
			  hidden: true
		  },{
        path:'master_slave_table',
        name:'主从表',
        component:master_slave_table,
        hidden: true
      },{
          path:'tab',
          name:'tab页',
          component:tab,
          hidden: true
      },{
          path:'slave_add',
          name:'商品添加',
          component:slave_add,
          hidden: true
        },{
          path:'slave_edit',
          name:'商品编辑',
          component:slave_edit,
          hidden: true
        },{
          path:'baseinfo',
          name:'基本信息',
          component:baseinfo,
          hidden:true
        }
      ]
    }
  ]
})
