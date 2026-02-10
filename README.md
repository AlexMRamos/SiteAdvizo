# Advizo - Site Institucional

Site institucional profissional inspirado no site da Advizo, desenvolvido com HTML, CSS e JavaScript puro.

## 🎨 Características

- **Design Moderno e Sofisticado**: Layout elegante com paleta de cores profissional (azul escuro + dourado)
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Efeitos de scroll, fade-in e transições elegantes
- **Menu Interativo**: Navegação com dropdown e menu mobile
- **Seções Completas**:
  - Hero com chamada impactante
  - Sobre a empresa com estatísticas
  - Serviços com tabs interativas
  - Equipe com perfis detalhados
  - Formulário de contato
  - Footer completo

## 📁 Estrutura de Arquivos

```
advizo-site/
│
├── index.html          # Estrutura HTML do site
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interatividade
└── README.md           # Este arquivo
```

## 🚀 Como Publicar no GitHub Pages

### Passo 1: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"New"** ou **"+"** no canto superior direito
3. Escolha **"New repository"**
4. Nomeie o repositório (exemplo: `advizo-site` ou `meu-site`)
5. Deixe como **Public**
6. Clique em **"Create repository"**

### Passo 2: Fazer Upload dos Arquivos

**Opção A: Via Interface Web do GitHub**

1. No repositório criado, clique em **"uploading an existing file"**
2. Arraste os arquivos: `index.html`, `styles.css`, `script.js`
3. Adicione uma mensagem de commit (ex: "Initial commit")
4. Clique em **"Commit changes"**

**Opção B: Via Git (Linha de Comando)**

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git

# Entre na pasta
cd nome-do-repositorio

# Copie os arquivos para esta pasta
# (index.html, styles.css, script.js)

# Adicione os arquivos
git add .

# Faça o commit
git commit -m "Initial commit"

# Envie para o GitHub
git push origin main
```

### Passo 3: Ativar GitHub Pages

1. No repositório, vá em **"Settings"** (Configurações)
2. No menu lateral, clique em **"Pages"**
3. Em **"Source"**, selecione **"main"** branch
4. Clique em **"Save"**
5. Aguarde alguns minutos

Seu site estará disponível em:
```
https://seu-usuario.github.io/nome-do-repositorio/
```

## 📝 Personalizações

### Alterar Cores

No arquivo `styles.css`, modifique as variáveis CSS no início:

```css
:root {
    --primary-dark: #0A1628;      /* Cor principal escura */
    --accent-gold: #D4AF37;       /* Cor de destaque dourada */
    /* ... outras cores */
}
```

### Alterar Textos

Edite o arquivo `index.html` e modifique os textos conforme necessário.

### Adicionar Imagens

Para adicionar imagens reais:

1. Crie uma pasta `images/` no repositório
2. Adicione suas imagens
3. No HTML, substitua:
   ```html
   <div class="image-placeholder"></div>
   ```
   Por:
   ```html
   <img src="images/sua-imagem.jpg" alt="Descrição">
   ```

### Configurar Formulário de Contato

O formulário atualmente exibe um alerta. Para funcionar de verdade, você precisará:

1. **Usar um serviço de backend** como:
   - [Formspree](https://formspree.io/)
   - [Netlify Forms](https://www.netlify.com/products/forms/)
   - [EmailJS](https://www.emailjs.com/)

2. **Exemplo com Formspree**:
   ```html
   <form action="https://formspree.io/f/seu-id" method="POST">
       <!-- seus campos -->
   </form>
   ```

## 🎯 Funcionalidades

- ✅ Navegação suave entre seções
- ✅ Menu mobile responsivo
- ✅ Tabs interativas para serviços
- ✅ Animações no scroll
- ✅ Contador animado de estatísticas
- ✅ Efeito parallax no hero
- ✅ Formulário de contato
- ✅ Links para redes sociais

## 🌐 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com Grid, Flexbox e Animations
- **JavaScript**: Interatividade e animações
- **Google Fonts**: Tipografia elegante (Crimson Pro + Work Sans)

## 📱 Compatibilidade

- ✅ Chrome / Edge / Opera / Brave
- ✅ Firefox
- ✅ Safari
- ✅ Mobile (iOS e Android)

## 🔧 Manutenção

Para atualizar o site:

1. Edite os arquivos localmente
2. Faça upload novamente no GitHub ou use git:
   ```bash
   git add .
   git commit -m "Atualização do site"
   git push
   ```
3. As mudanças aparecerão no site em poucos minutos

## 📞 Suporte

Para dúvidas sobre GitHub Pages:
- [Documentação oficial](https://docs.github.com/pages)

Para dúvidas sobre o código:
- Revise os comentários no código
- Consulte a documentação de HTML/CSS/JS

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente.

---

**Desenvolvido com ❤️ e atenção aos detalhes**
