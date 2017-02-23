// @flow
import type { State, User } from '../../common/types';
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { Box } from '../../common/components';
import { FormattedMessage } from 'react-intl';
import { Link } from '../components';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { Glyph, GlyphLink } from '../components/GlyphComponent';

const NavLink = ({ activeOnlyWhenExact, to, message = {} }) => (
  <FormattedMessage {...message}>
    {message => (
      <Link
        activeOnlyWhenExact={activeOnlyWhenExact}
        bold
        paddingHorizontal={0.5}
        paddingVertical={0.5}
        to={to}
      >
        {message}
      </Link>
    )}
  </FormattedMessage>
);


type NavProps = { viewer: ?User };

const Nav = ({ viewer }: NavProps) => (
  <Box
    flexWrap="wrap"
    flexDirection="row"
    justifyContent="space-around"
    paddingHorizontal={0.5}
    borderWidth={1}
    borderStyle="solid"
    borderRadius={20}
  >
    <NavLink to="#/berlin" message={linksMessages.shopButtons} />
    <NavLink to="#/brandenburg" message={linksMessages.customOrder} />
    <NavLink to="/contact" message={linksMessages.contact} />
    {!viewer && <NavLink to="/signin" message={linksMessages.signIn} />}
  </Box>
);

export default compose(
  connect((state: State) => ({ viewer: state.users.viewer })),
)(Nav);
