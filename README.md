## School of Programming project
**Author:** Davyd Hutsenko

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

4) Open http://localhost:3000/ in your browser and use.

## Description
Welcome to the Programming School Website repository! This project is a comprehensive website for a programming school, built using Next.js, TypeScript, Redux-Toolkit, and SCSS. The website provides a platform for individuals interested in programming to enhance their skills, learn new technologies, and connect with a community of fellow learners and mentors.

Features:
* Course Catalog: Explore a wide range of programming courses covering various languages, frameworks, and topics. Choose from beginner-friendly courses to advanced subjects, tailored to different skill levels.


* Interactive Learning: Engage in interactive coding exercises, projects, and quizzes to practice and apply your programming knowledge. Get hands-on experience and receive instant feedback to reinforce your learning.


* Video Tutorials: Access a collection of video tutorials and lectures delivered by experienced instructors and industry professionals. Learn from their expertise and gain insights into best practices and real-world scenarios.


* Community Interaction: Connect with a vibrant community of learners, mentors, and industry experts. Collaborate on projects, participate in discussion forums, share knowledge, and seek guidance from experienced programmers.


* Progress Tracking: Track your learning progress through the platform. Keep a record of completed courses, monitor your achievements, and earn badges as you advance through the curriculum.
