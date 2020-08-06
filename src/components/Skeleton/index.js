import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

import { TableBody } from './styles';

const ComponentSkeleton = ({ qtdItems }) => {
  return (
    <TableBody>
      {Array(5)
        .fill()
        .map((index, item) => (
          <tr key={item}>
            {Array(qtdItems)
              .fill()
              .map((indexTd, itemTd) => (
                <td key={itemTd}>
                  <Skeleton height={20} width="100%" />
                </td>
              ))}
          </tr>
        ))}
    </TableBody>
  );
};

ComponentSkeleton.propTypes = {
  qtdItems: PropTypes.number.isRequired,
};

export default ComponentSkeleton;
