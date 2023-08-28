# landing-page-builder

![Home Page](https://hackmd.io/_uploads/H1RsfD5p3.png)


# Drag & Drop Landing Page Builder

This is a simple drag and drop landing page builder built using Vue.js. It allows users to create landing pages by dragging and dropping text and image blocks. The application provides features to edit text content, select predefined images for image blocks, rearrange blocks, duplicate blocks, and delete blocks. The landing page data can be exported to JSON format by clicking the "Save Design" button.

## Features

- Drag and drop text and image blocks to create a landing page.
- Editable text content for text blocks.
- Choose from 3-4 predefined images for image blocks.
- Rearrange blocks by dragging and dropping.
- Duplicate and delete blocks.
- Export landing page data to JSON format.

![text editor and styles](https://hackmd.io/_uploads/By9L7Dc6h.png)

![Image editor and predefined images](https://hackmd.io/_uploads/SJxS4Dc6h.png)

![section/blocks view](https://hackmd.io/_uploads/HyUgrvcTh.png)


## Getting Started

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Run the development server using `npm run serve`.

## Usage

1. Edit text content by clicking on the text block and making changes.
2. Click on the image block to select a predefined image.
3. Rearrange blocks by dragging and dropping them either from the section area or on the board.
4. Duplicate a block by clicking the duplicate button.
5. Delete a block by clicking the delete button.
6. Click the "Save Design" button to export landing page data to JSON format (console.log).

## Technologies and Plugins

- Vue 3
- Composition Api
- TypeScript 
- CSS 
- Tailwind CSS
- Vuedraggable-next
- Vue-resizeable
- Pinia for state management
- vue-color-kit for selection
- Tiptap for editting etc


## Features

- Drag and drop text and image blocks to create a landing page.
- Editable text content for text blocks.
- Choose from 3-4 predefined images for image blocks.
- Rearrange blocks by dragging and dropping.
- Duplicate and delete blocks.
- Export landing page data to JSON format.

## Getting Started

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Run the development server using `npm run dev`.




## Recommended IDE Setup

This template should help get you started developing with Vue 3 in Vite.


[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
