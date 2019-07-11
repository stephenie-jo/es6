/*
    http://es6.ruanyifeng.com/#docs/generator#next-%E6%96%B9%E6%B3%95%E7%9A%84%E5%8F%82%E6%95%B0
  iterator的概念  (遍历器)
    1. 为各种数据结构，提供一个统一的、简便的访问接口
    2. 使得数据结构的成员能够按某种次序排列
    3. 创造了一种新的 for...of 循环
*/

/*
  iterator遍历过程
    1. 创建了一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上就是一个指针对象
    2. 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员
    3. 第二次调用指针对象的next方法，指针指向数据结构的第二个成员
    4. 不断调用指针的next方法，直到它指向数据结构的结束为止
*/ 
  



//模拟next返回值的例子
function makeIterator(array) {
    var nextIndex = 0
    return {
        next: function() {
            return nextIndex < array.length ? 
                {value: array[nextIndex++], done: false} :
                {value: undefined, done: true}
        }
    }
}

var it = makeIterator(['a', 'b'])
it.next()
it.next()
it.next()


