import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderHook, waitFor } from "@testing-library/react";
import { useApi } from "./useApi";

const server = setupServer(
  rest.get("/api", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "John Doe",
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should fetch data", async () => {
  const { result } = renderHook(() => useApi());

  await waitFor(() => {
    expect(result.current.data).toEqual({
      name: "John Doe",
    });
  });
});
