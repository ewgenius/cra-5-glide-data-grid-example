import React from "react";
import {
  DataEditor,
  GridCell,
  GridCellKind,
  GridColumn,
} from "@glideapps/glide-data-grid";

interface DummyItem {
  name: string;
  company: string;
  phone: string;
  email: string;
}

const data: DummyItem[] = [
  {
    name: "Deidre Morris",
    company: "GONKLE",
    email: "deidremorris@gonkle.com",
    phone: "+1 (867) 507-3332",
  },
  {
    name: "Sheryl Craig",
    company: "EVENTAGE",
    email: "sherylcraig@eventage.com",
    phone: "+1 (869) 520-2227",
  },
  {
    name: "Lidia Bowers",
    company: "ANOCHA",
    email: "lidiabowers@anocha.com",
    phone: "+1 (808) 414-3826",
  },
];

const App: React.VFC = () => {
  const getContent = React.useCallback(
    (cell: readonly [number, number]): GridCell => {
      const [col, row] = cell;
      const dataRow = data[row];
      const indexes: (keyof DummyItem)[] = [
        "name",
        "company",
        "email",
        "phone",
      ];
      const d = dataRow[indexes[col]];
      return {
        kind: GridCellKind.Text,
        allowOverlay: false,
        displayData: d,
        data: d,
      };
    },
    []
  );

  const columns = React.useMemo<GridColumn[]>(() => {
    return [
      {
        title: "Name",
        id: "name",
      },
      {
        title: "Company",
        id: "company",
      },
      {
        title: "Email",
        id: "email",
      },
      {
        title: "Phone",
        id: "phone",
      },
    ];
  }, []);

  return (
    <DataEditorContainer width={800} height={500}>
      <DataEditor
        getCellContent={getContent}
        columns={columns}
        rows={data.length}
      />
    </DataEditorContainer>
  );
};

export default App;
