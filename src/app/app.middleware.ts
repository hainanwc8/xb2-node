import { Request,Response, NextFunction } from "express";

//输出请求地址
export const requestUrl = (
    request:Request,
    // @ts-ignore
    response:Response,
    next:NextFunction

)=>{
  console.log(request.url);
  next();
};

//默认异常处理器
export const defaultErrorHandler = (
    error:any,
    // @ts-ignore
    request:Request,
    // @ts-ignore
    response:Response,
    // @ts-ignore
    next:NextFunction
)=>{
let statusCode:number, message: string;
//处理异常

switch (error.message) {
    default:
        statusCode = 500;
        message = '服务出现问题';
        break;
}
response.status(statusCode).send({message});
};