import React  from 'react';
import {setTypeColor} from '../services';


interface ListItemProps {
    poke: Pokemon;
}

const ListItem: React.FC<ListItemProps> = ({ poke } ) => {

    return(
        <div id='list-items'>
          <div className="row">
            <div className='col'>
            <ul>
              <div>
                <small>Height: {poke.height}</small>{' | '}
                <small>Weight: {poke.weight}</small>
              </div>
              <div className='text-secondary'>Type</div>
                  <div>
                      {poke.type.map((t, i) => {
                            return (
                                <span
                                className='badge badge-pill text-white mx-1'
                                style={{ backgroundColor: setTypeColor(t) }}
                                key={i}>
                                {t}
                                </span>
                            );
                            })}
                        </div>

                        <div className='text-secondary'>Weaknesses</div>
                        <div>
                          {poke.weaknesses.map((w, i) => {
                            return (
                              <span
                                className='badge badge-pill text-white mx-1'
                                style={{ backgroundColor: setTypeColor(w) }}
                                key={i}>
                                {w}
                              </span>
                            );
                          })}
                      </div>
                  
                </ul>
              </div>
            </div>
        </div>
    );
};

export default ListItem;