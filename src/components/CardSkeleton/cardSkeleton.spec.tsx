import { renderWithTheme } from '@utils/tests/helpers';
import CardSkeleton from '.';

describe('CardSkeleton Component', () => {
  it('should display the loading skeleton', () => {
    const { container } = renderWithTheme(<CardSkeleton />);
    const skeleton = container.querySelector('.ant-skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});
