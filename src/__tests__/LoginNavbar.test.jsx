/*
// src/__tests__/LoginNavbar.test.jsx
import { describe, it, beforeAll, afterAll, afterEach, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import Navbar from '../app/shared/Navbar.jsx'
import { store } from '../app/store/store.js'
import LoginPage from '../app/components/LoginPage.jsx'

// ===================== MSW: Mock API =====================
const server = setupServer(
    rest.post('/login', async (req, res, ctx) => {
        const { emailId, password } = await req.json()

        if (emailId === 'test@example.com' && password === 'password') {
            return res(
                ctx.status(200),
                ctx.json({ first_name: 'Yeyul', last_name: 'Choi', photoUrl: 'avatar.png' })
            )
        }
        return res(ctx.status(401), ctx.json({ message: 'Invalid credentials' }))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// ===================== Integration Test =====================
describe('Login integration with Navbar', () => {
    it('shows user info in Navbar after successful login', async () => {
        const router = createMemoryRouter(
            [
                { path: '/', element: <Navbar /> },
                { path: '/login', element: <LoginPage /> },
            ],
            { initialEntries: ['/login'] } // start at login page
        )

        render(
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        )

        // -------------------- 초기 상태 확인 --------------------
        // test existance of the buttons for Register/Login 
        expect(screen.getByTestId('navbar-register')).toBeInTheDocument()
        expect(screen.getByTestId('navbar-login')).toBeInTheDocument()


        // enter credentials in login box
        await userEvent.type(screen.getByTestId('test-email'), 'test@example.com')
        await userEvent.type(screen.getByTestId('test-password'), 'password')
        await userEvent.click(screen.getByTestId('test-submit'))

        // ========= check after state change
        // waiting for a change of await로 async UI 
        const helloText = await screen.findByTestId('navbar-hello')
        expect(helloText).toBeInTheDocument()

        // check if the buttons of Register/Login disappear
        expect(screen.queryByTestId('navbar-register')).not.toBeInTheDocument()
        expect(screen.queryByTestId('navbar-login')).not.toBeInTheDocument()
    })
})
*/