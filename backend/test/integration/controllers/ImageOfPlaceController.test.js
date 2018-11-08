var supertest = require('supertest');

describe('imageofplaceController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add imageofplace success', function (done){
      supertest(sails.hooks.http.app)
      .post('/imageofplace')
      .send({ image_url: 'test.jpg', description: 'checking the test'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#patch()', function() {
    it('should return a 200, of patch imageofplace success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/imageofplace/1')
      .send({ image_url: 'test2.jpg'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put imageofplace success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/imageofplace/1')
      .send({ image_url: 'test.jpg', description: 'checking the test put'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get imageofplace success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/imageofplace/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete imageofplace success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/imageofplace/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});