import Message from "../../global-types/TMessage";

export const findMsgById = (id: string, data: Array<Message>): Message => {
    const searchMsg = data.find((mensagem) => mensagem.id === id)!
    return searchMsg
}