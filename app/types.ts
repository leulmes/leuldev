export interface activeProps {
  menu: boolean
  setMenu: (value: boolean | ((prevVar: boolean) => boolean)) => void
}

export interface activeProps2 {
  title: string
  href: string
  menu: boolean
  setMenu: (value: boolean | ((prevVar: boolean) => boolean)) => void
}

export interface activeProps3 {
  title: string
  href: string
}

export interface NavLink {
  idx: number
  title: string
  href: string
}
export const navLinks: NavLink[] = [
  { idx: 0, title: 'Home', href: '#first-section' },
  { idx: 1, title: 'Blog', href: '#second-section' },
  { idx: 2, title: 'Projects', href: '#third-section' },
  { idx: 3, title: 'Contact', href: '#fourth-section' },
]

export type PostMeta = {
  title: string
  date: string
  description: string
  slug: string
}
