class ColumnItem {
    month: number
    text: string
    rightLinePosition: boolean

    constructor(month: number, text: string, rightLinePosition: boolean) {
        this.month = month
        this.text = text
        this.rightLinePosition = rightLinePosition
    }
}

let initialState = {
    trainingProgramFirstColumn: [
        new ColumnItem(1, 'Meeting teachers and learning the basics of programming', true),
        new ColumnItem(3, 'Deepening into programming and building a portfolio', true),
        new ColumnItem(5, 'Continue to study complex technologies and create a good portfolio', true),
        new ColumnItem(7, 'Writing the final work, obtaining a certificate and the first work', true)
    ],
    trainingProgramSecondColumn: [
        new ColumnItem(2, 'Thoroughly study the basics of programming and perform simple tasks', false),
        new ColumnItem(4, 'Build portfolio and start studying complex technologies', false),
        new ColumnItem(6, 'Finish studying programming and build a good portfolio', false)
    ]
}

type InitialStateType = typeof initialState

export function testReducer(state = initialState, action: any): InitialStateType {
    switch (action.type) {
        default:
            return {
                ...state
            }
    }
}