import styles from '../styles/about.module.css';

const AboutSection = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>Sobre nosotros </h2>
      <p>
        En Coffee Moon creemos que el café es mucho más que una bebida: es una
        pausa, un encuentro y un momento para disfrutar. Seleccionamos
        cuidadosamente cada ingrediente para crear una experiencia cálida y
        única en cada taza.
      </p>
    </section>
  );
};
export default AboutSection;
