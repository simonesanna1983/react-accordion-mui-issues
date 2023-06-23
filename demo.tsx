import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './demo.scss';
import { Grid } from '@mui/material';

export interface FakeDataModel {
  id: number;
  title: string;
  addInfo: string;
  desc: string;
  isExpanded: boolean;
}

export default function ControlledAccordions() {
  const [fakeDataList, setFakeDataList] = React.useState<FakeDataModel[]>([]);

  const inputRef = React.useRef(null);
  const [numerofItems, setNumerofItems] = React.useState<number>(10);

  const tabItems = React.useMemo(() => {
    debugger;
    const fakeDataMockList: FakeDataModel[] = [];
    for (var i = 0; i < numerofItems; i++) {
      fakeDataMockList.push({
        id: i,
        title: 'title' + i,
        addInfo: 'addInfo' + i,
        desc:
          'desc gagsdfgdfsgergsdrgfesdrghesdrgthjeryrjyrtghtrjtyrrhgtjhtryhgtghtghestrgreth' +
          i,
        isExpanded: false,
      });
    }

    setFakeDataList(fakeDataMockList);
  }, [numerofItems]);

  const expandPanel = (data: FakeDataModel) => {
    const index = fakeDataList.findIndex((s) => s.id === data.id);
    if (index !== -1) {
      let temp = fakeDataList[index];
      temp = { ...temp, isExpanded: !temp.isExpanded };
      fakeDataList[index] = temp;

      setFakeDataList((fakeDataList) => [...fakeDataList]);
    }
  };

  const handleClick = () => {
    debugger;
    if (inputRef?.current && inputRef?.current) {
      const val = Number((inputRef?.current as any).value);

      console.log('inputRef?.current?.value', val);
      if (!isNaN(val) && val > 0) {
        setNumerofItems(val);
      }
    }
  };

  return (
    <div>
      <div>
        Insert Number of Items to show:
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>OK</button>
      </div>
      {fakeDataList.map((data) => (
        <Accordion
          expanded={data.isExpanded}
          onChange={() => {
            expandPanel(data);
          }}
          className="ctr-card ctr-accordian"
          key={'accordion' + data.id + '_' + data.desc}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{ marginTop: '20px' }}
            key={'accordionSummary' + data.id + '_' + data.desc}
          >
            <Grid container className={'ctr-grid'}>
              <Grid item xs={2}>
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  {data.title}
                </Typography>
              </Grid>

              <Grid item xs={10}>
                <Typography sx={{ color: 'text.secondary' }}>
                  {data.addInfo}
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{data.desc}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
