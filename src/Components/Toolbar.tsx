import { PAINT_OPTIONS } from "./Paint.constants";
function Toolbar({
  setDrawAction,
  setColor,
  onClear,
  onImportImageClick,
  onImportImageSelect,
  onExportClick,
  fileRef,
}: any): any {
  return (
   
    <div>
      <div className="bg-muted/40 border-r flex flex-col gap-4 p-4">
        <div className="flex items-center gap-2 border-b pb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
            <circle cx={9} cy={9} r={2} />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
          <span className="font-semibold">Annotate V1</span>
        </div>
        <nav className="flex flex-col gap-2">
          {PAINT_OPTIONS.map(({ id, label, icon }) => (
            <button
              className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start gap-2"
              onClick={() => setDrawAction(id)}
            >
              {icon}
              {label}
            </button>
          ))}

          <div
            data-orientation="horizontal"
            role="none"
            className="shrink-0 bg-border h-[1px] w-full"
          />
          <button className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start gap-2"
          onClick={onClear}>
           
<svg xmlns="http://www.w3.org/2000/svg"
 width={24}
 height={24} id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" ><path d="M12,0C7.973,0,4.213,2.036,2,5.365V0H1V5.5c0,.827,.673,1.5,1.5,1.5h5.5v-1H2.779C4.801,2.9,8.275,1,12,1c6.065,0,11,4.935,11,11s-4.935,11-11,11S1,18.065,1,12H0c0,6.617,5.383,12,12,12s12-5.383,12-12S18.617,0,12,0Z"/></svg>

            Reset
          </button>
          <input
            type="file"
            ref={fileRef}
            onChange={onImportImageSelect}
            style={{ display: 'none' }}
            accept="image/*"
          />
          <button className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start gap-2"
          onClick={onImportImageClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1={12} x2={12} y1={3} y2={15} />
            </svg>
            Import
          </button>
          <button className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start gap-2"
          onClick={onExportClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1={12} x2={12} y1={15} y2={3} />
            </svg>
            Export
          </button>
        </nav>
      </div>
    </div>
  );
}
export default Toolbar;
