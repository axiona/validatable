import ArgumentContainer from '@alirya/function/argument/argument';
import Validation from '@alirya/boolean/validation/validation';
import CallbackArgumentParameters from './callback-argumenparameters';


export type CallbackArgumentParameterArgument<
    Arguments extends any[],
    Return extends boolean,
    > = Validation<Arguments, Return> & ArgumentContainer<Arguments>;


/**
 * destructure version
 *
 * @param argument
 */
export default class CallbackArgumentParameter<Arguments extends unknown[], Return extends boolean>
    extends  CallbackArgumentParameters<Arguments, Return> {

     constructor({argument, validation} : CallbackArgumentParameterArgument<Arguments, Return>) {
          super(argument, validation);
     }
}

