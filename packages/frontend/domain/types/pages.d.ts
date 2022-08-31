import type { Celebrities } from './api';
import type { NavLinks } from './components';

export interface IndexPageProps {
  celebrities: Celebrities;
  navLinks: NavLinks;
}
