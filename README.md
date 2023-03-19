This is a Programming school's website which contains 20 different professions

## Getting Started

1: Go to the project's folder

```bash
cd client
```

2:

1) For view - pull docker image

```bash
docker pull dazy/client:latest
```

2) For development - install all dependencies

```bash
npm install
# or
yarn
```

3:

1) For view - run docker container

```bash
docker run -d -p 3000:3000 --rm --name client dazy/client
```

2) For development - run dev server

```bash
npm run dev
# or
yarn dev
```