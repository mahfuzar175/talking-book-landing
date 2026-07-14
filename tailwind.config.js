module.exports = {
  content: ["./*.html"],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#f97316',
        accent: '#8b5cf6',
        foreground: '#0f172a',
        'muted-foreground': '#64748b',
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff'
      }
    }
  }
}
 