export function Navbar({
  styles,
  links,
  activeSection,
  isMobile,
  navOpen,
  onToggleNav,
  onNavClick,
  lang,
  scrolled,
}) {
  const navButtons = links.map((link, index) => (
    <button
      key={link.id}
      type="button"
      onClick={() => onNavClick(link.id)}
      style={{
        ...styles.navLink,
        ...(index > 0 ? styles.navLinkSecondary : null),
        ...(activeSection === link.id ? styles.navLinkActive : null),
      }}
    >
      {link.label}
    </button>
  ))

  return (
    <div
      style={{
        ...styles.navBar,
        ...(scrolled ? styles.navBarScrolled : null),
      }}
    >
      <div style={styles.navBarInner}>
        <div style={styles.navBrand}>CV · F. Palacios</div>

        {isMobile ? (
          <button
            type="button"
            onClick={onToggleNav}
            style={styles.navToggleButton}
            aria-label={
              navOpen
                ? lang === 'es'
                  ? 'Cerrar menú'
                  : 'Close menu'
                : lang === 'es'
                  ? 'Abrir menú'
                  : 'Open menu'
            }
          >
            {navOpen ? '✕' : '☰'}
          </button>
        ) : (
          <nav style={styles.nav}>{navButtons}</nav>
        )}
      </div>

      {isMobile && navOpen && <nav style={styles.navMobile}>{navButtons}</nav>}
    </div>
  )
}
