import { BADGE_ERROR_TEXT, BADGE_SUCCESS_TEXT } from "./consts";

import { Badge } from "./badge";
import { baseCreateSut } from "../../test/base-create-sut";

const { createSut } = baseCreateSut(Badge);

describe("Badge", () => {
  it("Should show success text when status isSuccess is true", () => {
    const { sut } = createSut({ isSuccess: true });
    expect(sut.queryByText(BADGE_SUCCESS_TEXT)).toBeVisible();
  });

  it("Should show error text when status isSuccess is false", () => {
    const { sut } = createSut({ isSuccess: false });
    expect(sut.queryByText(BADGE_ERROR_TEXT)).toBeVisible();
  });

  it("Should not show text when isLoading is true", () => {
    const { sut } = createSut({ isLoading: true });

    expect(sut.queryByText(BADGE_ERROR_TEXT)).toBeFalsy();
    expect(sut.queryByText(BADGE_SUCCESS_TEXT)).toBeFalsy();
  });
});
