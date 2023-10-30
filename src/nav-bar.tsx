import { Button, Flex, Switch } from "@radix-ui/themes";
import { useAppState } from "./app-state";

export const NavBar = () => {
  const appState = useAppState();
  return (
    <div>
      <Flex gap="2" direction="row" align={"center"}>
        <Switch
          defaultChecked
          onClick={() => appState.setDarkTheme(!appState.darkTheme)}
        />
        {appState.themeMode}
        <Button color="cyan" variant="outline">
          Test
        </Button>
      </Flex>
    </div>
  );
};
