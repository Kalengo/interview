
module.exports = function (arr, k) {

  const groupNum = arr.length / k // 分k组

  // 随机打乱heros数组的顺序
  arr.sort(() => { 
    return 0.5 - Math.random()
  })

  const map = new Map()

  // 开始分组, 时间复杂度为O(n^2)
  for (let i = 0; i < groupNum; i++){
    
    const group = []
    
    for (let j = i; j < arr.length; j += k) {
      if (arr[j]) {
        group.push(arr[j])
      }
    }

    map.set(`第${i+1}组`, group)
  }
  
  return map

}