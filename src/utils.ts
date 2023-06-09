import user from "./MockData/userData";

const dueDate: Date = new Date(`${user.dueDate}`);
const currentDate: Date = new Date();

// convert future or today date into ms
export const msBetweenDueDate: number = Math.abs(
  dueDate.getTime() - currentDate.getTime()
);

// convert past date into ms
export const msAfterDueDate: number = Math.abs(
  currentDate.getTime() - dueDate.getTime()
);

// convert ms to days for future and today                         hrs  mins sec   ms
export const daysBetweenDueDate: number = Math.round(
  msBetweenDueDate / (24 * 60 * 60 * 1000)
);

// convert ms to days for past                                     hrs  mins sec   ms
export const daysAfterDueDate: number = Math.round(
  msAfterDueDate / (24 * 60 * 60 * 1000)
);

//
/**
 * Hide a string numbers.
 * Use case:
 *  hide users account numbers
 */
export const maskNumber = (cc: string, num = 4, mask = "*") =>
  ("" + cc).slice(0, -num).replace(/./g, mask) + ("" + cc).slice(-num);
