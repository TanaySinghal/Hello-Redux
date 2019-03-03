import { connect } from 'react-redux';
import {
  ListView,
  DirectProps as ListDirectProps,
  CallbackProps as ListCallbackProps,
} from '../components/ListView';
import { addHello, clearHello } from '../actions';
import { Item } from '../types';
import { AppState } from '../reducers';

const mapStateToProps = (state: AppState) =>
  ({ items: state.helloReducer as Item[] } as ListDirectProps);

const mapDispatchToProps = (dispatch: any) =>
  ({
    addItem: () => dispatch(addHello('Hello')),
    clear: () => dispatch(clearHello()),
  } as ListCallbackProps);

// Little more verbose than it needs to be but it demonstrates
// how we can do something like a factory pattern here
const connectedProps = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default connectedProps(ListView);
