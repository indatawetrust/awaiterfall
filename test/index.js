let run = require('runkoa'),
    request = require('request'),
    assert = require('assert')

run(__dirname + '/promise.js')
run(__dirname + '/mongoose.js')

describe('awaiterfall', function(){
    it('promise test', function(done){
        request('http://localhost:3000', (err,res,body) => {
            if(err) done(err)

            assert.equal(body, ' J A V A S C R I P T ')

            done()
        })
    })
    it('mongoose test', function(done){
        request('http://localhost:3001', (err,res,body) => {
            if(err) done(err)
            
            const item = JSON.parse(body)

            assert.deepEqual({ comment: item.comment, post: item.post, user: item.user }, { comment: "comment...", post: "post...", user: "ahmet" })

            done()
        })
    })
})
