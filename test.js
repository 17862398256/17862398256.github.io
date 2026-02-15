//设定四幅图片
const toggleImg = [
    "images/seer.png",
    "images/aoyi.png",
    "images/aola.png",
    "images/moer.png",
]
//寻找图像元素的下标,最好传入图片数组的长度
function findIndex(length){
    let imgCurrent = document.getElementById("adverImage");
    let index = 0;
    //遍历获取节点的图像是数组中哪个下标
    for(index; index < length; index++){
        if(imgCurrent.src.includes(toggleImg[index])){
            break;
        }
    }
    return index;    
}
//向右切换图片
function toggleRight(){
    let imgCurrent = document.getElementById("adverImage");
    let index = findIndex(4);
    imgCurrent.src = toggleImg[(index + 1) % toggleImg.length];
}
//向左切换图片
function toggleLeft(){
    let imgCurrent = document.getElementById("adverImage");
    let index = findIndex(4);
    imgCurrent.src = toggleImg[(index - 1 + toggleImg.length) % toggleImg.length]; 
}


//新增表格内容
function addRow(){
    let tb_001 = document.getElementById("tb_001");
    let lenth = tb_001.rows.length;
    let currentRow = tb_001.insertRow(lenth);
//    currentRow.innerHTML = "123456";
    let nameCode = currentRow.insertCell(0);
    let flowCode = currentRow.insertCell(1);            
    let profitCode = currentRow.insertCell(2);
    let manuvureCode = currentRow.insertCell(3);
    
    nameCode.innerHTML = '未命名';
    flowCode.innerHTML = '未填写';
    profitCode.innerHTML = '未填写';
    manuvureCode.innerHTML = '<button onclick="editRow(this)">编辑</button><button onclick="deleteRow(this)">删除</button>';
}

//删除表格内容
function deleteRow(button){
    let row = button.parentNode.parentNode;
    //防止删除表头
    if(row.rowIndex == 0){
        alert("不能删除表头");
        return;
    }
    row.parentNode.removeChild(row);
}
//编辑表格内容
function editRow(button){
    let row = button.parentNode.parentNode;
    let nameCode = row.cells[0];
    let flowCode = row.cells[1];
    let profitCode = row.cells[2];

    let input_name = prompt("请输入名字：>");
    let input_flow = prompt("请输入在线人数:>");
    let input_profit = prompt("请输入盈利价值:>");

    nameCode.innerHTML = input_name;
    flowCode.innerHTML = input_flow;
    profitCode.innerHTML = input_profit;
}


