import React from "react"
import { act, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/react"
import { News } from "@/components/home/news/News"

describe('News', () => {
    describe('Input validation', () => {
        it('should be "Field is required" error', async () => {
            render(<News/>)
            const submitBtn = screen.getByRole('button')
            await act(async () => {
                await userEvent.click(submitBtn)
            })
            expect(screen.queryByTestId('error-message')).toHaveTextContent('Field is required')
        })

        it('should be "Invalid e-mail" error', async () => {
            render(<News/>)
            await act(async () => {
                await userEvent.type(screen.getByRole('textbox'), 'alexgalitsku@gmail.lalalal')
            })
            expect(screen.queryByTestId('error-message')).toHaveTextContent('Invalid e-mail')
        })

        it('should be no error', async () => {
            render(<News/>)
            await act(async () => {
                await userEvent.type(screen.getByRole('textbox'), 'davidhutsenko@gmail.com')
            })
            expect(screen.queryByTestId('error-message')).toBeNull()
        })
    })
})