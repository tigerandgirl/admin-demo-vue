// 引入mockjs
const Mock = require('mockjs');

// 获取 mock.Random 对象
const Random = Mock.Random;

// 列表数据
const userListAll = function() {
    let users = [];
    for (let i = 0; i < 10; i++) {
        let userObject = {
            name: '张三',
            age: 24,
            sex: '男',
            phone: '13006677221',
            email: '1221039@.com',
            education: '本科'
        }
        users.push(userObject)
    }

    return {
        users: users,
        pageCount: 100,
        currentPage: 1,
    }
}

//普通搜索 输入姓名或年龄
const userListByParam = function(){
    let users = [];
    for (let i = 0; i < 10; i++) {
        let userObject = {
            name: '李四',
            age: 23,
            sex: '女',
            phone: '13006612121',
            email: '2819283@.com',
            education: '本科'
        }
        users.push(userObject)
    }

    return {
        users: users,
        pageCount: 55,
        currentPage: 1,
    }
}

//高级搜索  输入多个参数
const userListByAdvance = function(obj){
    //console.log(obj);
    let users = [];
    for (let i = 0; i < 10; i++) {
        let userObject = {
            name: '王五',
            age: 23,
            sex: '女',
            phone: '13006612121',
            email: '2819283@.com',
            education: '本科'
        }
        users.push(userObject)
    }

    return {
        users: users,
        pageCount: 55,
        currentPage: 1,
    }
}

//添加用户
const userAdd = function(obj){
    //console.log(obj);
    return {
        result : 1
    }
}

//编辑用户
const userEdit = function(obj){
    //console.log(obj);
    return {
        result : 1
    }
}

//删除用户
const userDelete = function(obj){
    //console.log(obj);
    return {
        result : 1
    }
}

//导出用户
const userExport = function(obj){
    //console.log(obj);
    return {
        result : 1
    }
}

// 每页数发生变化
const userSizeChange = function(p1) {
    let params = p1.body;
    let obj = eval('('+ params +')');
    let users = [];
    for (let i = 0; i < obj.pageSize; i++) {
        let userObject = {
            name: '张三',
            age: 24,
            sex: '男',
            phone: '15576677221',
            email: '1221039@.com',
            education: '本科',
            //订单
            no:'GTV76575',
            weight:'2.58kg',
            product:'中国上海',
            date:'2019-03-08',
            desc:''
        }
        users.push(userObject)
    }

    return {
        users: users,
        pageCount: 100,
        currentPage: 1,
    }
}

// 列表数据
const selectPageNum = function() {
    let users = [];
    for (let i = 0; i < 10; i++) {
        let userObject = {
            name: '王五',
            age: 24,
            sex: '男',
            phone: '13006677221',
            email: '1221039@.com',
            education: '本科',

            no:'GTV76575',
            weight:'2.58kg',
            product:'中国上海',
            date:'2019-03-08',
            desc:''

            //no weight  product  desc date GTV76570 2.58kg 中国深圳  生产日期

        }
        users.push(userObject)
    }

    return {
        users: users,
        pageCount: 100,
        currentPage: 1,
    }
}

//订单列表数据
const orderList = function(){
    let order = [];
    for (let i = 0; i < 10; i++){
        let orderObject = {
            name:'张三',
            no:'GTV76570',
            phone:'13006617172',
            price:'123',
            time:'2019-03-14',
        }
        order.push(orderObject);
    }
    return {
        order:order,
        pageCount: 100,
        currentPage: 1
    }
}

//删除订单
const deleteOrder = function(){
    return {
        result : 1
    }
}

//导出订单
const exportOrder = function(obj){
    //console.log(obj);
    return {
        result : 1
    }
}

//编辑订单
const updateOrder = function(obj){
    //console.log(obj);
    return {
        result : 1
    }
}

//添加订单
const addOrder = function(obj){
    //console.log(obj);
    return {
        result : 1
    }
}

const getGoodList = function(obj){
  let good = [];
  for (let i = 0; i < 3; i++){
    let goodObject = {
      goodNo:'G1001',
      orderNo:'GTV76570',
      price:'12',
      count:'2',
      product:'广州',
    }
    good.push(goodObject);
  }
  return {
    good:good,
    pageCount: 10,
    currentPage: 1
  }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('http://localhost:8080/user/list', 'post', userListAll);
Mock.mock('http://localhost:8080/user/listByParam','post',userListByParam);
Mock.mock('http://localhost:8080/user/listByAdvance','post',userListByAdvance);
Mock.mock('http://localhost:8080/user/add','post',userAdd);
Mock.mock('http://localhost:8080/user/modify','post',userEdit);
Mock.mock('http://localhost:8080/user/delete','post',userDelete);
Mock.mock('http://localhost:8080/user/exportUser','post',userExport);
Mock.mock('http://localhost:8080/user/userSizeChange','post',userSizeChange);
Mock.mock('http://localhost:8080/user/selectPageNum','post',selectPageNum);

/*采购订单*/
Mock.mock('http://localhost:8080/order/list',orderList);
Mock.mock('http://localhost:8080/order/delete',deleteOrder);
Mock.mock('http://localhost:8080/order/exportOrder',exportOrder);
Mock.mock('http://localhost:8080/order/updateOrder',updateOrder);
Mock.mock('http://localhost:8080/order/addOrder',addOrder);

Mock.mock('http://localhost:8080/good/list',getGoodList);
