import React, { useState } from 'react';
import Accordian from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'A',
        content: 'Hello'
    },
    {
        title: 'B',
        content: 'Modi'
    },
    {
        title: 'C',
        content: 'Trump'
    }
];

const options = [
    {
        label: 'The Red',
        value: 'red'
    },
    {
        label: 'The Green',
        value: 'green'  
    },
    {
        label: 'The Blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
   return (
       <div>
           <Header />
          <Route path="/">
              <Accordian items={items} />
              </Route>
              <Route path="/list">
                  <Search />
              </Route>
              <Route path="/dropdown">
                  <Dropdown
                  label="Select a Color"
                  options={options}
                  selected={selected}
                  onSelectedChange={setSelected} 
                  />
              </Route>
              <Route path="/translate">
                  <Translate />
              </Route>
       </div>
   );
};