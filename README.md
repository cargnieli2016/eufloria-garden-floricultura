# Eufloria Garden 🌿

Site da **Floricultura Eufloria Garden**, em Monte Mor — SP. Um espaço para apresentar as plantas, mostrar um pouco do viveiro e facilitar o contato e a visita à floricultura.

## ✨ O que tem por aqui

- Apresentação da floricultura e de suas categorias de plantas
- Galeria de imagens do viveiro
- Atalhos para conversa pelo WhatsApp e localização no Google Maps
- Endereço, telefone e horários de atendimento
- Layout adaptado para celular, tablet e desktop

## 🚀 Comece a usar

### Site em HTML

Para abrir a página estática, abra a pasta do projeto no VS Code, clique com o botão direito em `index.html` e escolha **Open with Live Server**.

Essa página funciona diretamente no navegador. As fotos são arquivos locais; o mapa e as fontes carregam de serviços externos, então precisam de conexão com a internet.

### Publicar no GitHub Pages

O site estático é publicado automaticamente pelo GitHub Actions sempre que há um envio para a branch `main`. Antes da primeira publicação, habilite o Pages no repositório:

1. Abra **Settings → Pages** e selecione **GitHub Actions** como origem da publicação.
2. Envie as alterações para a branch `main`; o fluxo publica `index.html` e as imagens de `src/assets`.
3. Acompanhe o resultado em **Actions**. Quando o fluxo terminar, o endereço do site aparecerá também em **Settings → Pages**.

O endereço esperado deste projeto é `https://cargnieli2016.github.io/eufloria-garden-floricultura/`.

### Aplicação de desenvolvimento

O projeto também conta com uma aplicação React, executada com Vite. É necessário ter Node.js e npm instalados.

```bash
npm install
npm run dev
```

Abra no navegador o endereço local exibido no terminal.

Para gerar a versão de produção e visualizá-la localmente:

```bash
npm run build
npm run preview
```

Para executar os testes:

```bash
npm test
```

## 📍 Informações

- **Endereço:** Rod. Jornalista Francisco Aguirre Proença, km 16,5 — Monte Mor, SP
- **WhatsApp:** [(19) 98158-6113](https://wa.me/5519981586113)
- **Segunda a sábado:** 08:00–18:00
- **Domingo:** 08:00–13:00

## 🧰 Tecnologias

- HTML e CSS na página estática
- React e TypeScript
- Vite
- TanStack Start e TanStack Router
- Tailwind CSS

## 📄 Licença

Este projeto não especifica uma licença de uso ou redistribuição.
