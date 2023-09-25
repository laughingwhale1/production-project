import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button';

describe('class names', () => {
    test('must return 1 argument', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
