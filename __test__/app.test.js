var request = require('supertest');
request = request('http://localhost:8080');

describe('Verify Endpoints', () => {
    it('GET / respond with json message', done => {   

        request
               .get('/')                    
               .expect('Content-Type', /json/)                                                                               
               .expect({message: "hooray! welcome to our product api!"})
               .expect(200, done);
                   
    });
    it('GET /api respond with json message', done => {   

        request
               .get('/api')                    
               .expect('Content-Type', /json/)                                                                               
               .expect({message: "hooray! welcome to our product api!"})
               .expect(200, done);
                   
    });
    it('GET /api/invalidEntry respond with html message', done => {
        
        request
               .get('/api/wwwww')
               .expect('Content-Type', /html/) 
               .expect(404, done);                                                  
                  
    });
    it('GET /welcome respond with html message', done => {
        
        request
               .get('/welcome')
               .expect('Content-Type', /html/) 
               .expect('<div>Welcome in index</div>')
               .expect(200, done);                                                  
                  
    });
    it('GET /invalidEntry respond with html message', done => {
        
        request
               .get('/wwwww')
               .expect('Content-Type', /html/) 
               .expect(404, done);                                                  
                  
    });

    it('GET /api/products respond with json message', async done => {   
        
        request
                .get('/api/products')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)    
                .expect([{"name":"shirt","price":15},{"name":"basketball","price":9.99},{"name":"hat","price":20},{"name":"headphones","price":49},{"name":"pen","price":1.99},{"name":"sun glasses","price":65}])             
                .expect(200, done)                        
                   
    });

    it('GET /api/products/validProduct respond with json message', async done => {   
        
        request
                .get('/api/products/shirt')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)    
                .expect([{"name":"shirt","price":15}])             
                .expect(200, done)                       
                   
    });
    
    it('GET /api/products/:invalidProduct respond with json empty array', async done => {   
        
        request
                .get('/api/products/tshirt')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)    
                .expect([])             
                .expect(200, done)                      
                   
    });

    it('GET /api/inventory respond with json message', async done => {   
        
        request
                .get('/api/inventory')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)    
                .expect({"inventory":[{"name":"shirt","inventory":12},{"name":"basketball","inventory":90},{"name":"hat","inventory":20},{"name":"headphones","inventory":192},{"name":"pen","inventory":600},{"name":"sun glasses","inventory":4}]})             
                .expect(200, done)                        
                   
    });

    it('GET /api/inventory/validProduct respond with json message', async done => {   
        
        request
                .get('/api/inventory/shirt')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)    
                .expect([{"name":"shirt","inventory":12}])             
                .expect(200, done)                       
                   
    });
    
    it('GET /api/inventory/:invalidProduct respond with json empty array', async done => {   
        
        request
                .get('/api/inventory/tshirt')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)    
                .expect([])             
                .expect(200, done)                      
                   
    });
    it('GET /api/productList respond with json message', async done => {   
        
        request
                .get('/api/productList')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)    
                .expect([{"name":"shirt","price":15,"inventory":12},{"name":"basketball","price":9.99,"inventory":90},{"name":"hat","price":20,"inventory":20},{"name":"headphones","price":49,"inventory":192},{"name":"pen","price":1.99,"inventory":600},{"name":"sun glasses","price":65,"inventory":4}])             
                .expect(200, done)                       
                   
    });
    it('GET /api/productList/validproduct respond with json message', async done => {   
        
        request
                .get('/api/productList/shirt')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)    
                .expect([{"name":"shirt","price":15},{"inventory":12}])             
                .expect(200, done)                       
                   
    });
    it('GET /api/productList/:invalidProduct respond with json error message', async done => {   
        
        request
                .get('/api/productList/tshirt')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)    
                .expect({"message":"Please Verify the data entered","error":"{error.stack: No Data Matched with the list}"})             
                .expect(200, done)                      
                   
    });

    })
