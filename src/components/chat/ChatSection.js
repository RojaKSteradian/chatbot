import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  Divider,
  IconButton,
  Button,
  Tabs,
  Tab,
  Box,
  TextField,
  Container,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CloseIcon from "@mui/icons-material/Close";
import tabData from "./data/Data";
import ResponseText from "./sub-components/Text";
import ResponseVideo from "./sub-components/Video";
import ResponseAudio from "./sub-components/Audio";
import ResponseImage from "./sub-components/Image";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const ResponseContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "2rem",
}));

const ChatTextContainer = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: 20,
  width: "900px",
  [theme.breakpoints.down("sm")]: {
    width: "315px",
  },
  border: "0 solid #d9d9e3",
  borderRadius: "0.5rem",
  boxShadow: "0 0 10px rgba(0,0,0,.1)",
}));

const ChatTextfield = styled(TextField)(({ theme }) => ({
  width: "100%",
  maxHeight: "250px",
  overflow: "auto",
  background: "#fff",
  "& .MuiOutlinedInput-root": {
    alignItems: "flex-end",
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },
}));

const TabsContainer = styled("div")(({ theme }) => ({
  padding: "0.2rem",
  height: "100%",
  overflow: "hidden",
  ":hover": {
    overflow: "auto",
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(217,217,227,.8)",
    },
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  minHeight: "50px",
  color: "#EDEDF1",
  justifyContent: "flex-start",
  "&.Mui-selected": {
    backgroundColor: "#343541",
    color: "#EDEDF1",
    borderRadius: "0.5rem",
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  justifyContent: "flex-start",
  padding: "0.8rem 1rem 0.8rem 1.5rem",
  color: "#EDEDF1",
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ChatSection() {
 
  const theme = useTheme();
  const[chatdata, setchatData]=React.useState();
  const [value, setValue] = React.useState(0);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));  
  const [open, setOpen] = React.useState(isSmallScreen ? false : true);
  const [query, setQuery] = React.useState("");
  const [data, setData] = React.useState(null);
  // eslint-disable-next-line
  const [chatHistory, setChatHistory] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState("Enter a query");
  const navigate = useNavigate({ forceRefresh: true });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleNewChat = () => {
    setQuery("");
    setData(null);
    setErrorMessage("Enter a query");
  };
  const handleLogout = () => {
    // Clear cookies
    Cookies.remove("mobile_number");
    Cookies.remove("token");

    // Redirect to '/'
    navigate("/");
  };
  const submitQuery = () => {
    const reqURL = "http://api.innotrat.com:5000/extractTags";
    // Inside the `submitQuery` function
  fetch(reqURL, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": Cookies.get("token")
    },
    body: JSON.stringify({
      query: query,
      "mobile_number": Cookies.get("mobile_number")
    }),
  })
  .then((res) => {
    res.json()
      .then((data) => {
        // Check if data.isSuccess or data[0].isSuccess is true
        if (data.isSuccess || (data[0] && data[0].isSuccess)) {
          setErrorMessage("");
          setData(data);
          console.log("Incubation:", data[0]?.Incubation);
          console.log("Response", data?.Response);
          setchatData(data);

            }
           else {
          setErrorMessage("No results found related to this query.");
          setData(null);
        
      }  
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });

  };

  return (
    <MainContainer>
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "#353540",
          display: {
            xs: "block",
            sm: "none",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Can you provide me w...
          </Typography>
          {open ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              sx={{
                border: "1px solid #d9d9e3",
                borderRadius: "0.5rem",
                padding: "0.3rem",
              }}
            >
              <CloseIcon />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleNewChat}
            >
              <AddIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={{
          style: {
            backgroundColor: "#212023",
          },
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Box
          sx={{
            padding: "0.3rem",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            fullWidth
            sx={{
              textTransform: "none",
              justifyContent: "flex-start",
              padding: "0.5rem 1rem 0.5rem 1rem",
              color: "#EDEDF1",
              borderColor: "#4D4D4F",
            }}
            onClick={handleNewChat}
          >
            New Chat
          </Button>
        </Box>

        <TabsContainer>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            // sx={{ borderRight: 1, borderColor: "divider" }}
            TabIndicatorProps={{ style: { display: "none" } }}
          >
            {chatHistory ? (
              <div>
                {tabData.map((item, index) => {
                  return (
                    <StyledTab
                      key={index}
                      icon={
                        <ChatBubbleOutlineIcon
                          sx={{
                            fontSize: "1rem",
                          }}
                        />
                      }
                      iconPosition="start"
                      label={
                        item.title && item.title.length > 20
                          ? item.title.slice(0, 20) + "..."
                          : item.title
                      }
                      {...a11yProps(index)}
                    />
                  );
                })}
              </div>
            ) : (
              <Typography
                variant="body2"
                component="body1"
                textAlign="center"
                sx={{
                  mt: 2,
                  color: "#EDEDF1",
                }}
              >
                Your history will appear here.
              </Typography>
            )}
          </Tabs>
        </TabsContainer>
        <Divider
          sx={{
            backgroundColor: "#4D4D4F",
          }}
        />
        <ActionButton startIcon={<DeleteOutlineOutlinedIcon />} fullWidth>
          Clear conversations
        </ActionButton>
        <ActionButton startIcon={<HelpOutlineOutlinedIcon />} fullWidth>
          Help
        </ActionButton>
        <ActionButton startIcon={<LogoutOutlinedIcon />} fullWidth onClick={handleLogout}>
          Logout
        </ActionButton>
      </Drawer>
      <Main open={open}>
        <Container
          maxWidth="md"
          sx={{
            marginBottom: "6rem",
          }}
        >
          
        <ResponseContainer>
        {Array.isArray(chatdata) ? (
          chatdata && Object.entries(chatdata[0]).map(([key, value]) => {
            // console.log("roja", key, value);
            return value && value.length > 0 && key !== "Tags" ? (
              <ResponseText key={key} text={value} />
            ) : (
              <React.Fragment key={key} />
            );
          })
        ) : (
          chatdata && Object.entries(chatdata).map(([key, value]) => {
            console.log("roja", key, value);
            return value && value.length > 0 && key !== "Tags" ? (
              <ResponseText key={key} text={value} />
            ) : (
              <React.Fragment key={key} />
            );
          })
        )}
        {chatdata?.Image?.length > 0 && chatdata.Image ? (
                    <ResponseImage text={chatdata.Image} />
                  ) : null}
        {chatdata?.Video?.length > 0 && chatdata.Video ? (
                    <ResponseVideo src={chatdata.Video} />
                  ) : null}
        {chatdata?.Audio?.length > 0 && chatdata.Audio ? (
                    <ResponseAudio src={chatdata.Audio} />
                  ) : null} 
        </ResponseContainer>
          {/* </TabPanel>
            );
          })} */}

          <ChatTextContainer>
            <ChatTextfield
              label=""
              variant="outlined"
              multiline
              autoFocus
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="submit query"
                    color="primary"
                    onClick={submitQuery}
                    sx={{
                      padding: "0",
                    }}
                  >
                    <SendOutlinedIcon />
                  </IconButton>
                ),
              }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => {
                // enter without shift
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  submitQuery();
                }
                // shift + Enter
                if (e.key === "Enter" && e.shiftKey) {
                  setQuery(query + "\n");
                }
              }}
            />
          </ChatTextContainer>
        </Container>
      </Main>
    </MainContainer>
  );
}
