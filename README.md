# 🍊 TamraJu

<img width="892" alt="image" src="https://user-images.githubusercontent.com/55437339/229000195-927525a2-d3cd-4273-beaa-93adfe43a9e1.png">

내 손안에 탐나는 제주 전통주 도감, 탐라주

[탐라주 서비스 바로가기](https://tamrazu.vercel.app/SignIn)
- 아이디: guest1
- 비밀번호: 1111

<br/>

## ☁️ Goormton - Group 5

| 프론트 개발 | 프론트 개발 | 백엔드 개발 |
| :---: | :---: | :---: |
|<img src="https://user-images.githubusercontent.com/55437339/228994330-96b561fc-e2f7-4a3d-a5bd-787480cbd9a2.png" width="300" height="300"/>| <img src="https://user-images.githubusercontent.com/55437339/228994501-977c002e-acaa-4aea-af6c-fa6425d7f662.png" width="300" height="300"/> | <img src="https://user-images.githubusercontent.com/55437339/228993752-6f4e2fce-2523-42cb-81a6-0d4e0c14b16d.png" width="300" height="300"/> |
| [신희상](https://github.com/ramer-dev) | [박재현](https://github.com/jaehyeon74) | [김소현](https://github.com/thguss) |

<br/>

## 🛠 Used Stacks

### Front-end
- TypeScript, React
- Kakao Map Sdk
- React-query, Axios
- Emotion
- Recoil

### Back-end
- JDK 17, Spring Boot 2.7.10, Gradle 7.5.1
- Data-Jpa, Spring-Web, Lombok, MySQL 8.0
- Github Action, AWS(EC2, RDS, S3, Code Deploy, ACM, ALB, Route 53 .etc)

<br/>

### 🥕 API 명세서
| API명 | URL |
| :---: | :---: |
| 로그인(아이디: guest1, 비밀번호: 1111) | [[POST] /api/v1/members/sign](https://github.com/TamraZu/.github/wiki/%EB%A1%9C%EA%B7%B8%EC%9D%B8) |
| 양조장 전체 조회 | [[GET] /api/v1/factories?memberId=](https://github.com/TamraZu/.github/wiki/%EC%96%91%EC%A1%B0%EC%9E%A5-%EC%A0%84%EC%B2%B4-%EC%A1%B0%ED%9A%8C) |
| 전통주 상위 3개 조회 | [[GET] /api/v1/alcohols/rank](https://github.com/TamraZu/.github/wiki/%EC%A0%84%ED%86%B5%EC%A3%BC-%EC%83%81%EC%9C%84-3%EA%B0%9C-%EC%A1%B0%ED%9A%8C) |
| 양조장 상세 조회 | [[GET] ~/api/v1/factories/{factoryId}](https://github.com/TamraZu/.github/wiki/%EC%96%91%EC%A1%B0%EC%9E%A5-%EC%83%81%EC%84%B8-%EC%A1%B0%ED%9A%8C) |
| 전통주 전체 조회 | [[GET] ~/api/v1/alcohols?memberId=&category=](https://github.com/TamraZu/.github/wiki/%EC%A0%84%ED%86%B5%EC%A3%BC-%EC%A0%84%EC%B2%B4-%EC%A1%B0%ED%9A%8C) |
| 카테고리 전체 조회 | [[GET] ~/api/v1/categories](https://github.com/TamraZu/.github/wiki/%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC-%EC%A0%84%EC%B2%B4-%EC%A1%B0%ED%9A%8C) |
| 전통주 상세 조회 | [[GET] ~/api/v1/alcohols/{alcoholId}?memberId=](https://github.com/TamraZu/.github/wiki/%EC%A0%84%ED%86%B5%EC%A3%BC-%EC%83%81%EC%84%B8-%EC%A1%B0%ED%9A%8C) |
| 전통주 마셔봤어요 기능 | [[GET] ~/api/v1/eats](https://github.com/TamraZu/.github/wiki/%EC%A0%84%ED%86%B5%EC%A3%BC-%EB%A7%88%EC%85%94%EB%B4%A4%EC%96%B4%EC%9A%94-%EA%B8%B0%EB%8A%A5) |
| 유저페이지 조회 | [[GET] ~/api/v1/members/page/{memberId}](https://github.com/TamraZu/.github/wiki/%EC%9C%A0%EC%A0%80%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%A1%B0%ED%9A%8C) |


<br/>

## 🥫 ERD

<img width="1306" alt="image" src="https://user-images.githubusercontent.com/55437339/228997525-fb33736e-acb0-4e94-842a-16290c60a0da.png">


<br/>

## 🏗 Server Architecture

<img width="598" alt="image" src="https://user-images.githubusercontent.com/55437339/228997276-34f2e11b-180f-4796-ac63-8a9166130110.png">
