describe('quizzesDirective', function () {
    var element, scope;
    var quizzesDirective = {};
    var quizzesService, authService, votesService, modalFactory;

    beforeEach(module('app'));

    beforeEach(inject(function ($rootScope, $compile) {
        element = angular.element(
            '<quizzes-directive>Old text</quizzes-directive>'
        );

        scope = $rootScope.$new();
        $compile(element)(scope);
        scope.$digest();
    }));
    
    beforeEach(function () {
        module(function ($provide) {
            $provide.value('quizzesService', quizzesService);
            $provide.value('authService', authService);
            $provide.value('votesService', votesService);
            $provide.value('modalFactory', modalFactory);
        });
    });

    beforeEach(inject(function (_quizzesDirective_) {
        quizzesDirective = _quizzesDirective_;
    }));

    // describe('quizzesDirective', function () {
    //     it('load the directive', function () {
    //         console.log(element);
    //         expect(true).toBe(true);
    //     })
    // })
});