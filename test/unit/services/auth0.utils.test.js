describe('Auth0 Utils', function() {
    var authUtils;
    beforeEach(initAuth0);
    beforeEach(inject(function (_authUtils_) {
        authUtils = _authUtils_;
    }));

    describe('Capitalize', function () {
        it('should capitalize string', function () {
            expect(authUtils.capitalize('test')).to.be.equal('Test');
            expect(authUtils.capitalize('Test')).to.be.equal('Test');

            expect(authUtils.capitalize('tEsT')).to.be.equal('Test');
            expect(authUtils.capitalize('TeSt')).to.be.equal('Test');

            expect(authUtils.capitalize('1test')).to.be.equal('1test');
            expect(authUtils.capitalize('1Test')).to.be.equal('1test');
        });

        it('should be null when no argument supplied', function() {
            expect(authUtils.capitalize()).to.be.equal(null);
        });
    });

    describe('fnName', function() {
        it('should get function name', function () {
            var funcTest = function test() {};
            expect(authUtils.fnName(funcTest)).to.be.equal('test');
        });
    });
});