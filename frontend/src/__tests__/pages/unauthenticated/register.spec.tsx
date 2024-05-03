import { CreateUserUseCase } from '@/core/application/usecases/user'
import { MockUserRepository } from '@/core/infra/mocks/tests/user'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import RegisterPage from '@/pages/register'

const userRepository = new MockUserRepository()
const createUserUseCase = new CreateUserUseCase(userRepository)

describe('Register page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RegisterPage createUserUseCase={createUserUseCase} />
      </BrowserRouter>
    )
  })

  it('Should render title on screen', () => {
    const registerTitle = screen.getByRole('heading', { level: 1 })

    expect(registerTitle).toBeInTheDocument()
  })
})
