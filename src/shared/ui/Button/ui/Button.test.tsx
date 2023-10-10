import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button';

describe('shared button tests', () => {
    test('btn must be in the document', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('btn must be w/ clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
