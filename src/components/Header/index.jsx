import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.headerContainer}>
            <nav className={styles.nav} role="navigation" aria-label="Menu principal">
                <div className={styles.logo}>
                    <a href="/" aria-label="Página inicial">
                        <h1 className={styles.tituloHeader}>Logo Fisioterapia</h1>
                    </a>
                </div>
                <ul className={styles.navList}>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#testimonials">Depoimentos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
