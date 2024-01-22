import * as api from "../../api/use-get-status";

import { BADGE_ERROR_TEXT, BADGE_SUCCESS_TEXT } from "../badge/consts";

import { Card } from "./card";
import { baseCreateSut } from "../../test/base-create-sut";

const { createSut } = baseCreateSut(Card);

type MockedData = ReturnType<(typeof api)["useGetStatus"]>;
const MOCKED_SUCCESS = {
  data: {
    success: true,
    message: "Healthy :3",
    hostname: "accounts-2cd2d9b5c223",
    time: 1705935327591,
  },
  isError: false,
  isLoading: false,
} as MockedData;

const MOCKED_ERROR = {
  data: undefined,
  isError: true,
  isLoading: false,
} as MockedData;

describe("Card", () => {
  it("Should show a success status when service is healthy", () => {
    vi.spyOn(api, "useGetStatus").mockImplementation(() => MOCKED_SUCCESS);
    const { sut } = createSut({
      service: "accounts",
    });

    expect(sut.queryByText(BADGE_SUCCESS_TEXT)).toBeVisible();
  });

  it("Should show a error status when service is outage", () => {
    vi.spyOn(api, "useGetStatus").mockImplementation(() => MOCKED_ERROR);
    const { sut } = createSut({
      service: "accounts",
    });

    expect(sut.queryByText(BADGE_ERROR_TEXT)).toBeVisible();
  });
});
