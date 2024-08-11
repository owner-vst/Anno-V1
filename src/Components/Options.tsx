// function Options({rectangles,arrows,circles}) {
//     return (

//   <div className="bg-muted/40 border-l flex flex-col gap-4 p-4 ">
//     <div className="flex items-center gap-2 border-b pb-4">
//       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
//         <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
//         <circle cx={12} cy={12} r={3} />
//       </svg>
//       <span className="font-semibold">Options</span>
//     </div>
//     <div className="flex flex-col gap-4">
//       <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
//         <div className="flex flex-col space-y-1.5 p-6">
//           <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Shapes</h3>
//           <p className="text-sm text-muted-foreground">List of shapes drawn on the image</p>
//         </div>
//         <div className="p-6">
//           <div className="relative w-full overflow-auto">
//             <table className="w-full caption-bottom text-sm">
//               <thead className="[&_tr]:border-b">
//                 <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
//                   <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
//                     Type
//                   </th>
//                   <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
//                     Coordinates
//                   </th>
//                   <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
//                     Size
//                   </th>
//                   <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="[&_tr:last-child]:border-0">
//                 <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
//                   <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Rectangle</td>
//                   <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">100, 200</td>
//                   <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">300 x 200</td>
//                   <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
//                     <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
//                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
//                         <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
//                         <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//                         <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
//                       </svg>
//                       <span className="sr-only">Edit</span>
//                     </button>
//                     <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
//                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
//                         <path d="M3 6h18" />
//                         <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//                         <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//                         <line x1={10} x2={10} y1={11} y2={17} />
//                         <line x1={14} x2={14} y1={11} y2={17} />
//                       </svg>
//                       <span className="sr-only">Delete</span>
//                     </button>
//                   </td>
//                 </tr>
//                 <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
//                   <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Circle</td>
//                   <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">400, 300</td>
//                   <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">100</td>
//                   <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
//                     <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
//                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
//                         <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
//                         <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//                         <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
//                       </svg>
//                       <span className="sr-only">Edit</span>
//                     </button>
//                     <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
//                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
//                         <path d="M3 6h18" />
//                         <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//                         <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//                         <line x1={10} x2={10} y1={11} y2={17} />
//                         <line x1={14} x2={14} y1={11} y2={17} />
//                       </svg>
//                       <span className="sr-only">Delete</span>
//                     </button>
//                   </td>
//                 </tr>
//                 <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
//                   <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Arrow</td>
//                   <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">200, 400</td>
//                   <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">150 x 50</td>
//                   <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
//                     <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
//                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
//                         <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
//                         <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//                         <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
//                       </svg>
//                       <span className="sr-only">Edit</span>
//                     </button>
//                     <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
//                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
//                         <path d="M3 6h18" />
//                         <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//                         <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//                         <line x1={10} x2={10} y1={11} y2={17} />
//                         <line x1={14} x2={14} y1={11} y2={17} />
//                       </svg>
//                       <span className="sr-only">Delete</span>
//                     </button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//     )
// }

// export default Options
function Options({ rectangles, arrows, circles }) {
  const renderShapeRow = (shape, type) => {
    let coordinates, size;

    switch (type) {
      case "Rectangle":
        coordinates = `${shape.x}, ${shape.y}`;
        size = `${shape.width} x ${shape.height}`;
        break;
      case "Circle":
        coordinates = `${shape.x}, ${shape.y}`;
        size = `${shape.radius}`;
        break;
      case "Arrow":
        coordinates = `${shape.points[0]}, ${shape.points[1]}`;
        size = `${shape.points[2] - shape.points[0]} x ${
          shape.points[3] - shape.points[1]
        }`;
        break;
      default:
        break;
    }

    return (
      <tr
        key={shape.id}
        className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
      >
        <td className="p-4 align-middle">{type}</td>
        <td className="p-4 align-middle">{coordinates}</td>
        <td className="p-4 align-middle">{size}</td>
        <td className="p-4 align-middle">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
              <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
            </svg>
            <span className="sr-only">Edit</span>
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1={10} x2={10} y1={11} y2={17} />
              <line x1={14} x2={14} y1={11} y2={17} />
            </svg>
            <span className="sr-only">Delete</span>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-muted/40 border-l flex flex-col gap-4 p-4 overflow-auto">
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
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx={12} cy={12} r={3} />
        </svg>
        <span className="font-semibold">Options</span>
      </div>
      <div className="flex flex-col gap-4">
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Shapes
            </h3>
            <p className="text-sm text-muted-foreground">
              List of shapes drawn on the image
            </p>
          </div>
          <div className="p-6">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                      Type
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                      Coordinates
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                      Size
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {rectangles.map((rectangle) =>
                    renderShapeRow(rectangle, "Rectangle")
                  )}
                  {circles.map((circle) => renderShapeRow(circle, "Circle"))}
                  {arrows.map((arrow) => renderShapeRow(arrow, "Arrow"))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Options;
