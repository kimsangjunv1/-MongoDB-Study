# 프로젝트 설명

## 사용된 라이브러리

- **express**: Node.js 웹 프레임워크 : mongoose에 추가해주기 위함
- **mongoose**: MongoDB와 Node.js 간의 ODM(Object Data Modeling) 라이브러리 : 연결하기 위함
- **dotenv**: 환경 변수를 관리하기 위한 라이브러리 : 환경변수를 위해
- **nodemon**: 수정시 자동 재시작 위해
- **vercel**: 배포용

## 폴더 구조

### `models` 폴더

- **역할**: Mongoose 스키마와 모델을 정의하는 파일들이 위치합니다.
- **주요 기능**: 데이터베이스에 저장될 문서의 구조를 정의하고, 데이터베이스와 상호작용하는 모델을 생성합니다.
- **내용물**: 각 데이터베이스 컬렉션에 해당하는 스키마 정의와 모델 파일들.
  - 예: `User.js`, `Article.js` 등.

### `routes` 폴더

- **역할**: 사용자 요청을 처리하고, 각 요청에 대해 적절한 응답을 반환하는 라우트 핸들러 파일들이 위치합니다.
- **주요 기능**: 클라이언트 요청을 받아서 모델과 상호작용하며, CRUD(Create, Read, Update, Delete) 동작을 수행합니다.
- **내용물**: 특정 엔드포인트에 대한 요청을 처리하는 라우트 파일들.
  - 예: `user.js`, `article.js` 등.

## 명령어

```bash
vercel login

git add .
git commit -m "Update Vercel deployment settings"
vercel --prod