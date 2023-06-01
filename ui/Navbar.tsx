import NextLink from "next/link";
import { MenuOutlined } from "@mui/icons-material";
import { AppBar, Toolbar, IconButton, Link, Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton size="large" edge="start">
            <MenuOutlined />
          </IconButton>
          <NextLink href="/" passHref legacyBehavior>
            <Link underline="none">
              <Typography variant="h6" color="white">
                CookieMaster
              </Typography>
            </Link>
          </NextLink>
          <div style={{ flex: 1}}></div>
          <NextLink href="/theme-changer" passHref legacyBehavior>
            <Link underline="none">
              <Typography variant="h6" color="white">
                Cambiar Tema
              </Typography>
            </Link>
          </NextLink>
        </Toolbar>
      </AppBar>
    </>
  );
};
