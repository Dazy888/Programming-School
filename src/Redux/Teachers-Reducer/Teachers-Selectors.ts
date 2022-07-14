import {AppStateType} from "../Redux-Store"

export function getPythonTeachers(state: AppStateType) {
   return state.teachersPage.python
}

export function getAndroidTeachers(state: AppStateType) {
   return state.teachersPage.android
}

export function getIosTeachers(state: AppStateType) {
   return state.teachersPage.ios
}

export function getJsTeachers(state: AppStateType) {
   return state.teachersPage.js
}


export function getCPlusPlusTeachers(state: AppStateType) {
   return state.teachersPage.c_plus_plus
}

export function getPhpTeachers(state: AppStateType) {
   return state.teachersPage.php
}

export function getCSharpTeachers(state: AppStateType) {
   return state.teachersPage.c_sharp
}