import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button';

describe('shared button tests', () => {
    test('btn must be in the document', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('btn must be w/ clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
