import "@testing-library/jest-dom";

// jsdom does not implement IntersectionObserver — provide a no-op stub.
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverStub,
});
