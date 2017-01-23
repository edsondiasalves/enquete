describe('modalFactory', function () {
    var modalFactory, $uibModal = { open: function () { } };

    beforeEach(module('app'));

    beforeEach(function () {
        module(function ($provide) {
            $provide.value('$uibModal', $uibModal);
        });
    });

    beforeEach(inject(function (_$uibModal_, _modalFactory_) {
        $uibModal = _$uibModal_;
        modalFactory = _modalFactory_;
    }));

    describe('modalFactory', function () {
        it('instanciate the factory', function () {
            modalFactory.open();
            expect(true).toBe(true);
        })
    })
});