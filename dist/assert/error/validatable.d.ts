import Value from "@dikac/t-value/value";
declare namespace Validatable {
    const Parameter: typeof ValidatableParameter;
    const Object: typeof ValidatableObject;
}
export declare function ValidatableObject({ value, subject }: Value<object> & {
    subject?: string;
}): Error;
export declare function ValidatableParameter(value: object, subject?: string): Error;
export default Validatable;
