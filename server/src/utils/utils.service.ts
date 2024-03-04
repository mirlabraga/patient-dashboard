export class UtilsService {
  public static async convertToObjectArray(string: any) {
    const [keys, ...rest] = string
      .trim()
      .split('\n')
      .map((item: string) => item.split(','));

    const objectArray = rest.map((item: string | any[]) => {
      const object = {};
      keys.forEach(
        (key: string | number, index: number) => (object[key] = item.at(index)),
      );
      return object;
    });

    console.log(objectArray);
    return objectArray;
  }
}
