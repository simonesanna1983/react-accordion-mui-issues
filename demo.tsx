import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface FakeDataModel {
  id: number;
  title: string;
  addInfo: string;
  desc: string;
  isExpanded: boolean;
}

const fakeDataMockList: FakeDataModel[] = [];

for (var i = 0; i < 100; i++) {
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

export default function ControlledAccordions() {
  const [fakeDataList, setFakeDataList] =
    React.useState<FakeDataModel[]>(fakeDataMockList);

  const expandPanel = (data: FakeDataModel) => {
    debugger;
    const index = fakeDataList.findIndex((s) => s.id === data.id);
    if (index !== -1) {
      let temp = fakeDataList[index];
      temp = { ...temp, isExpanded: !temp.isExpanded };
      fakeDataList[index] = temp;

      setFakeDataList((fakeDataList) => [...fakeDataList]);
    }
  };

  console.log('fakeDataList', fakeDataList);
  return (
    <div>
      {fakeDataList.map((data) => (
        <Accordion
          expanded={data.isExpanded}
          onChange={() => {
            expandPanel(data);
          }}
          key={data.id}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {data.title}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {data.addInfo}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{data.desc}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
