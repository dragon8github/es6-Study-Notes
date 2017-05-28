"use strict";

// 获取图片的正确索引
const getIndexNumber = (str) => +str.substring(0,str.indexOf('-'))

// 冒泡排序法
const bubbleSort = (arr) => {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length - i - 1; j++) {
			let index_1 = getIndexNumber(arr[j]);
			let index_2 = getIndexNumber(arr[j + 1]);
			console.log(index_1,index_2);
			// 对比数据大小
			if (index_1 > index_2) {
				console.log("交换位置");
				// 交换位置
				arr[j, j + 1] = arr[j + 1, j];	
			}
		}
		console.log(arr);
		return false; 
	} 
	return arr;
}

// 清除io数组中非.png的文件
const cleanNotPng = arr => {
	for (let i = 0; i < arr.length; i++) {
		if (!arr[i].includes('.png')) {
			// 删除数组元素
			arr.splice(i,1);
			// 由于使用了splice删除了一个数组元素，数组的长度发生了变化。如果不i--的话就会跳过一个遍历
			i--; 
		}
	}
	return arr;
}



const fs = require('fs');
const dir = fs.readdirSync('./');
let str = "";
const pngDir = cleanNotPng(dir);

// console.log(pngDir);
console.log(bubbleSort(pngDir));


// for(let img of dir) {
// 	if(img.includes('png')) {
// 		str += `# ${img}\r\n![](./${img}) \r\n`;
// 	}	
// }

// fs.writeFile('./README.MD',str,function(err){
//     if(err) console.error("文件写入失败");
//     else console.log("文件写入成功");
// })