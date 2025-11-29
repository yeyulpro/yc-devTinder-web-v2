
Testing
npm install -D vitest
@testing-library/react
@testing-library/user-event
@testing-library/jest-dom jsdom

npm i happy-dom (fake browser environment)

create vitest.config.js
 - environment:'jsdom',( or "happy-dom")=> fake browser environment
 - setupFiles:['./src/test/setup.js],
 -include:['src/**/*.{test,spec}.{js,jsx}']


set scripts : "test":"vitest" in package.json
Challenge:
I used MUI.
Due to the complex structure of MUI, it is difficult for test to catch elements.
=>Work around this: use data-testId or using getByRole
 e.g. screen.getByTestId("login-box");
Mock data:
=>MUI TextField는 내부적으로 <input>을 감싸므로 fireEvent.change로 value를 직접 세팅할 수 없음.

React Testing Library 공식 권장 방법: userEvent.type 사용.

이후 waitFor로 Redux 상태 반영 후 Navbar 렌더링 확인 가능.  userEvent.type은 MUI TextField 내부 input에 value를 정상적으로 넣어줍니다.
Challenge: 
테스트에서 로그인 상태가 되지 않으면 screen.getByTestId("login-test")는 찾을 수 없음 → 테스트 실패 원인
로그인 성공 후 Redux state가 업데이트되어야 나타남

**test with RTK-query
  use library ' msw' : a tool that lets the frontend app fake API calls;  during testing,use to simulate server responses.

  ** consider to prepare test for login.
  Points to consider in the test

-The useProfileQuery and useLogoutMutation RTK Query hooks are used in the Navbar.
-These hooks need to be mocked in the test.

-To verify that the Navbar changes after login, ensure that setUser is properly dispatched to the Redux store.

*Login state:

-isLoggedIn is managed in the slice, so the initial value should be false, and after login, it should be updated to true using mock data.

*Login scenario:

-Mock useLoginMutation in the LoginPage.
-Input credentials → submit → setUser dispatch → verify that the Navbar UI reflects the login state.


**createMemoryRouter는 React Router v6.4 이상에서 제공하는 테스트용 라우터 생성 함수
  실제 브라우저 환경 없이 페이지 이동, 경로 렌더링을 테스트할 수 있어요
한 번 npm run test를 실행하면, Vitest/React Testing Library가 “watch 모드”로 켜져 있다면 자동으로 계속 감시합니다



------------
Vitest + React Testing Library + MSW를 사용해 LoginPage에서 로그인하고, Redux 상태와 Navbar UI 변화를 확인하는 통합 테스트입니다.