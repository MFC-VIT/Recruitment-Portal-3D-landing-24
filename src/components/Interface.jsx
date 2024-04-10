import { Affix, Button, Stack } from "@mantine/core";
import { useCharacterAnimations } from "../context/CharAnimation";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();
  return (
    <Affix position={{ bottom: 50, right: 20 }}>
      <Stack>
        {animations.map((animations, index) => (
          <Button
            key={animations}
            variant={index === animationIndex ? "filled" : "light"}
            onClick={() => setAnimationIndex(index)}
          >
            {animations}
          </Button>
        ))}
      </Stack>
    </Affix>
  );
};

export default Interface;
