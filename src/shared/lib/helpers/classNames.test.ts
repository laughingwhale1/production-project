import { classNames } from './classNames';

describe('class names', () => {
    test('must return 1 argument', () => {
        const result = 'underline';
        expect(classNames('underline')).toEqual(result);
    });
    test('must return 3 arguments with additional classes', () => {
        const result = 'underline fire ball';
        expect(classNames('underline', {}, ['fire ball'])).toEqual(result);
    });
    test('must return 4 arguments with dynamic class', () => {
        const result = 'underline fire ball hovered';
        expect(classNames(
            'underline',
            { hovered: true },
            ['fire', 'ball'],
        ))
            .toEqual(result);
    });
    test('must return false', () => {
        const result = 'underline class1';
        expect(classNames(
            'underline',
            { hovered: undefined },
            ['class1'],
        ))
            .toEqual(result);
    });
});
