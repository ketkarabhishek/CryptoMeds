import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
} from "@material-ui/core";

export default function DownloadFile(props) {
  const [loading, setloading] = useState(true);
  const [windowUrl, setwindowUrl] = useState(null);
  const [fileType, setfileType] = useState("");

  useEffect(() => {
    async function fetchFile() {
      const IPFS_URL = "https://ipfs.io/ipfs/";
      const response = await fetch(IPFS_URL + props.hash);
      const type = response.headers.get("Content-Type");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      setwindowUrl(url);
      setfileType(type);
      setloading(false);
      // window.location.href = response.url;
    }
    // return () => {
    //     cleanup
    // };

    fetchFile();
  }, [props]);

  if (loading === false) {
    return (
      <Link href={windowUrl} target="_blank" underline="none">
        {/* <Card>
                        <CardActionArea>
                        <Grid container justify="space-between">
                            <FontAwesomeIcon icon="file-pdf" size="3x" />
                            <Typography>Record</Typography>
                        </Grid>
                        </CardActionArea>
                    </Card> */}

        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon="file-pdf" size="3x" />
          </ListItemIcon>
          <ListItemText primary="Record" />
        </ListItem>
      </Link>
    );
  }

  return (
    <div>
      <CircularProgress />
    </div>
  );
}
