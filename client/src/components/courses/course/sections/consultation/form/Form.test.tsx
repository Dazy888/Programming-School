import React from "react"
import { act, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Form } from "@/components/courses/course/sections/consultation/form/Form"

describe('Consultation form', () => {
    it('Name input : should be "Name is wrong', async () => {
        render(<Form/>)
        await act(async () => {
            await userEvent.type(screen.getByTestId('name'), '123')
        })
        expect(screen.queryByTestId('error-message')).toHaveTextContent('Name is wrong')
    })

    it('Name input : should not be error', async () => {
        render(<Form/>)
        await act(async () => {
            await userEvent.type(screen.getByTestId('name'), 'David')
        })
        expect(screen.queryByTestId('error-message')).toBeNull()
    })

    it('E-mail input : should be "Mail is wrong" error', async () => {
        render(<Form/>)
        await act(async () => {
            await userEvent.type(screen.getByTestId('mail'), 'davidhutsenlo@lalala')
        })
        expect(screen.queryByTestId('error-message')).toHaveTextContent('Mail is wrong')
    })

    it('E-mail input : should not be error', async () => {
        render(<Form/>)
        await act(async () => {
            await userEvent.type(screen.getByTestId('mail'), 'davidhutsenlo@gmail.com')
        })
        expect(screen.queryByTestId('error-message')).toBeNull()
    })
})