import { AppStateType } from "@/store/store"
import { TrainingProgramItemI } from "@/interfaces/home"

type getTrainingProgramContent = (state: AppStateType) => TrainingProgramItemI[]

export const getTrainingProgramFirstColumnContent: getTrainingProgramContent = (state) => state.home.trainingProgramFirstColumn
export const getTrainingProgramSecondColumnContent: getTrainingProgramContent = (state) => state.home.trainingProgramSecondColumn