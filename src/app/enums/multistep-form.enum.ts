
export const Steps: {
  FIRST : "FIRST",
  SECOND : "SECOND",
  THIRD : "THIRD",
  FOURTH : "FOURTH"
} = {
  FIRST : "FIRST",
  SECOND : "SECOND",
  THIRD : "THIRD",
  FOURTH : "FOURTH"
};

export type Steps = (typeof Steps)[keyof typeof Steps];