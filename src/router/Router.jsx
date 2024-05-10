import React from 'react';
import { useRoutes } from 'react-router-dom';

const router = ({allRoutes}) => {
  
    const routes = useRoutes([...allRoutes])
    return routes;
};
export default router;