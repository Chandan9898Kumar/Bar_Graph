import { render, screen } from "@testing-library/react";
import App from "./App";

const texts = ["Quarterly Rating", "Rating High", "Rating Low"];
describe("App component Testing", () => {
  test("Check Quarterly Rating test", () => {
    render(<App />);
    texts.forEach((item) => {
      const linkElement = screen.getByText(item);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
