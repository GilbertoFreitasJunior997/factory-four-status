import { BADGE_ERROR_TEXT, BADGE_SUCCESS_TEXT } from "../badge/consts";

import { Card } from "./card";
import { baseCreateSut } from "../../test/base-create-sut";
import { waitFor } from "@testing-library/react";

const { createSut } = baseCreateSut(Card);

describe("Card", () => {
  it("Should show a success status when service is healthy", async () => {
    const { sut } = createSut({
      service: "accounts",
    });

    await waitFor(() => {
      expect(sut.queryByText(BADGE_SUCCESS_TEXT)).toBeVisible();
    });
  });

  it("Should show a error status when service is outage", async () => {
    const { sut } = createSut({
      service: "invites",
    });

    await waitFor(() => {
      expect(sut.queryByText(BADGE_ERROR_TEXT)).toBeVisible();
    });
  });
});
