import { ModalStatuses } from "./modal-statuses";
import { ModalStatusesProps } from "./types";
import { OLD_STATUS_LINE_TESTID } from "../old-status-line/consts";
import { Status } from "../../api/types";
import { baseCreateSut } from "../../test/base-create-sut";

const { createSut } = baseCreateSut(ModalStatuses);

const MOCKED_STATUSES: Status[] = [
  {
    success: true,
    message: "Healthy :3",
    hostname: "accounts-7c90624ca291",
    time: 1705179459134,
  },
];

const PROPS: ModalStatusesProps = {
  onHide: () => {},
  service: "accounts",
  statuses: MOCKED_STATUSES,
};

describe("ModalStatuses", () => {
  it("Should have at least one status line", () => {
    const { sut } = createSut(PROPS);

    expect(sut.getByTestId(OLD_STATUS_LINE_TESTID)).toBeVisible();
  });

  it("Should render with valid props", () => {
    const { sut } = createSut(PROPS);

    expect(sut).toBeTruthy();
  });
});
