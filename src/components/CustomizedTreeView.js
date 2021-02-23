import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import CheckBox  from '@material-ui/icons/CheckBox';

import TreeItem from '@material-ui/lab/TreeItem';
import { Checkbox, TextField } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
  inputInput: {
    padding: "4px 8px",
    color: "#fff"
  }
});

export default function CustomizedTreeView({treeValues, setTreeValue}) {
  const classes = useStyles();

  // FOR EDITABLE 
  const [value, setValue] = useState("input field");
 
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleTreeChange = (event) => {

    setTreeValue({ ...treeValues, [event.target.name]: event.target.checked });
    console.log(treeValues)
  };

  const { Chrome, Calendar, Applications, Documents, OSS, Material, src, index, tree } = treeValues;
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >

      <TreeItem nodeId="1" label={
        <FormControlLabel
          control={<Checkbox name="Applications" value={Applications} onChange={handleTreeChange} />}
          label="Applications"
        />
      }>
        <TreeItem nodeId="2"
          label={
            <FormControlLabel
              control={<Checkbox name="Calendar" value={Calendar} onChange={handleTreeChange} />}
              label="Calendar"
            />
          }
        />
        <TreeItem nodeId="3" label={
          <FormControlLabel
            control={<Checkbox name="Chrome" value={Chrome} onChange={handleTreeChange} />}
            label="chrome"
          />
        }
        />

        <TreeItem nodeId="4"
          label={

            <FormControlLabel
              control={<Checkbox name="Chrome" value={Chrome} onChange={handleTreeChange} />}
              label={<TextField
                value={value}
                variant="outlined"
                InputProps={{ classes: { input: classes.inputInput } }}
                onChange={handleChange}
              />}
            />
          }
        />
      </TreeItem>
      <TreeItem nodeId="5"
        label={
          <FormControlLabel
            control={<Checkbox name="Documents" value={Documents} onChange={handleTreeChange} />}
            label="Documents"
          />
        }
      >
        <TreeItem nodeId="10"
          label={
            <FormControlLabel
              control={<Checkbox name="OSS" value={OSS} onChange={handleTreeChange} />}
              label="OSS"
            />
          } />
        <TreeItem nodeId="6"
          label={
            <FormControlLabel
              control={<Checkbox name="Material" value={Material} onChange={handleTreeChange} />}
              label="Material"
            />
          }
        >
          <TreeItem nodeId="7"
            label={
              <FormControlLabel
                control={<Checkbox name="src" value={src} onChange={handleTreeChange} />}
                label="src"
              />
            }
          >
            <TreeItem nodeId="8"
              label="index"
              label={
                <FormControlLabel
                  control={<Checkbox name="index" value={index} onChange={handleTreeChange} />}
                  label="index"
                />
              }
            />
            <TreeItem nodeId="9"
              label={
                <FormControlLabel
                  control={<Checkbox name="tree" value={tree} onChange={handleTreeChange} />}
                  label="tree"
                />
              }
            />
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}