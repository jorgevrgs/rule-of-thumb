import { createContext } from 'react';
import type { LayoutContextType } from '../../domain/types';

export const LayoutContext = createContext<LayoutContextType>({
  navLinks: [],
  celebrity: null,
});
