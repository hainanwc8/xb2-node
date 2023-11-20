import express from 'express';
import { Request, Response } from 'express';


const app = express();
const port = 80;

//使用JSON中间件
app.use(express.json());
app.listen(port, () => {
    console.log('服务已启动9');
})
//@ts-ignore
app.get('/', (request: Request, response: Response) => {
    response.send('你好');
});
const data = [
    {
        "id": 1,
        "title": "First Post",
        "content": "This is the content of the first post."
    },
    {
        "id": 2,
        "title": "Second Post",
        "content": "This is the content of the second post."
    },
    {
        "id": 3,
        "title": "Third Post",
        "content": "This is the content of the third post."
    }
];
//@ts-ignore
app.get('/posts', (request: Request, response: Response) => {
    response.send(data);
});

app.get('/posts/:postId', (request: Request, response: Response) => {
    const { postId } = request.params;
    //@ts-ignore
    const posts = data.filter(item => item.id == postId)
    response.send(posts[0])
});



//创建内容
app.post('/posts', (request: Request, response: Response) => {
    const { content } = request.body;

    //设置响应状态码
    response.status(201);

    //输出头部数据
    console.log(request.headers);

    //设置响应状态码
    response.set('Sing-Along', 'How I wonder what you are');

    response.send({
        message: `成功创建了内容 ${content}`
    });
});
