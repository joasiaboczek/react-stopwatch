import styles from './Button.module.scss';

const Button = ({ onClick, children }) => (
        <div>
            <button className={styles.button} onClick={onClick}>{children}</button>
        </div>
);

export default Button;