import React, {
  useState,
} from 'react';

import {
  Tabs, Tab, Box, Typography, List,
  ListItem,
  ListItemText, Divider, IconButton,
} from '@mui/material';
// import CommentIcon from '@mui/icons-material/Comment';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

// import

const TabPanels = () => {
  const [value, setValue] = useState(0);
  const [list, setList] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  fetch('/member.json', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((json) => {
      setList(json);
    });

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab label={'議員'} />
          <Tab label={'文件'} />
        </Tabs>
      </Box>
      <Box>
        <List>
          {list.map((e) => (
            <>
              <ListItem
                key={''}
                secondaryAction={(
                  <>
                    <IconButton>
                      <PhoneIcon />
                    </IconButton>
                    <IconButton>
                      <EmailIcon />
                    </IconButton>
                  </>
                )}
              >
                <ListItemText
                  primary={(
                    <>
                      <Typography sx={{ fontSize: '0.8em' }}>
                        {e.type}
                      </Typography>
                      <Typography sx={{ fontSize: '1em', fontWeight: '700' }}>
                        {e.name}
                      </Typography>
                    </>
                  )}
                  secondary={(
                    <Typography sx={{ fontSize: '0.8em', color: '#999' }}>
                      {e.tag}
                    </Typography>
                  )}
                />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default TabPanels;
