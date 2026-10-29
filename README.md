# Portfólio de Felipe Carvalho

Portfólio profissional de **Felipe Carvalho de Souza Barros**, Desenvolvedor Full Stack, criado para apresentar projetos, habilidades, experiência e formação. O site é bilíngue (português e inglês) e tem tema claro e escuro.

## 🚀 Deploy

🔗 **Acessar o portfólio:** [flpzht.github.io/portfolio](https://flpzht.github.io/portfolio/)

## 💻 Tecnologias

* React 19
* JavaScript (ES Modules)
* Vite
* CSS Modules
* GitHub Actions e GitHub Pages
* Git e GitHub

## ✨ Funcionalidades

* **Seções:** Início, Sobre, Experiência, Habilidades, Projetos, Formação e Contato.
* **Idiomas:** alternância entre português e inglês, com os textos centralizados em `src/i18n/`.
* **Temas:** claro e escuro, aplicados antes da primeira renderização para evitar flash. Segue o tema do sistema e, depois que a pessoa escolhe, a preferência fica salva no `localStorage`.
* **Projetos em accordion:** as faixas se expandem ao passar o mouse e mostram descrição, tecnologias e links. No celular viram um acordeão vertical por toque, com navegação por teclado.
* **Fundo animado "Brisa":** pétalas leves que flutuam suavemente. Pausa quando a aba fica oculta e respeita `prefers-reduced-motion`.
* **Footer com ondas animadas**, ícones sociais e descrição.
* **Currículo:** botão para baixar o PDF no idioma selecionado.
* **Paleta própria**, definida em variáveis CSS para os dois temas.
* **SEO e compartilhamento:** título e descrição por idioma, Open Graph, Twitter Card, imagem de compartilhamento, dados estruturados (JSON-LD), `robots.txt` e `sitemap.xml`.
* **Menu com seção ativa:** o link da seção visível fica destacado na navbar.

## 📱 Responsividade e acessibilidade

* Layout adaptado para desktop, tablet e celular, sem rolagem horizontal.
* Navegação por teclado, foco visível e link "Pular para o conteúdo".
* Animações desativadas para quem prefere movimento reduzido.
* `aria-label`s nos controles e `alt` nas imagens de conteúdo.

## ⚡ Desempenho

* Imagens do site em WebP.
* Demonstrações dos projetos em vídeo curto (WebM/MP4) com poster, que só tocam quando visíveis, e WebP animado onde o vídeo não compensa.
* Fontes Inter e JetBrains Mono em versão variável (subset latino), cerca de 90 KB no total.
* Imagem principal com dimensões declaradas e prioridade de carregamento.
* Ícones SVG otimizados com SVGO.
* Fundo animado feito apenas com `transform`, executado na GPU.

## 📂 Estrutura

```text
src/
├── assets/
│   ├── documents/      currículos em PDF (PT e EN)
│   ├── fonts/
│   ├── icons/
│   └── images/
│
├── components/
│   ├── AboutAnimation/
│   ├── Background/     fundo animado (Brisa)
│   ├── Button/
│   ├── Card/
│   ├── Footer/
│   ├── LanguageSwitcher/
│   ├── Navbar/
│   ├── ProjectMedia/   vídeo ou imagem dos projetos
│   └── ThemeToggle/
│
├── context/            provedor de idioma
├── data/               ids, links e imagens (sem textos)
├── hooks/              useLanguage
├── i18n/               textos em português e inglês
├── layouts/
│   └── MainLayout/
│
├── pages/
│   └── Home/
│
├── sections/
│   ├── About/
│   ├── Certificates/
│   ├── Contact/
│   ├── Experience/
│   ├── Hero/
│   ├── Projects/
│   └── Skills/
│
└── styles/
    ├── globals.css
    ├── section.module.css  título e espaçamento compartilhados
    ├── typography.css
    └── variables.css   cores, espaçamentos e temas
```

### Organização do código

* **Dados e textos separados:** `src/data/` guarda ids, links e imagens. Os textos ficam em `src/i18n/`, o que facilita traduzir ou editar conteúdo sem mexer nos componentes.
* **Componentes reutilizáveis** para elementos recorrentes, como `Button`, `Card`, `Navbar`, `Footer` e `ThemeToggle`.
* **CSS Modules** para estilos isolados por componente e variáveis CSS globais para a paleta.

## 🗂️ Projetos exibidos

| Projeto | Tecnologias | Links |
|---|---|---|
| Portfolio | React, Vite, CSS Modules | [Código](https://github.com/flpzht/portfolio) · [Demo](https://flpzht.github.io/portfolio/) |
| Around The U.S. | React, Node.js, Express, MongoDB | [Código](https://github.com/flpzht/web_project_api_full) · [Demo](https://flp-around-us.verymad.net/signin) |
| Pokédex Card Flip | JavaScript, HTML5, CSS3, PokéAPI | [Código](https://github.com/flpzht/card-flip-overlay) · [Demo](https://flpzht.github.io/card-flip-overlay/) |
| News Explorer | React, Node.js, Express, MongoDB, JWT | [Front-end](https://github.com/flpzht/news-explorer-frontend) · [Back-end](https://github.com/flpzht/news-explorer-backend) |

## 🛠️ Desenvolvimento

### Pré-requisitos

* Node.js 20.19 ou superior
* npm

### Instalação

```bash
git clone https://github.com/flpzht/portfolio.git
cd portfolio
npm install
```

### Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Serve a versão de produção localmente |
| `npm run lint` | Verifica o código com ESLint |
| `npm run format` | Formata o código com Prettier |
| `npm run format:check` | Confere a formatação sem alterar arquivos |

Com o `base` configurado como `/portfolio/`, a prévia de produção fica em `http://localhost:4173/portfolio/`.

## 🌐 Deploy

O deploy é automático via **GitHub Actions** (`.github/workflows/deploy.yml`). A cada push na branch `main`, o projeto é instalado com `npm ci`, passa pelo `npm run lint`, é construído e publicado no GitHub Pages.

## 👤 Autor

**Felipe Carvalho de Souza Barros**

* GitHub: [github.com/flpzht](https://github.com/flpzht)
* LinkedIn: [linkedin.com/in/felipecarvalhodesouzabarros](https://www.linkedin.com/in/felipecarvalhodesouzabarros)
* Email: [flpcsb@hotmail.com](mailto:flpcsb@hotmail.com)

## 📄 Licença

Distribuído sob a licença [MIT](LICENSE).
