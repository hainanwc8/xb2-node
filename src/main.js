const express = require('express');
const app = express();
const port = 3000;
app.listen(port,()=>{
    console.log('服务已启动');
})
app.get('/',(request,response)=>{
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
  app.get('/posts',(request,response)=>{
    response.send(data);
});

app.get('/posts/:postId',(request,response)=>{
   const {postId} =request.params;
   const  posts = data.filter(item=>item.id == postId)
   response.send(posts[0])
});
