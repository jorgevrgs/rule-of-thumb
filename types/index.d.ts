export interface IconProps {
  name: string;
  width?: number;
  height?: number;
}

export interface NavLinkProps {
  navLinks: Array<{
    name: string;
    href: string;
  }>;
}
