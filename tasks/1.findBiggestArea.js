/*
Given an array of positive integers representing the heights of vertical lines,
find two lines that form a container with the maximum area.
The function should return the maximum area and the indices of these lines.
*/
(
  () => {
    const arr = [6, 8, 9, 3, 23, 7, 11, 10];

    const findBiggestArea = (arr) => {
      const arrLength = arr.length;
      
      if(arrLength < 2) return;

      let leftPointer;
      let rightPointer;

      const biggestArea = {
        area: 0
      };

      for(let i = 0; i < arrLength; i++) {
        rightPointer = arrLength - 1;
        leftPointer = i;

        if(rightPointer <= leftPointer) break;

        for(let j = leftPointer; j < arrLength; j++) {
          if(rightPointer <= leftPointer) break;

          const small = Math.min(arr[leftPointer], arr[rightPointer]);
          const area = small * (rightPointer - leftPointer);

          if(biggestArea.area < area) {
            biggestArea.area = area;
            biggestArea.leftPointer = leftPointer;
            biggestArea.rightPointer = rightPointer;
          }

          rightPointer -= 1;
        }
      }

      return biggestArea;
    };

    console.log(findBiggestArea(arr));
  }
)();