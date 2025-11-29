import {  vi } from "vitest";

vi.mock("axios", () => ({
  default: {
    post: vi.fn(),
  },
}));
