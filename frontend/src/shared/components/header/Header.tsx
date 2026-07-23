import Navbar from '@/shared/components/navbar/Navbar';
import styles from './header.module.css';
import BurguerMenu from '@/shared/components/burguer/BurguerMenu';
const Header = () => {
  const routes = [
    { name: 'Home', href: '#' },
    { name: 'Menú', href: '#products' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];
  return (
    <header className={styles.header}>
      <BurguerMenu routes={routes} />
      <Navbar routes={routes} />
    </header>
  );
};
export default Header;
