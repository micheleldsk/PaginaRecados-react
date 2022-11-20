import Message from "./TMessage";

type User = {
    email: string,
    password: string,
    messages: Array<Message>,
};

export default User;