let Koa = require('koa'),
    app = new Koa(),
    awaiterfall = require('../index'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/awaiterfall');

let User = mongoose.model('User', { name: String }),
    Post = mongoose.model('Post', { post: String, user: String }),
    Comment = mongoose.model('Comment', { comment: String, post: String, user: String })

app.use(async function (ctx,next){
    ctx.body = await awaiterfall("ahmet", 
                    name => User({ name: name }).save(),
                    user => Post({ post: "post...", user: user.name }).save(),
                    post => Comment({ comment: "comment...", post: post.post, user: post.user }).save()
                                )
})

app.listen(3001)
