/**
 * Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed
 * since the last time the debounced function was invoked.
 *
 * @param func The function to debounce.
 * @param wait The number of milliseconds to delay.
 * @returns The new debounced function.
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
	let timeoutId: ReturnType<typeof setTimeout> | null = null;

	return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
		// Clear the current timeout if it exists
		if (timeoutId !== null) {
			clearTimeout(timeoutId);
		}

		// Set up a new timeout to invoke the function after the delay
		timeoutId = setTimeout(() => {
			func.apply(this, args);
		}, wait);

		// Use TypeScript's assertion to retain the type of the original function
	} as T;
}