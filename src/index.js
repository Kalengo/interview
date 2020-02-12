const device = require('./devide')

const heros = [
  '后羿','安其拉','虞姬','铠','李元芳','诸葛亮',
  '刘禅','亚瑟','程咬金','孙悟空','百里守约',
  '蔡文姬','杨玉环','妲己','鲁班七号'
]

// 查看6次随机分组结果
for (let i = 0; i < 6; i++) { 
  console.log(`排序结果${i}：`, device(heros, 4))
}