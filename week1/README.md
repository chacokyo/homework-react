# 컴포넌트 구조 정리

## button

### [BaseButton](/week1/src/components/buttons/button-base/README.md)

- **경로**: `src/components/buttons/button-base/`
- **파일**
  - `const.js` : 버튼 스타일 상수
  - `index.jsx` : `BaseButton` 함수형 컴포넌트
- **역할**: 프로젝트 전역에서 공통으로 사용하는 기본 버튼.

---

### [UploadButton](/week1/src/components/buttons/button-upload/INFO.md)

- **경로** : `src/components/buttons/upload-button/`
- **파일** : `const.js` : 업로드 상태 및 라벨(`UPLOAD_LABEL`) 상수
  - `index.jsx` : `UploadButton` 함수형 컴포넌트
- **역할**: 업로드 과정을 표현하는 버튼.

---

## icons

### [SvgIcon](/week1/src/components/icons/static/README.md)

- **경로** : `src/components/icons/static/`
- **파일** : `const.js` : `SVG_TYPE`, `SVG_PATH` 정의
  - `index.jsx` : `SvgIcon` 함수형 컴포넌트
- **역할**: 고정된 SVG 아이콘 렌더링.

---

### SpinnerIcon (animate)

- **경로**: `src/components/icons/animate/`
- **파일**: `index.jsx` : 애니메이션 스피너 아이콘
  - `style.css` :스피너 애니메이션 keyframes
- **역할**: 업로드 로딩 상태를 표현하는 애니메이션 아이콘

---

## 의존 관계

`UploadButton` : `BaseButton` + ( `SvgIcon` or `SpinnerIcon` )
