const BASEURL = "http://localhost:8080/"

const URL = {
    /**************  表格   **************/
    getUserList : BASEURL + "user/list",
    addUser : BASEURL + "user/add",
    deleteUser : BASEURL + "user/delete",
    modifyUser : BASEURL + "user/modify",
    getUserListByParam : BASEURL + 'user/listByParam',
    getUserListByAdvance : BASEURL + 'user/listByAdvance',
    exportUser : BASEURL + 'user/exportUser',
    userSizeChange : BASEURL + 'user/userSizeChange',
    selectPageNum : BASEURL + 'user/selectPageNum',

    /************  采购订单   *************/
    getOrderList: BASEURL + "order/list",
    deleteOrder: BASEURL +"order/delete",
    exportOrder: BASEURL +"order/exportOrder",
    editOrder: BASEURL + "order/updateOrder",
    addOrder: BASEURL + "order/addOrder",

    getGoodList:BASEURL +'good/list'

}

export default URL
