/*
 * @Author: liuyi.jy liuyi.jy@alibabapictures.com
 * @Date: 2022-11-13 10:42:01
 * @LastEditors: liuyi.jy liuyi.jy@alibabapictures.com
 * @LastEditTime: 2022-11-13 12:01:59
 * @Description: 
 * 
 * Copyright (c) 2022 by liuyi.jy liuyi.jy@alibabapictures.com, All Rights Reserved. 
 */
/**
 * 套路2: 重新构造做变换
 */
/** 数组类型 */
// 1. 仅两个元素的元祖合并
// 输入
type tuple1 = [1,2];
type tuple2 = ['guang', 'dong'];
// 输出：结果
type tuple = [[1, 'guang'], [2, 'dong']];
// 实现
type Zip<One extends [unknown, unknown], Other extends [unknown, unknown]> =
    One extends [infer OneFirst, infer OneSecond]
        ? Other extends [infer OtherFirst, infer OtherSecond]
            ? [[OneFirst, OtherFirst], [OneSecond, OtherSecond]]: []
                : [];
// 2. 任意元素数量的元祖合并-----得用递归了
type Zip2<One extends unknown[], Other extends unknown[]> = 
    One extends [infer OneFirst, ...infer OneRest]
        ? Other extends [infer OtherFirst, ...infer OtherRest]
            ? [[OneFirst, OtherFirst], ...Zip2<OneRest, OtherRest>]: []
                : [];
/**字符串类型 */

/** 索引类型 */
type ToReadonly<T> =  {
    readonly [Key in keyof T]: T[Key];
}
type ToReadOnly<T> = {
    readonly [key in keyof T]: T[key];
}