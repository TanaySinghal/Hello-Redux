import React from 'react';
import { Item } from '../types';

export type DirectProps = {
  items: Item[];
};
export type CallbackProps = {
  addItem: () => void;
  clear: () => void;
};

type Props = DirectProps & CallbackProps;

export class ListView extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const list = this.props.items.map((item) => (
      <li key={item.id}>
        {item.text} {item.id}
      </li>
    ));

    return (
      <div>
        <button onClick={this.props.addItem}>Add</button>
        <button onClick={this.props.clear}>Clear</button>
        <ul>{list}</ul>
      </div>
    );
  }
}
