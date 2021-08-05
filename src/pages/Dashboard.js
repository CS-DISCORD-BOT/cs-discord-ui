import * as React from 'react';
import { BasePageHeader, BasePageStyle, BasePageContent } from '../utils/styles';

export const DashboardPage = ({ channel }) => {

  if (!channel) {
    return (
      <BasePageStyle>
        <BasePageHeader>Dashboard</BasePageHeader>
      </BasePageStyle>
    )
  }
  else {
    return (
      <BasePageStyle>
        <BasePageHeader>Dashboard</BasePageHeader>
        <BasePageContent>{channel.name}</BasePageContent>
      </BasePageStyle>
    )
  }
}