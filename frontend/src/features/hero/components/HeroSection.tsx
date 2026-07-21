import coffeeVideo from '@/assets/videos/coffee.mp4';
import styles from '../styles/hero.module.css';

const HeroSection = () => {
  return (
    <>
      <section className={styles.hero} id="#hero">
        <video className={styles.video} autoPlay muted loop playsInline>
          <source src={coffeeVideo} type="video/mp4" />
        </video>
      </section>
    </>
  );
};
export default HeroSection;
