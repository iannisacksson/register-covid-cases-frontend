import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { TableBody } from './styles';

const ComponentSkeleton = () => (
  <TableBody>
    <tr>
      <td>
        <Skeleton height={20} width="100%" />
      </td>
      <td>
        <Skeleton height={20} width="100%" />
      </td>
      <td>
        <Skeleton height={20} width="100%" />
      </td>
    </tr>
    <tr>
      <td>
        <Skeleton height={20} width="100%" />
      </td>
      <td>
        <Skeleton height={20} width="100%" />
      </td>
      <td>
        <Skeleton height={20} width="100%" />
      </td>
    </tr>
    <tr>
      <td>
        <Skeleton height={20} width="100%" />
      </td>
      <td>
        <Skeleton height={20} width="100%" />
      </td>
      <td>
        <Skeleton height={20} width="100%" />
      </td>
    </tr>
  </TableBody>
);

export default ComponentSkeleton;
