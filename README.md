# Reproduction

```sh
mkdir .certs
cd .certs
mkcert example.localhost "*.example.localhost"

nano /etc/hosts
127.0.0.1 example.localhost

cd ..
bun install
bun run build:preview
```
