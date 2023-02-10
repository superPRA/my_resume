const validation = (UAB, circle, cross) => {
  const WinConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [7, 5, 3],
    [1, 4, 7],
    [8, 5, 2],
    [9, 6, 3],
  ];
  function o(item) {
    return circle.includes(item);
  }
  function x(item) {
    return cross.includes(item);
  }
  function xx(item) {
    for (let j = 0; j < item.length; j++) {
      if (!x(item[j])) {
        return false;
      }
    }
    return true;
  }
  function oo(item) {
    for (let j = 0; j < item.length; j++) {
      if (!o(item[j])) {
        return false;
      }
    }
    return true;
  }
  function winConfiguration() {
    for (let i = 0; i < WinConditions.length; i++) {
      if (oo(WinConditions[i])) {
        return {
          winStatus: "o",
          winBlocks: WinConditions[i],
        };
      }
      if (xx(WinConditions[i])) {
        return {
          winStatus: "x",
          winBlocks: WinConditions[i],
        };
      }
    }
    return null
  }
  return {
    winStatus: winConfiguration()?.winStatus,
    winBlocks: winConfiguration()?.winBlocks,
  };
};

export default validation;
