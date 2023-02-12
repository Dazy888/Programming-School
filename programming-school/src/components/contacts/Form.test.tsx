import React from "react"
import userEvent from "@testing-library/user-event"
import {act, render, screen} from "@testing-library/react"
import { Form } from "@/components/contacts/Form"

describe('Contacts form', () => {
    it('Name input : should be "Invalid name" error', async () => {
        render(<Form/>)
        await act(async () => {
            await userEvent.type(screen.getByPlaceholderText('Your name'), '125')
        })
        expect(screen.queryByTestId('error-message')).toHaveTextContent('Invalid name')
    })

    it('Name input : should not be error', async () => {
        render(<Form/>)
        await act(async () => {
            await userEvent.type(screen.getByPlaceholderText('Your name'), 'David')
        })
        expect(screen.queryByTestId('error-message')).toBeNull()
    })
})