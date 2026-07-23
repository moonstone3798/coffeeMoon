import styles from '../styles/hero.module.css';
import { IconCoffee } from '@tabler/icons-react';
const HeroSection = () => {
  return (
    <>
      <section className={styles.hero} id="#hero">
        <div className={styles.heroName}>
          <h1>Coffee Moon </h1>
          <IconCoffee stroke={2} size={40} />
        </div>
        <video className={styles.video} autoPlay muted loop playsInline>
          <source src="/videos/coffee.mp4" type="video/mp4" />
        </video>
      </section>
    </>
  );
};
export default HeroSection;
