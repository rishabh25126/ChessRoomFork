import React,{ useCallback, useEffect, useMemo, useRef, useState } from "react";
import { registerAllModules } from "handsontable/registry";
import { HotTable, HotTableClass } from "@handsontable/react";
import Toolbar from "../Toolbar";
import { MockData } from "./data";

registerAllModules();

interface TableComponentProps {
  exportBtnClicked: boolean;
}

function TableComponent(props: TableComponentProps) {
  const { exportBtnClicked } = props;
  const [isFilterEnable, setIsFilterEnable] = useState<boolean>(false)
  useEffect(() => {
   console.log("filter: ", isFilterEnable)
  }, [isFilterEnable])
  
  const hotTableRef = useRef<HotTableClass>(null);

  const cellFormating = (classNameToAppend: string) => {
    const hot = hotTableRef.current?.hotInstance;
    const selected = hot?.getSelected() || [];

    hot?.suspendRender();

    for (let index = 0; index < selected.length; index += 1) {
      const [row1, column1, row2, column2] = selected[index];
      const startRow = Math.max(Math.min(row1, row2), 0);
      const endRow = Math.max(row1, row2);
      const startCol = Math.max(Math.min(column1, column2), 0);
      const endCol = Math.max(column1, column2);

      for (let rowIndex = startRow; rowIndex <= endRow; rowIndex += 1) {
        for (
          let columnIndex = startCol;
          columnIndex <= endCol;
          columnIndex += 1
        ) {
          let cellClasses: string | string[] | undefined = hot?.getCellMeta(
            rowIndex,
            columnIndex
          )["className"];
          if (typeof cellClasses === "string") {
            cellClasses = cellClasses.includes(classNameToAppend)
              ? cellClasses.replace(classNameToAppend, "")
              : `${cellClasses} ${classNameToAppend} `;
            hot?.setCellMeta(rowIndex, columnIndex, "className", cellClasses);
          } else {
            hot?.setCellMeta(
              rowIndex,
              columnIndex,
              "className",
              classNameToAppend
            );
          }
        }
      }
    }

    hot?.render();
    hot?.resumeRender();
  };

  const data = useMemo(
    () => MockData,
    []
  );

  // Method to get table data

  const getTableData = useCallback(() => {
    if (hotTableRef.current) {
      const hotInstance = hotTableRef.current.hotInstance;
      return hotInstance?.getData();
    }
    return [];
  }, []);

  useEffect(() => {
    console.log("getTableData(): ", getTableData());
  }, [exportBtnClicked]);

  return (
    <div>
      <Toolbar isFilterEnable={isFilterEnable} setIsFilterEnable={setIsFilterEnable} cellFormating={cellFormating}/>
      <div className="flex items-center justify-center z-10">
        <HotTable
          ref={hotTableRef}
          data={data}
          rowHeaders={true}
          colHeaders={true}
          height="80vh"
          width="190vh"
          autoWrapRow={true}
          autoWrapCol={true}
          minSpareCols={50}
          minSpareRows={50}
          filters={isFilterEnable}
          dropdownMenu={isFilterEnable}
          licenseKey="non-commercial-and-evaluation"
          style={{ zIndex: "30" }}
          manualColumnResize={true} // Enable column resizing
          manualRowResize={true} // Enable row resizing
          outsideClickDeselects={false}
          selectionMode="multiple"
        />
      </div>
    </div>
  );
}

export default TableComponent;
