# shell

```sh
# https://tailwindcss.com/docs/guides/vite
yarn create vite shell-layout-routing 
cd shell-layout-routing
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

## notes

- demonstrates routing + nav shell with active nav item styling
  - ported layout / vue-router strategy from [vue-board](file:///code/web/nuxt/vue-board/README.ilan.md)
  - changed to
    - vite not vue-cli-service
    - simpler layout
      - ~~[joshmanders](https://codepen.io/joshmanders/pen/PQQBoR)~~ turns out it's cunted in tw3
      - [twui nav simple](https://tailwindui.com/components/application-ui/navigation/navbars#component-aaed25b299f2015d2c4276b98d463cee)

## links

- [nuxt3 version](file:///code/web/nuxt/6-tw-simple-nav/README.md)

## deploy

`TypeError: require(...).internalModuleReadJSON is not a function`
```sh
# https://github.com/vercel/pkg#error-requireinternalmodulestat-is-not-a-function
printenv | grep NODE
NODE_OPTIONS=--require /home/ilan/.config/Code/User/workspaceStorage/1c102f9cc51a933565f86b40e3698670/ms-vscode.js-debug/bootloader.js  
```