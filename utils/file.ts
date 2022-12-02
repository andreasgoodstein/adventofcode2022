export const load = async (fileName: string) =>
  (await Deno.readTextFile(fileName)).split("\n");
