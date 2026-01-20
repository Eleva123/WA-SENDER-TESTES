# 🚀 Servidor de Updates - WASender Pro

Esta pasta contém todos os arquivos necessários para hospedar seu próprio servidor de atualizações do WASender.

## 📁 Estrutura de Arquivos

```
SERVIDOR_UPDATES/
├── internalupdateversion.txt   ← Versão atual (número inteiro)
├── update.zip                   ← Scripts atualizados (wpp.js, etc)
├── chromedriver/                ← ChromeDrivers por versão
│   ├── 130.exe
│   └── 131.exe
└── edgedriver/                  ← EdgeDrivers por versão
    └── ms130.exe
```

## 🔧 Como Usar

### Opção 1: Hospedar no GitHub (GRÁTIS)

1. Crie um repositório **público** no GitHub
2. Faça upload de todos os arquivos desta pasta
3. Vá em **Releases** → **Create new release**
4. Faça upload dos arquivos como "assets"
5. A URL será: `https://github.com/SEU_USUARIO/SEU_REPO/releases/download/TAG/arquivo`

### Opção 2: Hospedar em seu servidor web

1. Faça upload para seu servidor (ex: `https://seusite.com/wasender-updates/`)
2. Atualize as URLs no Painel Admin do WASender

## ⚙️ Configurar no WASender

1. Abra **Configurações Gerais**
2. Clique 5x no texto "Browser"
3. Digite a senha: `681827`
4. Atualize as URLs:
   - **Arquivo de Versão:** `https://seusite.com/wasender-updates/internalupdateversion.txt`
   - **Arquivo de Scripts:** `https://seusite.com/wasender-updates/update.zip`

## 📥 Download do WPP.js Atualizado

Baixe a versão mais recente do WPPConnect/WA-JS em:
https://github.com/wppconnect-team/wa-js/releases

1. Baixe `wppconnect-wa.js` da versão mais recente
2. Coloque dentro do `update.zip`
3. Atualize o número em `internalupdateversion.txt`

---

**Versão atual sugerida:** 5  
**Última atualização:** Janeiro 2026
