let Koa = require('koa'),
    app = new Koa(),
    awaiterfall = require('../index'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/awaiterfall');

let User = mongoose.model('User', { name: String }),
    Post = mongoose.model('Post', { post: String, user_id: mongoose.Schema.ObjectId }),
    Comment = mongoose.model('Comment', { comment: String, post_id: mongoose.Schema.ObjectId })

app.use(async function (ctx,next){
    ctx.body = await awaiterfall("ahmet", 
                    name => User({ name: name }).save(),
                    user => Post({ post: "post...", user_id: user._id }).save(),
                    post => Comment({ comment: "comment...", post_id: post.post_id }).save()
                                )
})

app.listen(3001)
