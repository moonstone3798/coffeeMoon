import styles from './navbar.module.css';
interface NavbarProps {
  routes: { name: string; href: string }[];
}

const Navbar = ({ routes }: NavbarProps) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        {routes.map((route) => (
          <li key={route.name}>
            <a href={route.href}>{route.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
