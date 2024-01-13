import { BADGE_ERROR_TEXT, BADGE_SUCCESS_TEXT } from "../badge/consts";
import { Status, StatusError } from "../../api/types";

import { OldStatusLine } from "./old-status-line";
import { baseCreateSut } from "../../test/base-create-sut";

const { createSut } = baseCreateSut(OldStatusLine);

const MOCK_SUCCESS_DATA: Status = {
  success: true,
  message: "Healthy :3",
  hostname: "accounts-7c90624ca291",
  time: 1705179459134,
};

const MOCK_ERROR_DATA: StatusError = {
  error: new Error(),
  time: new Date(),
};

describe("OldStatusLine", () => {
  it("Should show a success status line", () => {
    const { sut } = createSut({ status: MOCK_SUCCESS_DATA });

    expect(sut.queryByText(BADGE_SUCCESS_TEXT)).toBeVisible();
  });

  it("Should show a error status line", () => {
    const { sut } = createSut({ status: MOCK_ERROR_DATA });

    expect(sut.queryByText(BADGE_ERROR_TEXT)).toBeVisible();
  });
});
