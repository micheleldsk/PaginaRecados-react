import { createSlice } from "@reduxjs/toolkit";
import Message from "../components/global-types/TMessage";
import { StateApp } from "./rootReducer";

export type MsgState = {
    selectId: string,
    msgList: Array<Message>,
    showModalMsg: {
        open: boolean,
        type: string,
    };
};

const initialState: MsgState = {
    selectId: '',
    msgList: [],
    showModalMsg: {open: false, type: ''}
};

export const msgSelectAll = (state: StateApp) => state.msgSlice

const msgSlice = createSlice({
    name: 'msg',
    initialState ,
    reducers: {
        resetState: (state) => initialState,
        addMsg: (state, action) => {
            state.msgList = [...state.msgList,action.payload]
        },
        editMsg: (state, action) => {
            const {id, titulo, mensagem } = action.payload
            const findMsg = state.msgList.findIndex((mensagem: Message) => mensagem.id === id)!
            state.msgList[findMsg].id = id
            state.msgList[findMsg].titulo = titulo
            state.msgList[findMsg].mensagem = mensagem
            state.msgList[findMsg].userId = state.msgList[findMsg].userId
            state.msgList.splice(findMsg, 1, state.msgList[findMsg])
        },
        deleteMsg: (state, action) => {
            const filtered = state.msgList.filter((mensagem: Message) => mensagem.id !== action.payload) 
            state.msgList = filtered
        },
        setModalMsg: (state, action) => {
            const {open, type} = action.payload
            state.showModalMsg = {open, type}
        },
        resetModalMsg: (state) => {
            state.showModalMsg = initialState.showModalMsg
        },
        setSelectId: (state, action) => {
            state.selectId = action.payload
        },
        resetSelectId: (state) => {
            state.selectId = initialState.selectId
        },
    },
    extraReducers: {}
});

export const { resetState, resetModalMsg, setModalMsg, setSelectId, resetSelectId, deleteMsg, editMsg, addMsg } = msgSlice.actions
export default msgSlice.reducer