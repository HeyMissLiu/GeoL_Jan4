//先找到输入框
const inputTodo = document.getElementById('inputTodo');

//定义任务列表
let todoData = JSON.parse(localStorage.getItem('todoData')) || [];



//表单提交事件
function postaction() {
    //如果输入框不为空
    if (inputTodo.value !== '') {
        //将输入框内的值存入对象内
        let tmpdict = {};
        //使用时间戳作为id，具有唯一性
        tmpdict['id'] = new Date().getTime() + "";
        tmpdict['isDone'] = false;
        tmpdict['value'] = inputTodo.value;
        //将tmpdict存入todoData
        todoData.push(tmpdict);
        //清空input
        inputTodo.value = '';
        //展示数据
        showData();
    }
}

//展示数据
function showData() {
    //先将数据存储到localStorage
    localStorage.setItem('todoData', JSON.stringify(todoData));
    //把数据通过isDone分组
    let todoList = [];
    let doneList = [];
    //遍历todoData
    for (let i = 0; i < todoData.length; i++) {
        if (todoData[i]['isDone'] === false) {
            todoList.push(todoData[i]);
        } else doneList.push(todoData[i]);
    }
    //右上角的计数更新
    document.getElementById('todoCount').innerHTML = todoList.length;
    document.getElementById('doneCount').innerHTML = doneList.length;
    //展示数据
    let todoListHtml = '';
    let doneListHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let item = todoList[i];
        todoListHtml += `<li id="li-${item.id}">
        <input class="checkBox" type="checkbox" style="float: left" onchange="change('${item.id}',${item.isDone})" />
        <input
            class="content"
            type="text"
            style="float: left"
            id="${item.id}"
            value="${item.value}"
            onchange="update('${item.id}')"
            /><span class="listSpan" style="float: right" onclick="remove('${item.id}')">-</span>
        </li>`;
    }
    for (let i = 0; i < doneList.length; i++) {
        let item = doneList[i];
        doneListHtml += `<li id="li-${item.id}">
        <input
            class="checkBox"
            type="checkbox"
            style="float: left"
            checked="checked"
            onchange="change('${item.id}',${item.isDone})"
            />
        <input class="content" type="text" style="float: left" id="${item.id}" value="${item.value}" onchange="update('${item.id}')" />
        <span
            class="listSpan"
            style="float: right"
            onclick="remove('${item.id}')"
            >-</span>
        </li>`
    }
    //将html代码赋给列表
    document.getElementById("todoList").innerHTML = todoListHtml;
    document.getElementById("doneList").innerHTML = doneListHtml;
}
//通过id，isDone改变状态
function change(id, isDone) {
    //遍历所有的todoData，如果id符合，改变它的状态
    for (let i = 0; i < todoData.length; i++) {
        if (todoData[i]['id'] === id) {
            todoData[i]['isDone'] = !isDone;
        }
    }
    //展示数据
    showData();
}

//通过id，更新数据的todo
function update(id){
    //遍历所有的todoData
    for(let i = 0; i < todoData.length; i++){
        if(todoData[i]['id'] === id){
            //将inputValue赋给todoData里的value
            todoData[i]['value'] = document.getElementById(id).value;
        }
    }
    //展示数据
    showData();
}

//通过id，实现删除数据
function remove(id) {
    //遍历所有的todoData，如果id符合，删除它
    for (let i = 0; i < todoData.length; i++) {
        if (todoData[i]['id'] === id) {
            todoData.splice(i, 1);
        }
    }
    //展示数据
    showData();
}

//删除所有数据
function clear(){
    todoData=[];
    //展示数据
    showData();
}
showData();