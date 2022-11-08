/*
 * @Author: liuyi.jy liuyi.jy@alibabapictures.com
 * @Date: 2022-11-08 13:29:07
 * @LastEditors: liuyi.jy liuyi.jy@alibabapictures.com
 * @LastEditTime: 2022-11-08 13:37:34
 * @Description: 
 * 
 * Copyright (c) 2022 by liuyi.jy liuyi.jy@alibabapictures.com, All Rights Reserved. 
 */
// 1、Extract: 取交集
type Person = {
    name: string;
    age: number;
    address: string;
  }

// 结果：'age'|'address'
// type ExtractResult = Extract<keyof Person, 'age'|'address'|'sex'>

// 自行实现
type ExtractResult = MyExtract<keyof Person, 'name'|'age'>

type MyExtract<T, U> = U extends T ? U: never;

// 2、