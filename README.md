# Teste Econverse — Front-End

Vitrine de produtos criada com React, TypeScript, Vite e Sass. Os produtos são carregados do endpoint fornecido no teste, e cada item permite abrir um modal com detalhes e quantidade para adicionar ao carrinho.

## Requisitos

- Node.js 20.19+ ou 22.12+
- npm

## Instalação

```bash
npm install
```

## Executar em desenvolvimento

```bash
npm run dev
```

O Vite disponibiliza a aplicação localmente e encaminha a chamada de produtos ao endpoint Econverse através de um proxy de desenvolvimento.

## Validar

```bash
npm run lint
npm run build
```

## Pré-visualizar a build

```bash
npm run preview
```

O endpoint de produtos não permite chamadas cross-origin diretas do navegador. Para publicação em hospedagem estática, configure um proxy de servidor para encaminhar `/api/econverse/*` a `https://app.econverse.com.br/*`.
