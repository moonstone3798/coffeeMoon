import styles from './navbar.module.css';
const routes = [
  { name: 'Inicio', href: '#' },
  { name: 'Menú', href: '#products' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Contacto', href: '#contact' },
];
const Navbar = () => {
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
