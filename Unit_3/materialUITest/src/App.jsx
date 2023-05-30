import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Card, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dialog from '@mui/material/DialogTitle';

const theme = createTheme({
	palette: {
		primary: {
			main: "#D64933",
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			
			<Card
				raised={true}
				sx={{
					padding: "2rem",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					boxShadow: 5,
				}}
			>
				<Dialog>Hello</Dialog>
				<Typography variant="h1">h1. Heading</Typography>
				<Typography variant="h4" sx={{ margin: "1rem" }}>
					This is a heading I guess lol
				</Typography>
				<Button variant="contained">This is a button!</Button>
			</Card>
		</ThemeProvider>
	);
}

export default App;
