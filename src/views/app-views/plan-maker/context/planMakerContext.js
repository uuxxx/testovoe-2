import { createContext } from 'react';

// selectedComponent: 1 | null
// components: {
//   1: {name: 'table-4', x: 0, y: 0}
// }

export default createContext({ components: {}, selectedComponent: null });
