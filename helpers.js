/**
 * @param {Function} fn
 */
export function asyncHandler(fn) {
  return function (...args) {
    /** @type {import("express").NextFunction} */
    const next = args[args.length - 1];

    return Promise.resolve(fn(...args)).catch(next);
  };
}
