var expect = chai.expect;

describe('MyFunctions', function(){
    describe('#doSomething', function(){
        it('should concatenate the two parameters', function(){
            var x = dosomething('hello', 5);
            expect(x).to.equal('hello5'); 
        });

        it('should throw an error if first parameter is not a string'function(){
            expect(function(){
                dosomething(5,5);
            }).to.throw(error);
        })
    });
});