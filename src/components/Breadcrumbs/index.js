import React from 'react';
import { BreadcrumbsText } from './styles';

const Breadcrumbs = ({ route }) => {
    return (
        <BreadcrumbsText>{route}</BreadcrumbsText>
    );
};

export default Breadcrumbs;