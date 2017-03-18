"use strict";
const fs = require('fs');
const dir = fs.readdirSync('./');
let str = "";

// 文件根据文件名的规则排序，从小到大

for(let img of dir) {
	if(img.includes('png')) {
		str += `>${img} \r\n ![](./static/${img}) \r\n `;
	}	
}

fs.writeFile('./README.MD',str,function(err){
    if(err) console.error("文件写入失败");
    else console.log("文件写入成功");
})
