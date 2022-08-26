import type { LayoutContextType } from 'domain/types';
import { createContext } from 'react';

export const LayoutContext = createContext<LayoutContextType>({
  navLinks: [],
  celebrity: null,
});
