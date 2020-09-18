export const removeDuplicateAlbums = (jsonData) => {
  let transformedData = [];
  let albumNames = [];

  for (let i = 0; i < jsonData.length; i++) {
    const item = jsonData[i];
    const albumName = item.collectionName;
    if (!albumNames.includes(albumName)) {
      albumNames.push(albumName);
      transformedData.push(item);
    } else {
      console.log("removing " + i, item);
    }
  }

  return transformedData;
};
