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