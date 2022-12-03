export const load = async (fileName: string) =>
  (await Deno.readTextFile(fileName)).split("\n");

export const time = async (func: () => Promise<void> | void) => {
  console.time("execution time");
  await func();
  console.timeEnd("execution time");
};
