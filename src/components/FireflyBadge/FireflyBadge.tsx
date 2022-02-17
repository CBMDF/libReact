import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function SimpleBadge(props: any) {
  return (
    <Badge badgeContent={props.number} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}