export interface Dictionary {
  components: Components
  pages: Pages
}

export interface Components {
  header: HeaderLang
  themeButton: ThemeButtonLang
}

export interface HeaderLang {
  title: string
  language: string
}

export interface ThemeButtonLang {
  darkMode: string
  lightMode: string
}

export interface Pages {
  home: Home
}

export interface Home {
  title: string
  description: string
}
