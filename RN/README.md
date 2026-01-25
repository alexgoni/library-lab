## Styling

### RN 기본 컴포넌트 3종

| 웹          | RN          |
| ----------- | ----------- |
| `div`       | `View`      |
| `span`, `p` | `Text`      |
| `button`    | `Pressable` |

### 스타일 방식 (Difference with CSS)

- px 단위가 아닌 dp
- rem / vw / vh / % 사용 불가
- Flexbox 기본 direction: column
- 모든 텍스트는 반드시 `<Text>` 컴포넌트로 감싸야 함
- 기본 `display: flex`

## Layout

| `_layout.tsx` must return navigator.

디렉토리 하위의 파일들은 가장 가까운 `_layout.tsx`를 찾고, 해당 navigator에 의해 렌더링된다.

### Stack vs Tab vs Slot

Stack: 수직 이동
Tab: 수평 이동
Slot: no navigate, no style, just children

## Navigation

### 1. push

```tsx
import { router } from "expo-router";

router.push("/detail");
```

- 이전 화면 남아 있음
- 뒤로가기 가능
- 목록 → 상세에 사용

### 2. replace

```tsx
router.replace("/home");
```

```
A → B → C

push: A → B → C → D
replace: A → B → D
```

### 3. modal - 위에 띄우는 별도 흐름

```tsx
router.push("/modal");
```
