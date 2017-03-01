// @flow
import type { TextProps } from './Text';
import type { Theme } from '../themes/types';
import React from 'react';
import { computeTextStyle } from './Text';

// Universal text input component. By default, it looks like editable text.
// For underline or the other effects, make a new component. Check Field.
// TODO: multiline and rows, use PlatformTextarea, react-autosize-textarea?

export type TextareaProps = TextProps & {
  disabled?: boolean,
  cols: number,
  rows: number,
};

type TextareaContext = {
  Textarea: () => React.Element<*>,
  theme: Theme,
};

const Textarea = (props: TextareaProps, { theme }: TextareaContext) => {
  const [textStyle] = computeTextStyle(theme, props);
  const {
    disabled = false,
    height = textStyle.lineHeight / theme.typography.lineHeight,
    // Some user agents (Chrome, RN Android) have default input padding.
    // We need to reset it to ensure consistent rendering across platforms.
    style,
    ...restProps
  } = props;

  return (
    <textarea
      height={height}
      {...(disabled ? { opacity: theme.states.disabled.opacity } : null)}
      {...restProps}
      style={{
        ...textStyle,
        ...(style && style(theme, textStyle)),
      }}
    />
  );
};

Textarea.contextTypes = {
  theme: React.PropTypes.object,
};

export default Textarea;