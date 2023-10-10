import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('widget sidebar tests', () => {
    test('sidebar test render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('sidebar test toggle', () => {
        componentRender(<Sidebar />);
        const sidebarToggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(sidebarToggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
