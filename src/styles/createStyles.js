// src/styles/createStyles.js
export function createStyles(theme) {
  const isDark = theme === 'dark'

  return {
    navBar: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      marginBottom: '2rem',
      padding: '0.6rem 10px',
      backdropFilter: 'blur(16px)',
      background: isDark
        ? 'rgba(15,23,42,0.92)'
        : 'rgba(249,250,251,0.94)',
      borderBottom: `1px solid ${
        isDark ? 'rgba(31,41,55,0.9)' : 'rgba(209,213,219,1)'
      }`,
      transition: 'background 0.25s ease, box-shadow 0.25s ease',
    },
    navBarScrolled: {
      boxShadow: isDark
        ? '0 12px 30px rgba(15,23,42,0.9)'
        : '0 12px 30px rgba(148,163,184,0.65)',
    },
    navBarInner: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '0.75rem',
      flexWrap: 'wrap',
    },
    navBrand: {
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      opacity: isDark ? 0.8 : 0.7,
    },
    navToggleButton: {
      borderRadius: '999px',
      border: `1px solid ${
        isDark ? 'rgba(55,65,81,0.9)' : 'rgba(209,213,219,1)'
      }`,
      padding: '0.25rem 0.7rem',
      fontSize: '0.9rem',
      background: isDark ? 'rgba(15,23,42,0.95)' : 'rgba(255,255,255,0.98)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.35rem',
      transition:
        'background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.12s ease',
    },
    navMobile: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      marginTop: '0.75rem',
    },

    toTopButton: {
      position: 'fixed',
      right: '1.5rem',
      bottom: '1.5rem',
      zIndex: 50,
      borderRadius: '999px',
      border: `1px solid ${
        isDark ? 'rgba(148,163,184,0.9)' : 'rgba(156,163,175,1)'
      }`,
      padding: '0.45rem 0.7rem',
      fontSize: '0.9rem',
      background: isDark ? 'rgba(15,23,42,0.95)' : 'rgba(255,255,255,0.96)',
      color: isDark ? '#e5e7eb' : '#111827',
      boxShadow: isDark
        ? '0 10px 30px rgba(15,23,42,0.8)'
        : '0 10px 30px rgba(148,163,184,0.7)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.35rem',
      opacity: 0.9,
      transition:
        'transform 0.12s ease, box-shadow 0.2s ease, opacity 0.2s ease, background 0.2s ease',
    },

    app: {
      minHeight: '100vh',
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      background: isDark
        ? 'radial-gradient(circle at top left, #1f2937 0, #020617 40%, #000 100%)'
        : 'radial-gradient(circle at top left, #e5e7eb 0, #f9fafb 40%, #e5e7eb 100%)',
      color: isDark ? '#e5e7eb' : '#111827',
      transition: 'background 0.35s ease, color 0.35s ease',
    },
    layout: {
      margin: '0 auto',
      padding: '2.5rem 1.5rem 3.5rem',
    },
    topBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.75rem',
      flexWrap: 'wrap',
    },
    topBarGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      flexWrap: 'wrap',
      fontSize: '0.8rem',
    },
    toggleLabel: {
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      opacity: 0.8,
    },
    toggleButton: {
      borderRadius: '999px',
      border: `1px solid ${
        isDark ? 'rgba(55,65,81,0.9)' : 'rgba(209,213,219,1)'
      }`,
      padding: '0.25rem 0.7rem',
      fontSize: '0.8rem',
      background: isDark ? 'rgba(15,23,42,0.9)' : 'rgba(255,255,255,0.9)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.3rem',
      transition:
        'background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.12s ease',
    },
    toggleButtonActive: {
      background: isDark ? 'rgba(37,99,235,0.25)' : 'rgba(59,130,246,0.1)',
      borderColor: isDark ? 'rgba(96,165,250,0.9)' : 'rgba(59,130,246,0.9)',
    },
    chip: {
      display: 'inline-block',
      padding: '0.25rem 0.7rem',
      borderRadius: '999px',
      border: `1px solid ${
        isDark ? 'rgba(148, 163, 184, 0.6)' : 'rgba(148, 163, 184, 0.8)'
      }`,
      fontSize: '0.7rem',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: isDark ? '#e5e7eb' : '#111827',
      backgroundColor: isDark ? 'rgba(15,23,42,0.9)' : 'rgba(255,255,255,0.85)',
      transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
    },
    header: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.5rem',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '2.5rem',
    },
    name: {
      fontSize: '2.4rem',
      fontWeight: 700,
      letterSpacing: '-0.04em',
    },
    subtitle: {
      fontSize: '1rem',
      color: isDark ? '#9ca3af' : '#4b5563',
      marginTop: '0.25rem',
    },
    contactCard: {
      background: isDark ? 'rgba(15, 23, 42, 0.85)' : 'rgba(255,255,255,0.95)',
      borderRadius: '1rem',
      padding: '0.85rem 1rem',
      border: `1px solid ${
        isDark ? 'rgba(148, 163, 184, 0.4)' : 'rgba(209,213,219,1)'
      }`,
      fontSize: '0.9rem',
      minWidth: '230px',
      boxShadow: isDark
        ? '0 18px 40px rgba(15,23,42,0.6)'
        : '0 18px 40px rgba(148,163,184,0.35)',
      transition:
        'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.12s ease',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.35rem',
      marginBottom: '0.25rem',
      color: isDark ? '#cbd5f5' : '#1f2933',
    },
    nav: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem',
      marginBottom: 0,
      fontSize: '0.85rem',
    },
    navLink: {
      padding: '0.35rem 0.75rem',
      borderRadius: '999px',
      border: '1px solid transparent',
      background: isDark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255,255,255,0.9)',
      color: isDark ? '#e5e7eb' : '#111827',
      textDecoration: 'none',
      cursor: 'pointer',
      transition:
        'background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.12s ease',
    },
    navLinkSecondary: {
      background: isDark ? 'transparent' : 'rgba(249,250,251,1)',
      borderColor: isDark ? 'rgba(55, 65, 81, 0.9)' : 'rgba(209,213,219,1)',
    },
    navLinkActive: {
      borderColor: isDark ? 'rgba(96,165,250,1)' : 'rgba(59,130,246,1)',
      background: isDark ? 'rgba(37,99,235,0.3)' : 'rgba(59,130,246,0.12)',
      color: isDark ? '#e5e7eb' : '#1d4ed8',
      transform: 'translateY(-1px)',
      fontWeight: 600,
    },
    section: {
      marginBottom: '2.6rem',
      scrollMarginTop: '96px',
    },
    sectionTitle: {
      fontSize: '1.2rem',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: isDark ? '#9ca3af' : '#6b7280',
      marginBottom: '1.2rem',
    },
    sectionBody: {
      background: isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255,255,255,0.95)',
      borderRadius: '1.1rem',
      border: `1px solid ${
        isDark ? 'rgba(31, 41, 55, 0.9)' : 'rgba(209,213,219,1)'
      }`,
      padding: '1.4rem 1.5rem',
      boxShadow: isDark
        ? '0 18px 40px rgba(15,23,42,0.7)'
        : '0 18px 40px rgba(148,163,184,0.45)',
      transition:
        'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.12s ease',
    },
    paragraph: {
      fontSize: '0.96rem',
      lineHeight: 1.7,
      color: isDark ? '#e5e7eb' : '#111827',
    },
    strong: {
      fontWeight: 600,
    },
    timeline: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.1rem',
    },
    timelineItem: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'auto minmax(0, 1fr)',
      gap: '0.75rem 1.5rem',
      paddingBottom: '1.35rem',
      borderBottom: `1px dashed ${
        isDark ? 'rgba(55, 65, 81, 0.9)' : 'rgba(209,213,219,1)'
      }`,
      transition: 'transform 0.12s ease, background 0.2s ease',
    },
    timelineLast: {
      borderBottom: 'none',
      paddingBottom: 0,
    },
    timelineMarkerCol: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '0.2rem',
    },
    timelineDot: {
      width: '11px',
      height: '11px',
      borderRadius: '999px',
      background: isDark ? '#60a5fa' : '#2563eb',
      border: `2px solid ${isDark ? '#1d4ed8' : '#bfdbfe'}`,
      boxShadow: isDark
        ? '0 0 0 3px rgba(37,99,235,0.35)'
        : '0 0 0 3px rgba(191,219,254,0.9)',
    },
    timelineLine: {
      flex: 1,
      width: '2px',
      marginTop: '0.35rem',
      background: isDark ? 'rgba(75,85,99,0.9)' : 'rgba(209,213,219,1)',
    },
    period: {
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: isDark ? '#9ca3af' : '#6b7280',
      marginBottom: '0.2rem',
    },
    role: {
      fontSize: '0.95rem',
      fontWeight: 600,
    },
    org: {
      fontSize: '0.9rem',
      color: isDark ? '#9ca3af' : '#4b5563',
      marginTop: '0.1rem',
    },
    bullets: {
      fontSize: '0.9rem',
      marginTop: '0.4rem',
      paddingLeft: '1rem',
      color: isDark ? '#d1d5db' : '#111827',
    },
    bulletItem: {
      marginBottom: '0.15rem',
    },
    pillRow: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.4rem',
      marginTop: '0.4rem',
    },
    pill: {
      fontSize: '0.8rem',
      padding: '0.15rem 0.6rem',
      borderRadius: '999px',
      background: isDark ? 'rgba(30, 64, 175, 0.7)' : 'rgba(59,130,246,0.1)',
      border: `1px solid ${
        isDark ? 'rgba(129, 140, 248, 0.7)' : 'rgba(59,130,246,0.85)'
      }`,
      color: isDark ? '#e5e7eb' : '#1d4ed8',
      transition:
        'background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.12s ease',
    },
    skillColumns: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
      gap: '1rem',
      fontSize: '0.9rem',
    },
    skillGroupTitle: {
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: isDark ? '#9ca3af' : '#6b7280',
      marginBottom: '0.4rem',
    },
    skillList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    footer: {
      marginTop: '1.5rem',
      fontSize: '0.78rem',
      color: isDark ? '#6b7280' : '#9ca3af',
      textAlign: 'center',
    },
    badge: {
      fontSize: '0.7rem',
      padding: '0.2rem 0.6rem',
      borderRadius: '999px',
      background: isDark ? 'rgba(6, 95, 70, 0.7)' : 'rgba(16,185,129,0.1)',
      border: `1px solid ${
        isDark ? 'rgba(16, 185, 129, 0.7)' : 'rgba(16,185,129,0.9)'
      }`,
      color: isDark ? '#a7f3d0' : '#047857',
    },
    offersColumns: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
      gap: '1.25rem',
      fontSize: '0.9rem',
    },
    offersTitle: {
      fontSize: '0.9rem',
      fontWeight: 600,
      marginBottom: '0.4rem',
    },
    offersList: {
      listStyle: 'disc',
      paddingLeft: '1.1rem',
      margin: 0,
    },
    pdfButton: {
      borderRadius: '999px',
      border: `1px solid ${
        isDark ? 'rgba(96,165,250,1)' : 'rgba(59,130,246,1)'
      }`,
      padding: '0.35rem 0.85rem',
      fontSize: '0.8rem',
      background: isDark ? 'rgba(37,99,235,0.25)' : 'rgba(59,130,246,0.1)',
      color: isDark ? '#bfdbfe' : '#1d4ed8',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.35rem',
      textDecoration: 'none',
      transition:
        'background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.12s ease',
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '1.25rem',
      alignItems: 'stretch',
    },
    projectCard: {
      background: isDark ? 'rgba(15,23,42,0.96)' : 'rgba(255,255,255,0.98)',
      borderRadius: '1rem',
      border: `1px solid ${
        isDark ? 'rgba(31,41,55,0.9)' : 'rgba(229,231,235,1)'
      }`,
      padding: '1rem 1.1rem 0.9rem',
      boxShadow: isDark
        ? '0 12px 28px rgba(15,23,42,0.75)'
        : '0 12px 28px rgba(148,163,184,0.45)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.45rem',
      boxSizing: 'border-box',
      transition:
        'transform 0.12s ease, box-shadow 0.2s ease, border-color 0.2s ease',
    },
    projectTitleRow: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '0.4rem',
      marginBottom: '0.2rem',
    },
    projectTitle: {
      fontSize: '0.95rem',
      fontWeight: 600,
      wordBreak: 'break-word',
    },
    projectLangTag: {
      fontSize: '0.7rem',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      padding: '0.12rem 0.55rem',
      borderRadius: '999px',
      background: isDark ? 'rgba(30,64,175,0.85)' : 'rgba(219,234,254,0.95)',
      border: `1px solid ${
        isDark ? 'rgba(129,140,248,0.95)' : 'rgba(59,130,246,0.9)'
      }`,
      color: isDark ? '#e5e7eb' : '#1d4ed8',
      whiteSpace: 'nowrap',
    },
    projectDescription: {
      fontSize: '0.85rem',
      lineHeight: 1.5,
      color: isDark ? '#d1d5db' : '#4b5563',
      marginTop: '0.1rem',
    },
    projectLink: {
      marginTop: '0.35rem',
      fontSize: '0.8rem',
      textDecoration: 'none',
      alignSelf: 'flex-start',
      borderRadius: '999px',
      padding: '0.2rem 0.6rem',
      border: `1px solid ${
        isDark ? 'rgba(59,130,246,0.9)' : 'rgba(59,130,246,0.85)'
      }`,
      background: isDark ? 'rgba(30,64,175,0.35)' : 'rgba(219,234,254,0.95)',
      color: isDark ? '#93c5fd' : '#2563eb',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.25rem',
      transition:
        'background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.12s ease',
    },
    contactLayout: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '1.3rem',
      alignItems: 'flex-start',
    },
    contactText: {
      fontSize: '0.9rem',
      lineHeight: 1.6,
      color: isDark ? '#e5e7eb' : '#111827',
    },
    contactForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.7rem',
    },
    formLabel: {
      fontSize: '0.78rem',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: isDark ? '#9ca3af' : '#6b7280',
      marginBottom: '0.25rem',
      display: 'block',
    },
    formInput: {
      width: '100%',
      borderRadius: '0.6rem',
      border: `1px solid ${
        isDark ? 'rgba(55,65,81,1)' : 'rgba(209,213,219,1)'
      }`,
      padding: '0.5rem 0.65rem',
      fontSize: '0.9rem',
      background: isDark ? 'rgba(15,23,42,0.95)' : '#ffffff',
      color: isDark ? '#e5e7eb' : '#111827',
      outline: 'none',
      boxSizing: 'border-box',
    },
    formTextarea: {
      width: '100%',
      borderRadius: '0.6rem',
      border: `1px solid ${
        isDark ? 'rgba(55,65,81,1)' : 'rgba(209,213,219,1)'
      }`,
      padding: '0.55rem 0.65rem',
      fontSize: '0.9rem',
      minHeight: '110px',
      resize: 'vertical',
      background: isDark ? 'rgba(15,23,42,0.95)' : '#ffffff',
      color: isDark ? '#e5e7eb' : '#111827',
      outline: 'none',
      boxSizing: 'border-box',
    },
    formButton: {
      alignSelf: 'flex-start',
      borderRadius: '999px',
      border: `1px solid ${
        isDark ? 'rgba(96,165,250,1)' : 'rgba(59,130,246,1)'
      }`,
      padding: '0.35rem 0.9rem',
      fontSize: '0.85rem',
      background: isDark ? 'rgba(37,99,235,0.3)' : 'rgba(59,130,246,0.12)',
      color: isDark ? '#bfdbfe' : '#1d4ed8',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.3rem',
      transition:
        'background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.12s ease',
    },
    formFeedbackOk: {
      fontSize: '0.8rem',
      marginTop: '0.3rem',
      color: isDark ? '#6ee7b7' : '#047857',
    },
    formFeedbackError: {
      fontSize: '0.8rem',
      marginTop: '0.3rem',
      color: isDark ? '#fecaca' : '#b91c1c',
    },
  }
}
