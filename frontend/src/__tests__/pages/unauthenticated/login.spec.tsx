import { LoginUserUseCase } from '@/core/application/usecases/user'
import { MockUserRepository } from '@/core/infra/mocks/tests/user'
import LoginPage from '@/pages/login'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

const userRepository = new MockUserRepository()
const loginUserUseCase = new LoginUserUseCase(userRepository)

describe('Login page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <LoginPage loginUserUseCase={loginUserUseCase} />
      </BrowserRouter>
    )
  })
  it('sum', () => expect(1 + 1).toBe(2))
})
