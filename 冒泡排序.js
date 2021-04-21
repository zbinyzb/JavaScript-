// 冒泡排序
arr = [5,2,3,1,4];
//顺序结果：2,3,1,4,5 -> 2,1,3,4,5 -> 1,2,3,4,5 -> 1,2,3,4,5
//定义
let bSort = (arr) => {
    for(let i = 0; i < arr.length - 1; i++){
        //优化2-> 设置标签量,若没进行交换则直接返回最后结果
        let flag = false;
        //优化1->减少内层循环比较次数
        //for(let j = 0 ;j < arr.length - i - 1; j++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                let swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
                flag = true;
            }
        }
        if(!flag){
            return arr;
        }
    }
}
//调用
console.log(bSort(arr));
