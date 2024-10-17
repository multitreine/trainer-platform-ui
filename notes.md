# Docker Build

```bash
docker build -t multitreine/multitreine:frontend-latest --no-cache --target deploy --build-arg COCKPIT_URL_ARG=https://cms.multitreine.com.br --build-arg COCKPIT_API_KEY_LP_ARG=API-f534789c63a572b1be9c3f773c7f98c857c922c6 .

docker run -p 3000:3000 multitreine/multitreine:frontend-latest
```