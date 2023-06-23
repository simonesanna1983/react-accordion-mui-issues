import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface FakeDataModel {
  id: number;
  desc: string;
  isExpanded: boolean;
}

const fakeDataMockList: FakeDataModel[] = [];

for (var i = 0; i < 10; i++) {
  fakeDataMockList.push({ id: i, desc: 'aa' + i, isExpanded: false });
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
              General settings
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              I am an accordion
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
