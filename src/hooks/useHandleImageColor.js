// useHandleImageColor.js

const useHandleImageColor = (img, newColor) => {
  return img
    .toString()
    .replaceAll('#16872F', newColor)
    .replaceAll('#6C54E6', newColor)
    .replaceAll('#0049E6', newColor)
    .replaceAll('#9C15F7', newColor)
    .replaceAll('#FF4CF8', newColor)
    .replaceAll('#3702C8', newColor)
    .replaceAll('#f44336', newColor);
};

export default useHandleImageColor;
