# 📘 **Portfólio — Gustavo Henrique**

## 🧾 **Visão Geral**
Este projeto é um **portfólio pessoal interativo** desenvolvido para apresentar meus principais **projetos, experiências e contatos profissionais**.  
O site foi construído com **HTML, CSS e JavaScript puro**, seguindo boas práticas de **responsividade**, **design limpo** e **interatividade moderna** (usando SweetAlert2 para alertas e redirecionamentos).

Aqui você pode acessar a página Portfolio:<br>
https://gustavoheq.github.io/Portfolio/ <br>
https://portfoliogustavo.vercel.app/

---

## 🧠 **Objetivos do Projeto**
- Apresentar informações pessoais e profissionais de forma clara e atrativa.  
- Exibir projetos hospedados no GitHub e GitHub Pages.  
- Permitir contato direto via LinkedIn e Outlook Web.  
- Demonstrar domínio técnico de frontend: HTML, CSS, JavaScript e integração de bibliotecas.

---

## 🧩 **Estrutura do Projeto**
```
/
├── assets/                 # Imagens e ícones usados no site
│   ├── profile.gif
│   ├── linkedin.png
│   ├── github.png
│   ├── email.png
│   ├── arrow.png
│   ├── almacoffe.jpeg
│   ├── reusedecor.jpg
│   ├── calculadora.png
│   ├── click.png
│   └── gustavoMirandaCurriculo.pdf
│
├── CSS/
│   ├── style.css           # Estilos principais do site
│   └── mediaqueries.css    # Ajustes de responsividade
│
├── JS/
│   └── script.js           # Funções JS (menu hambúrguer + SweetAlert)
│
├── index.html              # Página principal
└── README.md               # Documentação
```

---

## 💻 **Tecnologias Utilizadas**
| Tecnologia | Descrição |
|-------------|------------|
| **HTML5** | Estrutura do site e marcação semântica |
| **CSS3** | Estilização, design responsivo e animações básicas |
| **JavaScript (ES6)** | Interatividade e manipulação dinâmica do DOM |
| **SweetAlert2** | Biblioteca para criar alertas e pop-ups personalizados |
| **Google Fonts (Poppins)** | Tipografia moderna e limpa |
| **GitHub Pages** | Hospedagem gratuita do portfólio online |

---

## ⚙️ **Funcionalidades Principais**

### 🧭 Navegação Responsiva
- Menu superior (desktop) e menu hambúrguer (mobile).
- Transições suaves com `scroll-behavior: smooth`.

### 📄 Seções do Site
- **Profile:** Apresentação com foto, nome, resumo e botões de ação.  
- **Projects:** Lista de projetos com links diretos para GitHub e páginas web.  
- **Contact:** Ícones e links para e-mail e LinkedIn.  
- **Footer:** Navegação rápida e direitos autorais.

### 🔔 SweetAlert2 — Redirecionamentos com Alerta
```js
function redirectWithAlert(url, siteName) {
    Swal.fire({
        title: 'Redirecionamento',
        text: `Você está sendo redirecionado para ${siteName}. Deseja continuar?`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Sim, continuar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        backdrop: true,
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.open(url, '_blank');
        }
    });
}
```
🔹 Isso garante **transparência ao usuário**, evitando redirecionamentos inesperados.

---

## 📱 **Responsividade**
O site adapta-se a diferentes dispositivos (desktop, tablet, celular) usando **media queries**.

```css
@media screen and (max-width: 1200px) {
    #desktop-nav { display: none; }
    #hamburger-nav { display: flex; }
}
```

---

## 🎨 **Design e UI**
- Paleta de cores neutras (preto, branco, cinza).  
- Layout centralizado e limpo.  
- Ícones clicáveis e botões com `hover` animado.  
- Fontes suaves e legíveis (Poppins).

---

## 🧮 **Funções JavaScript**
| Função | Descrição |
|---------|------------|
| `toggleMenu()` | Abre/fecha o menu hambúrguer em telas menores. |
| `redirectWithAlert(url, siteName)` | Exibe um pop-up antes de abrir um novo link em outra aba. |

---

## 🔗 **Integrações e Links**
| Ação | Destino |
|------|----------|
| **Baixar CV** | `./assets/gustavoMirandaCurriculo.pdf` |
| **LinkedIn** | [linkedin.com/in/gustavohnrique](https://linkedin.com/in/gustavohnrique/) |
| **GitHub** | [github.com/gustavoheq](https://github.com/gustavoheq) |
| **Outlook Web** | [Abrir E-mail](https://outlook.live.com/mail/deeplink/compose?to=gustavomirandaoliveira@outlook.com) |

---

## 🚀 **Como Executar Localmente**
```bash
git clone https://github.com/gustavoheq/portfolio.git
cd portfolio
# Abra o arquivo principal
index.html
```

---

## 🧰 **Melhorias Futuras**
- [ ] Adicionar animações SweetAlert (fade, slide, zoom).  
- [ ] Criar seção “Sobre Mim” com trajetória profissional.  
- [ ] Implementar formulário de contato funcional (Node.js ou EmailJS).  
- [ ] Adicionar modo escuro (dark mode).  
- [ ] Otimizar SEO e metadados.

---

## 🧑‍💻 **Autor**
**Gustavo Henrique Miranda Oliveira**  
📧 [gustavomirandaoliveira@outlook.com](mailto:gustavomirandaoliveira@outlook.com)  
🔗 [linkedin.com/in/gustavohnrique](https://linkedin.com/in/gustavohnrique)  
💻 [github.com/gustavoheq](https://github.com/gustavoheq)

---

## 📄 **Licença**
Este projeto é de código aberto — uso livre.
