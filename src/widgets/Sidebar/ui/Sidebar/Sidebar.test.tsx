import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('widget sidebar tests', () => {
    test('sidebar test render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('sidebar test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const sidebarToggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(sidebarToggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
