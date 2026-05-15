var posts=["2026/05/16/啦啦啦/","2026/05/16/我终于弄好啦/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };