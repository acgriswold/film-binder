![tauri-ui](https://github.com/agmmnn/tauri-ui/assets/16024979/28295bae-8a36-4eff-8c33-2ed2bda82d84)

# Film Binder

Home built file organization solution for renaming photo files, organizing, and any other life improving
things I can add to make photography a little more bearable.

## Getting Started

```bash
pnpm i
pnpm tauri dev
pnpm tauri build
```

## Features

- Support for dark and light modes
- Components-based UI design
- A draggable titlebar with minimize, maximize, and close buttons
- [Radix UI](https://www.radix-ui.com/) for UI primitives
- [Lucide Icons](https://lucide.dev/)
- [Bundle size optimized](https://github.com/johnthagen/min-sized-rust) [`Cargo.toml`](/src-tauri/Cargo.toml) (.msi 2.2mb, .dmg 1.9mb, .deb 2mb)
- [Tauri GitHub Action](https://github.com/tauri-apps/tauri-action)

![tauri-ui](https://user-images.githubusercontent.com/16024979/232823230-19d22434-8e28-43c2-bb70-e45a2fc2da88.gif)

> _[Next.js](https://nextjs.org/) is used in this template to facilitate quick integration of the [`/examples`](https://github.com/shadcn/ui/tree/main/apps/www/app/examples) directory of shadcn/ui. You can also easily use shadcn/ui with the [React + Vite](https://tauri.app/v1/guides/getting-started/setup/vite/) stack and any [React router library](https://react.libhunt.com/libs/router) (optionally) in Tauri._

## Update Components

Note that **shadcn/ui** [is not a library](https://ui.shadcn.com/docs#faqs), therefore you will need to update the components manually. To do so, you can [download](https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2Fshadcn%2Fui%2Ftree%2Fmain%2Fapps%2Fwww%2Fcomponents%2Fui) the _[shadcn/ui/apps/www/components/ui](https://github.com/shadcn/ui/tree/main/apps/www/components/ui)_ directory and paste it into _[src/components/ui](/src/components/ui)_.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
