import { TrainingProgramItem } from "@/models/home.models"
import { createSlice } from "@reduxjs/toolkit"

interface HomeState {
    trainingProgramFirstColumn: TrainingProgramItem[]
    trainingProgramSecondColumn: TrainingProgramItem[]
}

let initialState: HomeState = {
    trainingProgramFirstColumn: [
        { month: 1, text: 'Meeting speakers and learning the basics of programming', rightLinePosition: true },
        { month: 3, text: 'Deepening into programming and building a portfolio', rightLinePosition: true },
        { month: 5, text: 'Continue to study complex technologies and create a good portfolio', rightLinePosition: true },
        { month: 7, text: 'Writing the final work, obtaining a certificate and the first work', rightLinePosition: true },
    ],
    trainingProgramSecondColumn: [
        { month: 2, text: 'Thoroughly study the basics of programming and perform simple tasks', rightLinePosition: false },
        { month: 4, text: 'Build portfolio and start studying complex technologies', rightLinePosition: false },
        { month: 6, text: 'Finish studying programming and build a good portfolio', rightLinePosition: false },
    ]
}

export const homeSlice = createSlice({ name: 'home', initialState, reducers: {} })
export const homeReducer = homeSlice.reducer
