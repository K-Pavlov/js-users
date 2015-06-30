describe('test', function() {

    it('should throw bananas', function() {
        expect(function() {
            throw 'bananas';
        }).toThrow('bananas');
    });
});
