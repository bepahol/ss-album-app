import * as R from "ramda";

const albums = (state) => R.path(["album", "albums"], state);

export default {
  albums,
};
