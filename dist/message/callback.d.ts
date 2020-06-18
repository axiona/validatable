import Message from "@dikac/t-message/message";
import Validatable from "../validatable";
import Value from "@dikac/t-value/value";
import ValueInfer from "@dikac/t-value/infer/value";
import Wrapper from "../value/wrapper";
export default class Callback<Msg, Subject extends Validatable & Value = Validatable & Value> extends Wrapper<Subject> implements Readonly<Message<Msg>> {
    callback: (value: ValueInfer<Subject>, valid: boolean) => Msg;
    constructor(subject: Subject, callback: (value: ValueInfer<Subject>, valid: boolean) => Msg);
    get message(): Msg;
}
