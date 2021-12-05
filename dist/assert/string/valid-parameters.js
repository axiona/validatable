import Name from "@dikac/t-object/string/name";
export default function ValidParameters(validatable, conversion = Name) {
    const message = [];
    message.push(conversion(validatable).trim());
    if ((validatable).valid) {
        message.push('is');
    }
    else {
        message.push('is not');
    }
    message.push('valid.');
    return message.join(' ');
}
//# sourceMappingURL=valid-parameters.js.map