import { ComponentProps, FC } from "react";

import { render } from "@testing-library/react";

// since components can have any props, this rule has to be disabled
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BaseSutProps = any;
type BaseSutComponent = FC<BaseSutProps>;
export const baseCreateSut = <
  TComponent extends BaseSutComponent,
  TProps = ComponentProps<TComponent>
>(
  component: TComponent
) => {
  const createSut = (props: TProps) => {
    const Component = component as BaseSutComponent;
    const sut = render(<Component {...(props as BaseSutProps)} />);

    return { sut };
  };

  return {
    createSut,
  };
};
