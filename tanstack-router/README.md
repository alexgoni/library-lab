## 특징

- 100% 추론된 TypeScript 지원: 모든 경로와 파라미터에서 완벽한 타입 추론을 제공합니다.
- 타입 안전한 JSON 기반 Search Params 관리 API: 쿼리 스트링을 객체처럼 안전하게 다룹니다.
- 자동 경로 프리페칭(Prefetching): 사용자가 클릭하기 전에 다음 페이지 데이터를 미리 가져옵니다.
- 파일 기반 라우트 생성: 파일 구조를 기반으로 라우트를 자동 생성합니다.

## 큰 흐름

프로젝트는 아래 순서로 동작합니다.

1. `src/main.tsx`에서 앱을 마운트한다.
2. 라우터를 생성하고 `RouterProvider`에 연결한다.
3. `src/routes` 아래 파일들을 기준으로 라우트가 구성된다.
4. `src/routeTree.gen.ts`가 파일 라우트 정보를 자동 생성한다.
5. `src/routes/__root.tsx`가 공통 레이아웃 역할을 하고, 각 페이지는 `Outlet` 위치에 렌더링된다.

## 파일별 역할

### `src/main.tsx`

애플리케이션 시작점입니다.

- DOM의 `#app` 요소를 찾는다
- 라우터를 생성하거나 가져온다
- `RouterProvider`로 전체 앱을 감싼다

즉, React 앱이 실제로 브라우저에 붙는 진입점입니다.

### `src/router.tsx`

TanStack Router 인스턴스를 만드는 파일입니다.

- `routeTree`를 연결한다
- `scrollRestoration` 같은 라우터 옵션을 설정한다
- 타입 등록을 통해 라우터 타입 안정성을 제공한다

프로젝트가 커질수록 라우터 관련 설정은 이 파일에서 관리하게 됩니다.

### `src/routes/__root.tsx`

루트 라우트입니다.

- 전체 페이지의 공통 레이아웃 역할
- `Outlet`을 통해 자식 페이지 렌더링
- Devtools 같은 전역 UI 연결

중요한 개념은 `Outlet`입니다. 현재 활성화된 페이지가 이 위치에 들어옵니다.

### `src/routes/index.tsx`

`/` 경로에 해당하는 홈 페이지입니다.

### `src/routes/about.tsx`

`/about` 경로에 해당하는 페이지입니다.

- `createFileRoute('/about')`로 경로를 선언
- 독립된 페이지 컴포넌트를 렌더링

### `src/routeTree.gen.ts`

자동 생성 파일입니다.

- `src/routes`의 파일들을 바탕으로 라우트 트리를 생성
- 타입 안전한 라우팅을 가능하게 함
- 직접 수정하면 안 됨

## 설정 파일

### `vite.config.ts`

Vite 설정 파일입니다.

현재 기준으로 다음 플러그인이 연결되어 있습니다.

- React
- Tailwind CSS
- TanStack Router Vite 플러그인
- TanStack Devtools
- `tsconfig` 경로 별칭 지원

여기서 중요한 점은 `tanstackRouter({ target: 'react', autoCodeSplitting: true })` 설정이
파일 기반 라우팅과 자동 코드 분할을 도와준다는 점입니다.
