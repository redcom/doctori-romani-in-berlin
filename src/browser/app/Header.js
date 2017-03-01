// @flow
import type { State, User } from '../../common/types';
import React from 'react';
import { Box } from '../../common/components';
import { compose } from 'ramda';
import { connect } from 'react-redux';

type HeaderProps = { viewer: ?User };

const Header = ({ viewer }: HeaderProps) => (
  <Box
    flexWrap="wrap"
    flexDirection="row"
    paddingHorizontal={0.5}
  >
    {false && !viewer && 'bottom'}
  </Box>
);

export default compose(
  connect((state: State) => ({ viewer: state.users.viewer })),
)(Header);
