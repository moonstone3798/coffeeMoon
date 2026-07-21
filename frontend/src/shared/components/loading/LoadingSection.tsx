import { Loader } from '@mantine/core';
import styles from './loading.module.css';
const LoadingSection = () => {
  return (
    <section className={styles.loading}>
      <Loader size={30} type="dots" color="var(--text)" />
    </section>
  );
};
export default LoadingSection;
