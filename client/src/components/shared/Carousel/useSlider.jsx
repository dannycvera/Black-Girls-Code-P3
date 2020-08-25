import * as React from "react";
import useInterval from "./useInterval";

function useSlider({
  total = 0, // the length of the slide array
  enabled = false, // pauses/disables the player
  useLoaded = false, // this allows for delayed loads like images or embeds
  speed = 1000, // speed in milliseconds to show each slide
  loop = true, // should it start back at the beginning
}) {
  const [offset, setOffset] = React.useState(0);
  const [items, setItems] = React.useState([]);

  function incrementOffset() {
    if (offset === total - 1) {
      setOffset(loop ? 0 : offset);
    } else {
      setOffset(offset + 1);
    }
  }
  function addItem(ref) {
    setItems([...items, ref]);
  }

  const loaded = useLoaded ? items.length === total : true;

  useInterval(() => {
    if (loaded && enabled && offset < total) {
      incrementOffset();
    }
  }, speed);
  return {
    offset, // this is the current index of the slider
    addItem, // this takes a ref and adds it to the items array to see if all have loaded
  };
}

export default useSlider;
