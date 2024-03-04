import { render, screen } from "@testing-library/react";
import PatientDashboard from "./PatientDashboard";

describe("PatientDashboard", () => {
  describe("when the user load the PatientDashboard", () => {
    test("loading the page should be show the list of clinics", () => {
      render(<PatientDashboard />);

      const titleSelectClinic = screen.getByLabelText("title-select-clinic");
      expect(titleSelectClinic).toBeDefined();
      expect(screen.getByRole("combobox")).toBeVisible();
    });
  });
});
