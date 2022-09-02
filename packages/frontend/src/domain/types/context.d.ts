import type { Celebrity } from './api';
import type { NavLinks } from './components';

export interface LayoutContextType {
  navLinks: NavLinks;
  celebrity: Celebrity;
}
