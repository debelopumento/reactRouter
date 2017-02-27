import React from 'react'
import {combineReducers} from 'redux'


const GetMailsReducer=(state=0, action) => {
	return state
}

const allReducers = combineReducers({
	getMails: GetMailsReducer
})

export default allReducers