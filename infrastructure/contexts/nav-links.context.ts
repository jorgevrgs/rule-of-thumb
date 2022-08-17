import { createContext } from 'react';
import type { NavLinkProps } from '../../types';

export const NavLinksContext = createContext<NavLinkProps['navLinks']>([]);
