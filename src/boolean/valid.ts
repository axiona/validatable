import Validatable from '../validatable.js';

export default function Valid<Assumption extends Validatable>(
    validatable : Assumption
) : validatable is Validatable<true> & Assumption {

    return validatable.valid === true;
}
