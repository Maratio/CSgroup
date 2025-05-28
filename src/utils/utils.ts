export function getRandomStringFromArray(arr: string[]) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
      }