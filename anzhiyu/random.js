var posts=["2026/05/16/啦啦啦/","2026/05/16/进来一个揍一个/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };