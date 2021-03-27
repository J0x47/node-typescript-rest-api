import request from 'supertest';
import app from '../src/app';
describe('GET /', () => {
    it('should return 200 & valid response', async (done) => {
        request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect('Content-Length', '20')
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                expect(res.body).toMatchObject({ msg: 'index page' });
                done();
            });
    });
});
