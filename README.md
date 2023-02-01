pnpm install -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node

pnpm install -D husky
pnpm prepare

agrego un hook de husky

npx husky add .husky/pre-commit "npx lint-staged"
